<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <v-jstree
          ref="tree"
          :data="treeData"
          :async="loadData"
          @item-click="itemClick"
        />
      </el-col>
      <el-col :span="12">
        <vue-json-pretty
          :data="row"
          :deep="1"
          :deep-collapse-children="true"
          :show-length="true"
          :show-double-quotes="false"
        />
      </el-col>
    </el-row>
  </div>
</template>
<script>

import VJstree from 'vue-jstree'
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { testList } from '@/api/testcases'

export default {
  name: 'ResultTree',
  components: {
    VJstree,
    VueJsonPretty
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
      if (type === 'tcid') {
        switch (level) {
          case 0:
            options.field = 'tcid'
            options.isLeaf = true
            options.icon = 'el-icon-tickets'
            break
          default:
            return resolve([])
        }
      } else if (type === 'types') {
        switch (level) {
          case 0:
            options.field = 'other_info.type'
            break
          case 1:
            options.field = 'status.value'
            break
          case 2:
            options.field = 'tcid'
            options.isLeaf = true
            options.icon = 'el-icon-tickets'
            break
          default:
            return resolve([])
        }
      } else if (type === 'status') {
        switch (level) {
          case 0:
            options.field = 'status.value'
            break
          case 1:
            options.field = 'execution.skip.value'
            break
          case 2:
            options.field = 'execution.skip.reason'
            break
          case 3:
            options.field = 'tcid'
            options.isLeaf = true
            options.icon = 'el-icon-tickets'
            break
        }
      }
      return this.getDistinct(options).then(resolve)
    },
    distinct(filters, field) {
      const query = {
        t: 'distinct',
        f: field,
        to: 5000,
        'archive.value': false
      }
      return this._.merge(query, filters)
    },
    getRoot() {
      return Promise.resolve([
        { text: 'by tcid', level: 0, type: 'tcid', isLeaf: false },
        { text: 'by test type', level: 0, type: 'types', isLeaf: false },
        { text: 'by status', level: 0, type: 'status', isLeaf: false }
      ])
    },
    getDistinct({ level, field, filters = {}, type, isLeaf = false, icon }) {
      const query = this.distinct(filters, field)
      return testList(query)
        .then(({ data }) => {
          console.log('tests: ', { query, data })
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
    itemClick(node, item, e) {
      const filters = this._.cloneDeep(node.model.filters)

      if (node.model.isLeaf) {
        const tcid = node.model.filters.tcid
        console.log('Get result: ', tcid)
        testList({ tcid }).then(({ data }) => {
          const row = data[0]
          // eslint-disable-next-line no-console
          console.log(`searchResult(${tcid}): ${row}`)
          this.row = data.length === 1 ? row : data
        })
      } else {
        this.row = filters
      }
    }
  }
}
</script>
