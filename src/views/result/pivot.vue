<template>
  <div class="app-container">
    <h3>Results Pivottable</h3>
    <div class="filter-container">
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        size="small"
        range-separator="To"
        start-placeholder="Start date"
        end-placeholder="End date"
        :picker-options="pickerOptions"
        format="yyyy-MM-dd"
      />
      <el-input-number v-model="limit" size="small" step="1000" min="1000" />
      <el-button v-waves size="small" class="filter-item" type="primary" icon="el-icon-search" @click="refreshData">
        Submit
      </el-button>
    </div>
    <vue-pivottable-ui
      id="pivot"
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

import stringSimilarity from 'string-similarity'
Object.defineProperty(Vue.prototype, '$ss', { value: stringSimilarity })

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
      dateRange: [
        new Date(Date.now() - 3600 * 1000 * 24 * 7),
        new Date(Date.now() + 3600 * 1000 * 24)],
      pickerOptions: {
        firstDayOfWeek: 1,
        shortcuts: [{
          text: 'Last week',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            end.setTime(end.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            end.setTime(end.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            end.setTime(end.getTime() + 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
          }
        }]
      },
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
      hiddenAttributes: ['exec.logs'],
      similarNotes: [
        'TimeoutError: tx complete timeout',
        "Element 'id=XX' did not appear in",
        'InvalidElementStateException: Message: XX The application under test with bundle id is not running, possibly crashed'
      ]
    }
  },
  created() {
    this.refreshData()
  },

  methods: {
    bin(value, binWidth) {
      return value - value % binWidth
    },
    findSimilarity(note) {
      if (this._.isEmpty(note)) return ''
      const { bestMatch } = this.$ss.findBestMatch(note, this.similarNotes)
      console.log(`${bestMatch.rating}: ${note}`)
      if (bestMatch.rating > 0.6) {
        return bestMatch.target
      }
      return note
    },
    refreshData() {
      const query = {
        fl: true,
        'cre.time': {
          $gt: this.dateRange[0].toISOString(),
          $lt: this.dateRange[1].toISOString()
        },
        s: { 'cre.time': -1 },
        l: this.limit,
        f: '-__v -_id -exec.duts.0.__v -exec.duts._id'
      }
      resultsList(query)
        .then(({ data }) => {
          const results = this._.map(data, (r) => {
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
            r.noteSimilar = this.findSimilarity(r['exec.note'])
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
<style>
.pvtUi {
  margin-left: 0px;
  #table-layout:fixed;
}
.pvtTable th {
  max-width: 600px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
