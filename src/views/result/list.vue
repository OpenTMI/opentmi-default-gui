<template>
  <div class="app-container">

    <el-select
      v-model="selectedColumns"
      multiple
      style="width: 100%;"
      type="small"
      placeholder="Select columns"
      @change="columnChange"
    >
      <el-option
        v-for="item in columns"
        :key="item.key"
        :label="item.label"
        :value="item.key"
      />
    </el-select>

    <b-table
      id="my-table"
      striped="true"
      bordered="true"
      head-variant="light"
      small="true"
      hover
      :items="_getList"
      :fields="fields"
      :busy.sync="listLoading"
      class="mt-3"
      responsive="sm"
      no-local-sorting
      primary-key="_id"
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
        <el-collapse style="margin-left: 50px; margin-right: 50px">
          <el-collapse-item title="View Raw data" accordion="true">
            <pre>{{ row.item | pretty }}</pre>
          </el-collapse-item>
        </el-collapse>
      </template>
    </b-table>
    <b-pagination
      v-model="listQuery.page"
      :total-rows="total"
      :per-page="listQuery.limit"
      aria-controls="my-table"
      align="center"
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
      selectedColumns: [],
      fields: [],
      columns: [
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
          key: 'campaign',
          sortable: true,
          label: 'Campaign'
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
          key: 'exec.duts.vendor',
          sortable: false,
          label: 'Dut0 Vendor',
          formatter: (value, key, item) => this._.get(item, 'exec.duts.0.vendor', '')
        },
        {
          key: 'exec.duts.model',
          sortable: false,
          label: 'Dut0 Model',
          formatter: (value, key, item) => this._.get(item, 'exec.duts.0.model', '')
        },
        {
          key: 'exec.sut.branch',
          sortable: false,
          label: 'Sut Branch',
          formatter: (value, key, item) => this._.get(item, 'exec.sut.branch', '')
        },
        {
          key: 'exec.sut.branch',
          sortable: false,
          label: 'Sut commitId',
          formatter: (value, key, item) => this._.get(item, 'exec.sut.commitId', '').substr(0, 7)
        }
      ],
      reload: this._.debounce(this._reload, 2000),
      total: 0,
      sortBy: 'cre.time',
      sortDesc: true,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
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
  mounted() {
    this.selectedColumns = [
      'cre.time', 'tcid', 'campaign',
      'exec.verdict', 'exec.duts', 'exec.sut',
      'exec.note', 'exec.duts.model']
    this.columnChange()
  },
  methods: {
    lengthLimiter(value, maxLength = 20) {
      let out = value.substr(0, maxLength)
      if (value.length > maxLength) {
        out += '...'
      }
      return out
    },
    columnChange() {
      this.fields = this.selectedColumns.map(key => this.columns.find(obj => obj.key === key))
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
      this._.unset(query, 'limit')
      this._.unset(query, 'page')

      if (this.sortBy) {
        query.s = { [this.sortBy]: this.sortDesc ? -1 : 1 }
      } else {
        query.s = '{"cre.time": -1}'
      }
      Object.keys(query).map((key) => {
        if (this._.includes(['cre.time', 'exec.verdict', 't', 'l', 'sk', 's'], key)) {
          return
        }
        let value = query[key]
        if (value.startsWith('*')) {
          value = value.slice(1)
          if (value.endsWith('*')) {
            query[key] = `/${value.slice(0, -1)}/`
          } else {
            query[key] = `{ei}${value}`
          }
        } else if (value.endsWith('*')) {
          value = value.slice(0, -1)
          query[key] = `{bi}${value}`
        }
      })

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
