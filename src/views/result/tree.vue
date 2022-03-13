<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <v-jstree :data="treeData" :async="loadData" @item-click="itemClick" />
      </el-col>
      <el-col :span="12">
        <pre>{{ row | pretty }}</pre>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VJstree from 'vue-jstree'
import { resultsList, searchResult } from '@/api/results'

export default {
  name: 'ResultTree',
  components: {
    VJstree
  },
  filters: {
    pretty(value) {
      return JSON.stringify(value, null, 2)
    }
  },
  data() {
    return {
      row: {},
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    }
  },
  methods: {
    _loadData(node, resolve) {
      const id = node.data.id ? node.data.id : 0
      const { level, type, filters = {}} = node.data
      const options = { level: level + 1, field: NaN, type, filters }
      if (id === 0) {
        return this.getRoot().then(resolve)
      }
      if (type === 'tests') {
        if (level === 0) {
          options.field = 'tcid'
        } else if (level === 1) {
          options.field = 'exec.duts.0.model'
        } else if (level === 2) {
          options.field = 'exec.verdict'
        } else if (level === 3) {
          options.field = 'job.id'
        } else if (level === 4) {
          options.icon = 'el-icon-tickets'
          options.isLeaf = true
          options.field = '_id'
        }
      } else if (type === 'campaigns') {
        if (level === 0) {
          options.field = 'campaign'
        } else if (level === 1) {
          options.field = 'job.id'
        } else if (level === 2) {
          options.field = 'tcid'
        } else if (level === 3) {
          options.field = 'exec.verdict'
        } else if (level === 4) {
          options.isLeaf = true
          options.field = '_id'
          options.icon = 'el-icon-tickets'
        }
      } else {
        console.log('unknown type')
      }
      return this.getDistinct(options).then(resolve)
    },
    distinct(filters, field) {
      const query = {
        t: 'distinct',
        f: field,
        s: { 'cre.time': 1 },
        'cre.time': {
          $gt: this.lastWeekDate().toISOString()
        },
        to: 5000
      }
      return this._.merge(query, filters)
    },
    getRoot() {
      return Promise.resolve([
        { text: 'by tests', level: 0, type: 'tests', isLeaf: false },
        { text: 'by campaigns', level: 0, type: 'campaigns', isLeaf: false }
        // { text: 'dut models', level: 0, type: 'dutModel', isLeaf: false },
      ])
    },
    getDistinct({ level, field, filters = {}, type, isLeaf = false, icon }) {
      const query = this.distinct(filters, field)
      return resultsList(query)
        .then(({ data }) => {
          console.log('results: ', { query, data })
          const mapper = text => {
            const _filters = this._.clone(filters)
            this._.merge(_filters, { [field]: text })
            return {
              text,
              level,
              isLeaf,
              icon,
              type,
              filters: _filters
            }
          }
          const treeData = this._.map(data, mapper)
          console.log({ treeData })
          return treeData
        })
    },
    lastWeekDate() {
      const ourDate = new Date()
      // Change it so that it is 7 days in the past.
      const pastDate = ourDate.getDate() - 7
      ourDate.setDate(pastDate)
      return ourDate
    },
    itemClick(node, item, e) {
      const filters = this._.cloneDeep(node.model.filters)

      if (node.model.isLeaf) {
        const _id = node.model.filters._id
        console.log('Get result: ', _id)
        searchResult(_id).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(`searchResult(${_id}): ${data}`)
          this.row = data
        })
      } else {
        this.row = filters
      }
    }
  }

}
</script>
