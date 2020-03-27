<template>
  <div class="app-container">
    <b-table
      id="my-table"
      striped
      hover
      :items="getList"
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
      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell(cre.time)="data">
        <i>{{ data.value | moment('MM/DD/YYYY hh:mm') }}</i>
      </template>
      <template v-slot:cell(exec.verdict)="{ value }">
        <span :style="`color: ${getVerdictColor(value)}`">
          {{ value }}
        </span>
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
      @change="updateList"
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
  methods: {
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
      this.$root.$emit('bv::refresh::table', 'my-table')
    },
    getList() {
      const query = this._.clone(this.listQuery)
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
