<template>
  <div class="app-container">
    <el-row>
      <el-col :span="12">
        <v-jstree :data="treeData" :async="loadData" @item-click="itemClick" />
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
import { resourceList, searchResource } from '@/api/resources'

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
    distinct(filters, field) {
      const query = {
        t: 'distinct',
        f: field,
        l: 1000,
        to: 5000
      }
      return this._.merge(query, filters)
    },
    _loadData(node, resolve) {
      const id = node.data.id ? node.data.id : 0
      const { level, type, filters = {}} = node.data
      const options = { level: level + 1, field: NaN, type, filters }
      if (id === 0) {
        this.getRoot().then(resolve)
      } else if (type === 'location') {
        if (level === 0) {
          options.field = 'location.site'
        } else if (level === 1) {
          options.field = 'location.room'
        } else if (level === 2) {
          options.field = 'location.rack'
        } else if (level === 3) {
          options.field = 'location.bed'
        } else if (level === 4) {
          options.field = 'location.slot'
        } else {
          options.icon = 'el-icon-tickets'
          options.isLeaf = true
          options.field = '_id'
        }
      } else if (type === 'type') {
        if (level === 0) {
          options.field = 'type'
        } else if (level === 1) {
          options.field = 'item.model'
        } else {
          options.isLeaf = true
          options.icon = 'el-icon-tickets'
          options.field = '_id'
        }
      } else if (type === 'model') {
        if (level === 0) {
          options.field = 'item.model'
        } else {
          options.isLeaf = true
          options.icon = 'el-icon-tickets'
          options.field = '_id'
        }
      } else {
        return resolve([])
      }

      return this.getDistinct(options).then(resolve)
    },
    getRoot() {
      return Promise.resolve([
        { text: 'by location', level: 0, type: 'location', isLeaf: false },
        { text: 'by type', level: 0, type: 'type', isLeaf: false },
        { text: 'by model', level: 0, type: 'model', isLeaf: false }
      ])
    },
    getDistinct({ level, field, filters = {}, type, isLeaf = false, icon }) {
      const query = this.distinct(filters, field)
      return resourceList(query)
        .then(({ data }) => {
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
          return treeData
        })
    },
    itemClick(node, item, e) {
      const filters = this._.cloneDeep(node.model.filters)

      if (node.model.isLeaf) {
        const _id = node.model.filters._id
        console.log('Get result: ', _id)
        searchResource(_id).then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(`searchResult(${_id}): ${JSON.stringify(data)}`)
          this._.unset(data, '__v')
          this._.unset(data, '_id')
          this.row = data
        })
      } else {
        this.row = filters
      }
    }
  }

}
</script>
