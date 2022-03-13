<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <v-jstree :data="treeData" :async="loadData" @item-click="itemClick" />
      </el-col>
      <el-col :span="12">
        <a :href="row | commitUrl(this._)">{{ row | commitId(this._) }}</a><br>
        <vue-json-pretty
          :data="row"
          :deep="1"
          :deep-collapse-children="true"
          :show-length="true"
          :show-double-quotes="false"
          :custom-value-formatter="customLinkFormatter"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import VJstree from 'vue-jstree'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { resultsList, searchResult } from '@/api/results'

export default {
  name: 'ResultTree',
  components: {
    VJstree,
    VueJsonPretty
  },
  filters: {
    commitId(row, _) {
      const commitId = _.get(row, 'exec.sut.commitId', '')
      return commitId
    },
    commitUrl(row, _) {
      console.log('commitUrl: ', row, _)
      const commitId = _.get(row, 'exec.sut.commitId', '')
      let url = _.get(row, 'exec.sut.gitUrl', '')
      const match = url.match(/((git|ssh|http(s)?)|(git@[\w.]+))(:(\/\/)?)([\w.@:/\-~]+)(\.git)(\/)?/)
      if (match) {
        const group7 = match[7]
        if (group7.startsWith('github.com')) {
          url = `https://${group7}/commit/${commitId}`
        }
      }
      return url
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
    customLinkFormatter(data, key, path, defaultFormatted) {
      if (typeof data === 'string' && data.startsWith('https://')) {
        return `<a style="color:red;" href="${data}" target="_blank">"${data}"</a>`
      }
      return defaultFormatted
    },
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
          options.field = 'campaign'
        } else if (level === 2) {
          options.field = 'job.id'
        } else if (level === 3) {
          options.field = 'exec.duts.0.model'
        } else if (level === 4) {
          options.field = 'exec.verdict'
        } else if (level === 5) {
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
      } else if (type === 'dutModels') {
        if (level === 0) {
          options.field = 'exec.duts.0.model'
        } else if (level === 1) {
          options.field = 'campaign'
        } else if (level === 2) {
          options.field = 'job.id'
        } else if (level === 3) {
          options.field = 'tcid'
        } else if (level === 4) {
          options.field = 'exec.verdict'
        } else if (level === 5) {
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
        l: 1000,
        s: { 'cre.time': 1 },
        'cre.time': `{gt}${this.lastMonthDate().toISOString()}`,
        to: 5000
      }
      return this._.merge(query, filters)
    },
    getRoot() {
      return Promise.resolve([
        { text: 'by tests', level: 0, type: 'tests', isLeaf: false },
        { text: 'by campaigns', level: 0, type: 'campaigns', isLeaf: false },
        { text: 'by dut models', level: 0, type: 'dutModels', isLeaf: false }
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
    lastMonthDate() {
      const ourDate = new Date()
      // Change it so that it is 30 days in the past.
      const pastDate = ourDate.getDate() - 30
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
