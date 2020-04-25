<template>
  <div class="app-container">
    <h3>Results Pivottable</h3>
    <div class="filter-container">
      <el-date-picker v-model="dateFrom" type="datetime" format="yyyy-MM-dd" placeholder="From" />
      <!--<el-date-picker v-model="dateTo" type="datetime" format="yyyy-MM-dd" placeholder="To" /> -->
      <el-input-number v-model="limit" />
      <el-button v-waves class="filter-item" type="mini" icon="el-icon-search" @click="refreshData">
        Submit
        <el-button />
      </el-button></div>
    <vue-pivottable-ui
      :data="pivotData"
      :cols="cols"
      :rows="rows"
      :hidden-attributes="hiddenAttributes"
      :aggregator-name="aggregatorName"
      :renderer-name="rendererName"
      :derived-attributes="derivedAttributes"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { resultsList } from '@/api/results'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'

export default {
  name: 'ResultPivot',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    VuePivottable,
    VuePivottableUi
  },
  data() {
    const dateFormat = (field, format) => record => Vue.moment(record[field]).format(format)
    return {
      dateFrom: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      dateTo: new Date(),
      limit: 1000,
      aggregatorName: 'Count',
      pivotData: [],
      rendererName: 'Table Heatmap',
      rows: ['campaign'],
      cols: ['exec.verdict'],
      derivedAttributes: {
        'year': dateFormat('cre.time', 'YYYY'),
        'month': dateFormat('cre.time', 'M'),
        'day': dateFormat('cre.time', 'D'),
        'month name': dateFormat('cre.time', 'MMM'),
        'day name': dateFormat('cre.time', 'ddd'),
        'Week number': dateFormat('cre.time', 'W')
      },
      hiddenAttributes: ['exec.logs']
    }
  },
  created() {
    this.refreshData()
  },

  methods: {
    bin(value, binWidth) {
      return value - value % binWidth
    },
    refreshData() {
      const query = {
        fl: true,
        'cre.time': {
          $gt: this.dateFrom.toISOString()
          // $lt: this.dateTo.toISOString()
        },
        s: { 'cre.time': -1 },
        l: this.limit,
        f: '-__v -_id -exec.duts.0.__v -exec.duts._id'
      }
      resultsList(query)
        .then(({ data }) => {
          const results = this._.map(data, (r) => {
            console.log(r)

            // round duration by 10s
            r.duration = this.bin(parseFloat(r['exec.duration']), 10)
            delete r['exec.duration']

            const components = []
            const features = []
            for (const k of Object.keys(r)) {
              if (k.match(/\.\d/)) {
                if (k.match(/\.fut\.\d/)) {
                  features.push(r[k].toLowerCase())
                  delete r[k]
                }
                if (k.match(/\.cut\.\d/)) {
                  components.push(r[k].toLowerCase())
                  delete r[k]
                }
              }
            }
            delete r['exec.sut.tag']
            delete r['exec.sut.cut']
            delete r['exec.sut.fut']
            r.component = components.sort().join(',')
            r.feature = features.sort().join(',')

            r.passrate = r['exec.verdict'] === 'pass' ? 100.0 : 0
            r.inconcRate = r['exec.verdict'] === 'inconclusive' ? 100.0 : 0
            return r
          })
          this.pivotData = results
        })
    },
    toggle: function(todo) {
      todo.done = !todo.done
    }
  }
}
</script>
