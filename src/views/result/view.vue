<template>
  <div class="post">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="result" class="content">
      <h3>{{ result.tcid }}</h3>
      <b-tabs content-class="mt-3">
        <b-tab title="Details">
          <vue-json-pretty
            :data="result"
            :deep="3"
            :deep-collapse-children="true"
            :show-length="true"
            :show-double-quotes="false"
          />
        </b-tab>
        <b-tab title="Test History" active>
          <b-table
            id="result-history-table"
            striped="true"
            bordered="true"
            head-variant="light"
            small="true"
            hover="true"
            :items="getList"
            :fields="fields"
            :busy.sync="listLoading"
            class="mt-3"
            responsive="sm"
            no-local-sorting
            primary-key="_id"
            selectable
            select-mode="single"
            @row-clicked="rowClicked"
          >

            <!-- Optional default data cell scoped slot -->
            <template v-slot:cell(cre.time)="{ value }">
              <i>{{ value | moment('YYYY.MM.DD hh:mm') }}</i>
            </template>
            <template v-slot:cell(exec.verdict)="{value}">
              <span :style="`color: ${getVerdictColor(value)}`">
                {{ value }}
              </span>
            </template>
            <template v-slot:cell(exec.duts.0.sn)="data">
              <div v-b-tooltip.hover placement="bottom" :title="'View resource: '+data.value">
                <router-link :to="{ name: 'ViewResource', params: { sn: _.get(data, 'item.exec.duts.0.sn') }}">{{ data.value }}</router-link>
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
              <vue-json-pretty
                :data="row.item"
                :deep="3"
                :deep-collapse-children="true"
                :show-length="true"
                :show-double-quotes="false"
              />
            </template>
          </b-table>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { resultsList, searchResult } from '@/api/results'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

export default {
  components: {
    VueJsonPretty
  },
  data() {
    return {
      loading: false,
      result: null,
      error: null,
      listLoading: false,
      fields: [
        {
          key: 'cre.time',
          sortable: true,
          label: 'Created at',
          tooltip: 'Search greater than day X: "{gt}2022.3.29"'
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
          label: 'Note',
          tooltip: 'search supports regex. E.g. /error/'
        },
        {
          key: 'exec.duts.0.model',
          sortable: false,
          label: 'Dut model'
        },
        {
          key: 'exec.duts.0.sn',
          sortable: false,
          label: 'Dut SN'
        }
      ]
    }
  },
  created() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    async fetchData() {
      this.error = this.result = null
      this.loading = true
      const id = this.$route.params.id
      try {
        const { data } = await searchResult(id)
        this.result = data
      } catch (error) {
        this.error = `result with id "${id}" not found!`
      }
      this.loading = false
      this.$root.$emit('bv::refresh::table', 'result-history-table')
    },
    async getList() {
      const query = {
        tcid: this.result.tcid,
        l: 100,
        s: { 'cre.time': -1 }
      }
      const { data } = await resultsList(query)
      return data
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
    }
  }
}
</script>
