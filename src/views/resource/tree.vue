<template>
  <div class="app-container">
    <v-jstree :data="treeData" :async="loadData" @item-click="itemClick" />
  </div>
</template>

<script>
import VJstree from 'vue-jstree'
import { resourceList } from '@/api/resources'

export default {
  name: 'ResultTree',
  components: {
    VJstree
  },
  data() {
    return {
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    }
  },
  methods: {
    _query(filters) {
      const query = { f: `_id name` }
      return this._.merge(query, filters)
    },
    _loadData(node, resolve) {
      const id = node.data.id ? node.data.id : 0
      const { level, type, filters = {}} = node.data
      if (id === 0) {
        this.getRoot().then(resolve)
      } else if (type === 'rooms') {
        if (level === 0) { // room
          const options = { level: 1, type, filters: { type: 'room' }}
          this.getDistinct(options).then(resolve)
        } else if (level === 1) { // system
          const options = { level: 2, type, filters }
          this.getDistinct(options).then(resolve)
        } else if (level === 1) { // computer
          const options = { level: 2, type, filters }
          return this.getDistinct(options).then(resolve)
        } else {
          const icon = 'fa fa-check icon-state-success'
          const isLeaf = true
          const options = { level: 3, type, filters, isLeaf, icon }
          return this.getDistinct(options).then(resolve)
        }
      } else {
        resolve([])
      }
    },
    getRoot() {
      return Promise.resolve([
        { text: 'rooms', level: 0, type: 'rooms', isLeaf: false }
        // { text: 'system', level: 0, type: 'systems', isLeaf: false },
        // { text: 'dut', level: 0, type: 'duts', isLeaf: false }
      ])
    },
    getDistinct({ level, filters = {}, type, isLeaf = false, icon }) {
      const query = this._query(filters)
      return resourceList(query)
        .then(({ data }) => {
          const mapper = obj => {
            const text = obj.name
            const filters = this._.merge(filters, { parent: obj._id })
            return {
              text,
              level,
              isLeaf,
              icon,
              type,
              filters
            }
          }
          const treeData = this._.map(data, mapper)
          return treeData
        })
    },
    itemClick(node, item, e) {
      // eslint-disable-next-line no-console
      console.log(node.model.text + ' clicked !', item, e)
    }
  }

}
</script>
