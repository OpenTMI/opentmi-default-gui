<template>
  <div class="app-container">
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
      :sort-changed="listLoading"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      selectable
      select-mode="single"
      @row-clicked="rowClicked"
    >

      <!-- filter row -->
      <template slot="top-row" slot-scope="data">
        <td v-for="field in data.fields" :key="field.key">
          <select v-if="field.key == 'type'" v-model="listQuery[field.key]">
            <option />
            <option>system</option>
            <option>dut</option>
            <option>instrument</option>
            <option>accessories</option>
            <option>computer</option>
            <option>room</option>
          </select>
          <select v-else-if="field.key == 'status.value'" v-model="listQuery[field.key]">
            <option />
            <option>active</option>
            <option>maintenance</option>
            <option>storage</option>
            <option>broken</option>
          </select>
          <input v-else v-model="listQuery[field.key]" :placeholder="field.label" @keyup.enter="_reload">
        </td>
      </template>

      <!-- Optional default data cell scoped slot -->
      <template v-slot:cell(cre.time)="{ value }">
        <i>{{ value | moment('MM/DD/YYYY hh:mm') }}</i>
      </template>
      <!--  todo: tooltip does not work yet
      <template v-slot:cell(status.value)="{value}" v-slot:row-details="row">
        <div v-b-tooltip.hover placement="bottom" :title="row.item.status.note">
          {{ value }}
        </div>
      </template> -->

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
    />
  </div>
</template>

<script>
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { resourceList } from '@/api/resources'

export default {
  name: 'ResourceList',
  components: {
    VueJsonPretty
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
          key: 'name',
          sortable: true
        },
        {
          key: 'type',
          sortable: true
        },
        {
          key: 'status.value',
          sortable: true,
          label: 'Status'
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
      return resourceList(countQuery)
        .then(({ data }) => {
          this.total = data.count
          return resourceList(query)
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
