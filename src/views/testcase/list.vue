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
    >
      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell(cre.time)="data">
        <i>{{ data.value | moment('MM/DD/YYYY hh:mm') }}</i>
      </template>
      <template v-slot:table-busy>
        <div class="text-center text-danger my-2">
          <b-spinner class="align-middle" />
          <strong>Loading...</strong>
        </div>
      </template>

      <!-- Details button -->
      <template v-slot:cell(show_details)="row">
        <b-button size="sm" class="mr-2" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button>
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
import { testList } from '@/api/testcases'

export default {
  name: 'TestcaseList',
  filters: {
    pretty: function(value) {
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
          sortable: true
        },
        {
          key: 'other_info.type',
          sortable: true,
          label: 'Test Type'
        },
        {
          key: 'status.value',
          sortable: true,
          label: 'Status'
        },
        {
          key: 'show_details'
        }
      ],
      total: 0,
      sortBy: 'tcid',
      sortDesc: false,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 10
      }
    }
  },
  methods: {
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
      console.log(this.listQuery, query, this.sortBy, this.sortDesc)

      const countQuery = this._.merge({ t: 'count' }, this._.omit(query, ['s', 'l', 'sk']))
      return testList(countQuery)
        .then(({ data }) => {
          console.log(data)
          this.total = data.count
          return testList(query)
        })
        .then(({ data }) => {
          return data
        })
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

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
