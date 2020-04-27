<template>
  <div class="app-container">
    <b-table
      id="my-table"
      striped
      hover
      :items="_getList"
      :fields="fields"
      :busy.sync="listLoading"
      class="mt-3"
      responsive="sm"
      no-local-sorting
      primary-key="_id"
      :sort-changed="listLoading"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      selectable
      select-mode="single"
      @row-clicked="rowClicked"
    >

      <!-- filter row -->
      <template slot="top-row" slot-scope="{ fields }">
        <td v-for="field in fields" :key="field.key">
          <select v-if="field.key == 'exec.verdict'" v-model="listQuery[field.key]">
            <option />
            <option>pass</option>
            <option>fail</option>
            <option>inconclusive</option>
          </select>
          <!--<el-date-picker
            v-else-if="field.key == 'cre.time'"
            v-model="listQuery['cre.time']"
            type="daterange"
            size="small"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            format="yyyy-MM-dd"
          /> -->
          <input
            v-else-if="field.key == 'exec.duts'"
            v-model="listQuery['exec.duts.model']"
            placeholder="Dut Model"
          >
          <input
            v-else-if="field.key == 'exec.sut'"
            v-model="listQuery['exec.sut.branch']"
            placeholder="Branch"
          >
          <input v-else v-model="listQuery[field.key]" :placeholder="field.label" @keyup.enter="_reload">
        </td>
      </template>

      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell(tcid)="{value}">
        <div v-b-tooltip.hover placement="bottom" :title="value">
          {{ lengthLimiter(value, 30) }}
        </div>
      </template>
      <template v-slot:cell(cre.time)="{ value }">
        <i>{{ value | moment('MM/DD/YYYY hh:mm') }}</i>
      </template>
      <template v-slot:cell(exec.verdict)="{value}">
        <span :style="`color: ${getVerdictColor(value)}`">
          {{ value }}
        </span>
      </template>
      <template v-slot:cell(exec.note)="{value}">
        <div v-b-tooltip.hover placement="bottom" :title="value">
          {{ lengthLimiter(value) }}
        </div>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template>

      <!-- details view -->
      <template v-slot:row-details="row">
        <pre>{{ row.item | pretty }}</pre>
      </template>
    </b-table>
    <b-pagination
      v-model="listQuery.page"
      :total-rows="total"
      :per-page="listQuery.limit"
      aria-controls="my-table"
      first-number
      last-number
    />
  </div>
</template>

<script>
import { resultsList } from '@/api/results'

export default {
  name: 'ResultList',
  filters: {
    pretty(value) {
      return JSON.stringify(value, null, 2)
    }
  },
  data() {
    return {
      fields: [
        {
          key: 'cre.time',
          sortable: true,
          label: 'Created at'
        },
        {
          key: 'tcid',
          sortable: true,
          label: 'Testcase ID'
        },
        {
          key: 'exec.verdict',
          sortable: true,
          label: 'Verdict'
        },
        {
          key: 'exec.note',
          sortable: false,
          label: 'Note'
        },
        {
          key: 'exec.duts',
          sortable: false,
          label: 'Dut',
          formatter: (value, key, item) => {
            const defValue = { vendor: '', model: '' }
            const dut0 = this._.get(item, 'exec.duts.0', defValue)
            return `${dut0.vendor}-${dut0.model}`
          }
        },
        {
          key: 'exec.sut',
          sortable: false,
          label: 'Sut',
          formatter: (value, key, item) => {
            const defValue = { branch: '', commitId: '' }
            const sut = this._.get(item, 'exec.sut', defValue)
            return `${sut.branch}/${sut.commitId.substr(0, 7)}`
          }
        }
      ],
      reload: this._.debounce(this._reload, 2000),
      total: 0,
      sortBy: 'cre.time',
      sortDesc: true,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  watch: {
    listQuery: {
      handler() {
        this.reload()
      },
      deep: true
    }
  },
  methods: {
    lengthLimiter(value, maxLength = 20) {
      let out = value.substr(0, maxLength)
      if (value.length > maxLength) {
        out += '...'
      }
      return out
    },
    rowClicked(row) {
      this.$set(row, '_showDetails', !row._showDetails)
    },
    getVerdictColor(value) {
      const colors = {
        pass: '#2E7D32',
        inconclusive: '#a15c00',
        fail: '#C62828',
        skip: '#455A64',
        blocked: '#000c44',
        error: '#C62828'
      }
      const color = colors[value]
      return color || '#000000'
    },
    updateList(page) {
      this.listQuery.page = page
      this.reload()
    },
    _reload() {
      this.$root.$emit('bv::refresh::table', 'my-table')
    },
    _getList() {
      const query = this._.omitBy(this.listQuery, this._.isNil)
      query.l = query.limit
      query.sk = (query.page - 1) * query.limit

      if (this.sortBy) {
        query.s = { [this.sortBy]: this.sortDesc ? -1 : 1 }
      } else {
        query.s = '{"cre.time": -1}'
      }
      this._.unset(query, 'limit')
      this._.unset(query, 'page')
      const countQuery = this._.merge({ t: 'count' }, this._.omit(query, ['s', 'l', 'sk']))
      return resultsList(countQuery)
        .then(({ data }) => {
          this.total = data.count
          return resultsList(query)
        })
        .then(({ data }) => data)
        .catch(error => {
          console.error(error)
          this.total = 0
          // Returning an empty array, allows table to correctly handle
          // internal busy state in case of error
          return []
        })
    }
  }
}
</script>

<style>
.tooltip .tooltip-inner{
  max-width: 500px !important;
  width: 400px !important;
}
</style>
