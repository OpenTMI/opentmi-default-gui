<template>
  <div class="app-container">
    <el-dialog title="Similarity Note table" :visible.sync="similarityDialogTableVisible">
      <el-input-number v-model="similarityValue" :precision="2" :step="0.1" :max="1" :min="0" />
      <el-button @click="addRow">Add</el-button>
      <el-button @click="saveSimilarityConfig">Save</el-button>
      <el-button @click="resetDefaults">Reset</el-button>
      <el-button @click="analyseSimilarities">Analyse</el-button>
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
        @change="daterangeChange"
      />
      <el-input-number v-model="limit" size="small" :disabled="count<5000" step="1000" :max="count" min="1000" />
      <el-select v-model="filter.campaign" size="small" placeholder="Campaign">
        <el-option
          v-for="item in campaigns"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-select v-model="filter['exec.verdict']" size="small" multiple placeholder="Verdict">
        <el-option
          v-for="item in ['pass', 'inconclusive', 'fail', 'skip']"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
      <el-button type="primary" size="small" icon="el-icon-refresh" @click="refreshData">
        Refresh
      </el-button>
      <el-button type="primary" size="small" icon="el-icon-collection-tag" @click="storeView">
        Store view
      </el-button>
      <el-checkbox v-model="similarityEnabled">Enable</el-checkbox>
      <el-tooltip content="These rules allows to categorize exec.notes. Normally there is notes when test fails." placement="bottom">
        <el-button :disabled="!similarityEnabled" type="primary" size="small" icon="el-icon-edit" @click="similarityDialogTableVisible = true">
          noteSimilar rules
        </el-button>
      </el-tooltip>
    </div>
    <vue-pivottable-ui
      id="pivot"
      v-loading="loading"
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
      similarityEnabled: true,
      similarityValue: 0.6,
      campaigns: [],
      defaultNotes: [],
      dateRange: [
        new Date(Date.now() - 3600 * 1000 * 24 * 7),
        new Date(Date.now())],
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
      loading: true,
      count: 0,
      limit: 0,
      aggregatorName: 'Count',
      pivotData: [],
      rendererName: 'Table Heatmap',
      rows: ['exec.duts.0.model'],
      cols: ['month name', 'day', 'exec.verdict'],
      derivedAttributes: {
        'year': dateFormat('cre.time', 'YYYY'),
        'month': dateFormat('cre.time', 'M'),
        'day': dateFormat('cre.time', 'D'),
        'month name': dateFormat('cre.time', 'MMM'),
        'day name': dateFormat('cre.time', 'ddd'),
        'Week number': dateFormat('cre.time', 'W')
      },
      hiddenAttributes: ['exec.logs'],
      similarNotes: [],
      filter: {
        'branch': '',
        'exec.verdict': ''
      }
    }
  },
  mounted() {
    this.similarNotes = this.$storage.get('similarNotes', this.defaultNotes)
  },
  async created() {
    // The configuration of the plugin can be changed at any time.
    // Just call the setOptions method and pass the object with the settings to it.
    this.$storage.setOptions({
      prefix: 'result_pivot_',
      driver: 'local'
    })
    let config = {
      aggregatorName: this.aggregatorName,
      rendererName: this.rendererName,
      rows: this.rows,
      cols: this.cols,
      filter: this.filter
    }
    config = this.$storage.get('currentView', config)
    this._.assign(this, this._.pick(config, Object.keys(config)))
    this.similarityValue = this.$storage.get('similarityValue', 0.6)
    await this.refreshCount()
    await this.refreshCampaigns()
    await this.refreshData()
  },

  methods: {
    bin(value, binWidth) {
      return value - value % binWidth
    },
    analyseSimilarities() {
      const notes = this._.filter(this._.uniq(this.pivotData.map(r => r['exec.note'])), r => !this._.isEmpty(r))
      if (this._.isEmpty(notes)) {
        return
      }
      const similars = [notes[0]]
      this._.forEach(notes, (note) => {
        if (this._.isEmpty(note)) return
        const { bestMatch } = this.$ss.findBestMatch(note, similars)
        if (bestMatch.rating < this.similarityValue) {
          similars.push(note)
        }
      })
      this.similarNotes = similars.map(value => ({ value }))
    },
    resetDefaults() {
      this.$confirm('This will permanently restore defaults similarity notes. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.similarNotes = this.defaultNotes
        this.saveSimilarityConfig()
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
    saveSimilarityConfig() {
      this.$storage.set('similarNotes', this.similarNotes)
      this.$storage.set('similarityValue', this.similarityValue)
      this.similarityDialogTableVisible = false
    },
    getSimilarityTable() {
      return this._.map(this.similarNotes, 'value')
    },
    findSimilarity(note) {
      if (!this.similarityEnabled) return note
      if (this._.isEmpty(note)) return ''
      const similars = this.getSimilarityTable()
      if (similars.length === 0) return note
      const { bestMatch } = this.$ss.findBestMatch(note, similars)
      // console.log(`${bestMatch.rating}: ${note.substr(0, 200)}`)
      if (bestMatch.rating > this.similarityValue) {
        return bestMatch.target
      }
      return note
    },
    storeView() {
      const config = {
        aggregatorName: this.aggregatorName,
        rendererName: this.rendererName,
        rows: this.rows,
        cols: this.cols,
        filter: {
          campaign: this._.get(this.filter, 'campaign', null)
        }
      }
      this.$storage.set('currentView', config)
    },
    async daterangeChange() {
      await this.refreshCampaigns()
      await this.refreshCount()
    },
    async refreshCount() {
      const query = this.getQuery({
        t: 'count'
      })
      await resultsList(query)
        .then(({ data }) => {
          const { count } = data
          this.count = count
        })
    },
    async refreshCampaigns() {
      const query = this.getQuery({
        t: 'distinct',
        f: 'campaign'
      })
      delete query.q.campaign
      await resultsList(query)
        .then(({ data }) => {
          this.campaigns = data
        })
    },
    getQuery(additionals = {}) {
      const query = {
        fl: true,
        q: {
          'cre.time': {
            $gt: this.dateRange[0].toISOString(),
            $lt: new Date(this.dateRange[1].getTime() + 3600 * 1000 * 24).toISOString()
          }
        },
        s: { 'cre.time': -1 },
        f: '-__v -_id -exec.duts.0.__v -exec.duts._id'
      }
      if (this.count > 5000) {
        query.l = this.limit
      }
      this._.merge(query.q, this._.omitBy(this.filter, this._.isEmpty))
      if (query.q['exec.verdict']) {
        query.q['exec.verdict'] = { $in: query.q['exec.verdict'] }
      }
      this._.merge(query, additionals)
      return query
    },
    refreshData() {
      const query = this.getQuery()
      this.loading = true
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
          this.loading = false
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
