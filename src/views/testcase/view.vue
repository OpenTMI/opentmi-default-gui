<template>
  <div class="app-container">
    <div v-if="loading" class="loading">Loading...</div>

    <div v-if="error" class="error">{{ error }}</div>

    <div v-if="result" class="content">
      <h3>Testcase ID: {{ result.tcid }}</h3>
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
        <b-tab title="Results History" active>
          <b-table
            id="result-history-table"
            ref="history-table"
            striped="true"
            bordered="true"
            head-variant="light"
            small="true"
            hover="true"
            :items="items"
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
      ],
      items: [],
      currentPage: 0,
      perPage: 10,
      totalItems: 0
    }
  },
  mounted() {
    console.log(this.$refs)
    const tableScrollBody = this.$refs['history-table'].$el
    /* Consider debouncing the event call */
    tableScrollBody.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    /* Clean up just to be sure */
    const tableScrollBody = this.$refs['history-table'].$el
    tableScrollBody.removeEventListener('scroll', this.onScroll)
  },
  async created() {
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
    await this.fetchData()
    await this.refreshHistoryTotals()
    await this.fetchHistory()
  },
  methods: {
    async fetchData() {
      const id = this.$route.params.id
      if (this._.get(this.result, '_id') === id) {
        // already updated
        return
      }

      this.error = this.result = null
      this.loading = true

      try {
        const { data } = await searchResult(id)
        this.result = data
      } catch (error) {
        this.error = `result with id "${id}" not found!`
      }
      this.loading = false
      this.$root.$emit('bv::refresh::table', 'result-history-table')
    },
    async refreshHistoryTotals() {
      const { data } = await resultsList({ tcid: this.result.tcid, t: 'count' })
      this.totalItems = data
    },
    async fetchHistory() {
      const query = {
        tcid: this.result.tcid,
        l: this.perPage,
        sk: this.currentPage * this.perPage,
        s: { 'cre.time': -1 }
      }
      /* No need to call if all items retrieved */
      if (this.items.length === this.totalItems) return
      const { data } = await resultsList(query)
      const newItems = data
      /* Add new items to existing ones */
      this.items = this._.uniq(this.items.concat(newItems))
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
    onScroll(event) {
      if (
        event.target.scrollTop + event.target.clientHeight >=
        event.target.scrollHeight
      ) {
        if (!this.isBusy) {
          this.fetchHistory()
        }
      }
    }
  }
}
</script>
