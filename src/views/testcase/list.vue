<template>
  <div class="app-container">
    <b-table
      id="my-table"
      striped="true"
      bordered="true"
      head-variant="light"
      small="true"
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

      <!-- details view -->
      <template v-slot:row-details="row">
        <vue-json-pretty
          :data="row.item"
          :deep="3"
          :deep-collapse-children="true"
          :show-length="true"
          :show-double-quotes="false"
        />
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
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  name: 'TestcaseList',
  components: {
    VueJsonPretty
  },
  data() {
    return {
      selectedColumns: [],
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
          key: 'other_info.description',
          sortable: false,
          label: 'Description'
        }
      ],
      total: 0,
      sortBy: 'tcid',
      sortDesc: false,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  methods: {
    rowClicked(row) {
      this.$set(row, '_showDetails', !row._showDetails)
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
      return testList(countQuery)
        .then(({ data }) => {
          this.total = data.count
          return testList(query)
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
