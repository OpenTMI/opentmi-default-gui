<template>
  <div class="app-container">
    <el-dialog title="Similarity Note table" :visible.sync="similarityDialogTableVisible">
      <el-button @click="addRow">Add</el-button>
      <el-button @click="saveAll">Save All</el-button>
      <el-button @click="resetDefaults">Reset defaults</el-button>
      <el-table
        :data="similarNotes"
        style="width: 100%;"
        height="250"
      >
        <el-table-column property="value" label="Note">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.value"
              size="small"
              style="text-align:center"
            />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="Operations" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click.native.prevent="deleteRow(scope.$index, scope.row)">
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
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
      <el-input-number v-model="limit" size="small" step="1000" min="100" />
      <el-button type="primary" size="small" icon="el-icon-search" @click="refreshData">
        Refresh
      </el-button>
      <el-tooltip content="These rules allows to categorize exec.notes. Normally there is notes when test fails." placement="bottom">
        <el-button type="primary" size="small" @click="similarityDialogTableVisible = true">
          similarityNote rules
        </el-button>
      </el-tooltip>
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
import { Vue2Storage } from 'vue2-storage'
import { resultsList } from '@/api/results'
import { VuePivottable, VuePivottableUi } from 'vue-pivottable'
import 'vue-pivottable/dist/vue-pivottable.css'

import stringSimilarity from 'string-similarity'
Object.defineProperty(Vue.prototype, '$ss', { value: stringSimilarity })
Vue.use(Vue2Storage)

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
      similarityDialogTableVisible: false,
      defaultNotes: [
        { value: 'TimeoutError: tx complete timeout' },
        { value: "Element 'id=open' did not appear in" },
        { value: 'Parent suite setup failed: WebDriverException: Message: An unknown server-side error occurred while processing the command. Original error: Error executing adbExec. Original error: \'Command \'/lib/android-sdk/platform-tools/adb -P 5037 push app.apk /data/local/tmp/appium_cache/app.apk\' timed out after 90000ms\'. Try to increase the 90000ms adb execution timeout represented by \'adbExecTimeout\' capability\t' }
      ],
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
      similarNotes: []
    }
  },
  mounted() {
    this.similarNotes = this.$storage.get('similarNotes', this.defaultNotes)
  },
  created() {
    // The configuration of the plugin can be changed at any time.
    // Just call the setOptions method and pass the object with the settings to it.
    this.$storage.setOptions({
      prefix: 'result_pivot_',
      driver: 'local'
    })
    this.refreshData()
  },

  methods: {
    bin(value, binWidth) {
      return value - value % binWidth
    },
    resetDefaults() {
      this.$confirm('This will permanently restore defaults similarity notes. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.similarNotes = this.defaultNotes
        this.saveAll()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Canceled'
        })
      })
    },
    deleteRow(index, rows) {
      this.similarNotes.splice(index, 1)
    },
    addRow() {
      const newRow = { value: '' }
      this.similarNotes = [newRow, ...this.similarNotes]
    },
    saveAll() {
      this.$storage.set('similarNotes', this.similarNotes)
    },
    getSimilarityTable() {
      return this._.map(this.similarNotes, 'value')
    },
    findSimilarity(note) {
      if (this._.isEmpty(note)) return ''
      const { bestMatch } = this.$ss.findBestMatch(note, this.getSimilarityTable())
      console.log(`${bestMatch.rating}: ${note.substr(0, 200)}`)
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

.el-table__row .el-input .el-input__inner{
  border-style:none;
}
.hover-row .el-input .el-input__inner{
  border-style:solid;
}
</style>
