<template>
  <div class="app-container">
    <el-row>
      <el-col :span="8">
        <b-checkbox v-model="enableDraggable" switch>
          Allow to reorder parents by drag'n'drop
        </b-checkbox>
        <b-button-toolbar aria-label="Toolbar with button groups and input groups">
          <b-button-group size="sm" class="mr-1">
            <b-button @click="openCreateModal">Create</b-button>
          </b-button-group>
          <b-input-group size="sm" prepend="search">
            <b-form-input class="text-right" @input="onSearch" />
          </b-input-group>
        </b-button-toolbar>

        <b-modal
          id="modal-create-resource"
          hide-backdrop
          content-class="shadow"
          @ok="onCreate"
        >
          Name:
          <input
            v-model="newResource.name"
            type="text"
            title="Name"
          >
          Type:
          <select v-model="newResource.type">
            <option value="dut" default>DUT</option>
            <option value="computer">Computer</option>
            <option value="accessories">Accessories</option>
            <option value="room">Room</option>
            <option value="other">Other</option>
          </select>
        </b-modal>
        <v-jstree
          ref="tree"
          :data="treeData"
          :async="loadData"
          :draggable="enableDraggable"
          :allow-batch="enableDraggable"
          @item-click="itemClick"
          @item-drop="itemDrop"
        />
      </el-col>
      <el-col :span="16">
        <b-tabs content-class="mt-3">
          <b-tab title="Details" active>
            <b-form-checkbox v-model="enableEdit" name="check-button" switch>
              Allow editing
            </b-form-checkbox>
            <b-form v-if="show" @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1" label="Name:" label-for="form-name">
                <b-form-input
                  id="form-name"
                  v-model="form.name"
                  :readonly="!enableEdit"
                  type="string"
                  placeholder="Enter Name"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-2" label="Type:" label-for="input-type">
                <b-form-select
                  id="input-type"
                  v-model="form.type"
                  :disabled="!enableEdit"
                  :options="schema.properties.type.enum"
                  required
                />
              </b-form-group>
              <b-form-group id="input-group-3" label="User group:" label-for="form-usage-group">
                <b-form-input
                  id="form-usage-group"
                  v-model="form.usage.group"
                  :readonly="!enableEdit"
                  type="string"
                  placeholder="usage group"
                  required
                />
              </b-form-group>

              <b-button type="submit" :disabled="!enableEdit" variant="primary">Submit</b-button>
              <b-button type="reset" :disabled="!enableEdit" variant="danger">Reset</b-button>
              <b-button
                v-b-tooltip.hover
                :disabled="!(enableEdit && row.childs.length === 0)"
                variant="danger"
                title="Removing allowed only when it does not contains childs"
                @click="onRemove"
              >Remove</b-button>
            </b-form>
          </b-tab>
          <b-tab title="raw">
            <vue-json-pretty
              :data="row"
              :deep="1"
              :deep-collapse-children="true"
              :show-length="true"
              :show-double-quotes="false"
            />
          </b-tab>
        </b-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VJstree from 'vue-jstree'
import VueJsonPretty from 'vue-json-pretty'
import { resourceList, updateResource, searchResource, createResource, getSchema, deleteResource } from '@/api/resources'

export default {
  name: 'ResourceTree',
  components: {
    VJstree,
    VueJsonPretty
  },
  data() {
    return {
      schema: {},
      form: {},
      show: false,
      enableEdit: false,
      newResource: { name: '', type: 'computer' },
      editingItem: {},
      editingNode: null,
      row: {},
      enableDraggable: false,
      treeData: [],
      loadData: this._.debounce(this._loadData, 250)
    }
  },
  async created() {
    this.schema = await getSchema(this._)
  },
  methods: {
    mapItem(resource) {
      let icon
      if (['maintenance', 'broken'].indexOf(this._.get(resource, 'status.value')) >= 0) {
        icon = 'el-icon-warning'
      } else {
        switch (resource.type) {
          case ('system'):
            icon = 'el-icon-diagram3'
            break
          case ('instrument'):
            icon = 'el-icon-compass'
            break
          case ('room'):
            icon = 'el-icon-s-home'
            break
          case ('computer'):
            icon = 'el-icon-s-platform'
            break
          case ('dut'):
            icon = 'el-icon-mobile-phone'
            break
          case ('accessories'):
            icon = 'el-icon-cpu'
            break
          default:
            break
        }
      }
      this._.defaults(resource, { childs: [] })
      const out = {
        text: resource.name,
        id: resource._id,
        icon,
        isLeaf: this._.get(resource, 'childs', []).length === 0,
        resource
      }
      return out
    },
    async mapItems(list) {
      return list.map(this.mapItem)
    },
    async _loadData(node, resolve) {
      const { id = 0, resource = {}} = node.data
      console.log('_loadData:', id, resource)
      if (id === 0) {
        const root = {
          text: 'root',
          id: 1,
          isLeaf: false
        }
        resolve([root])
      } else if (id === 1) {
        this.getRoot().then(resolve)
      } else {
        const query = { parent: resource._id }
        const list = await this.findResources(query)
        this.mapItems(list).then(resolve)
      }
    },
    async findResources(query) {
      query.s = { name: 1 }
      return resourceList(query).then(({ data }) => data)
    },
    async onSearch(input) {
      console.log(`onTreeFilter(${input})`)
      await this.highlightTree(input)
    },
    async highlightTree(text) {
      console.log('highlightTree', this.$refs)
      const patt = new RegExp(text)
      this.$refs.tree.handleRecursionNodeChilds(this.$refs.tree, function(node) {
        if (text !== '' && node.model !== undefined) {
          const str = node.model.text
          if (patt.test(str)) {
            node.$el.querySelector('.tree-anchor').style.color = 'red'
          } else {
            node.$el.querySelector('.tree-anchor').style.color = '#000'
          } // or other operations
        } else {
          node.$el.querySelector('.tree-anchor').style.color = '#000'
        }
      })
    },
    async getRoot() {
      const query = { q: { $or: [{ parent: { $exists: false }}, { parent: null }] }}
      const resources = await this.findResources(query)
      return this.mapItems(resources)
    },

    async itemDrop(node, item, draggedItem, e) {
      console.log('itemDrop', node, item, draggedItem)
      let newParent = node.model.resource
      let child = draggedItem.resource
      let oldParent
      if (child.parent) {
        oldParent = await searchResource(child.parent).then(({ data }) => data)
      }
      try {
        console.log(`dragged: ${child.name} new parent: ${newParent ? newParent.name : 'root'}, old parent: ${oldParent ? oldParent.name : ''}`)
        if (newParent && newParent.type === 'dut') {
          throw new Error('cannot set to dut parent')
        }

        if (oldParent) {
          // update only when there was old parent...
          oldParent = this._.pick(oldParent, ['_id', 'childs'])
          this._.remove(oldParent.childs, item => item === child._id)
          oldParent.childs = this._.uniq(oldParent.childs)
          console.log('oldParent:after', oldParent)
          await updateResource(oldParent)
        }

        if (newParent) {
          // if new parent was root level
          newParent = this._.pick(newParent, ['_id', 'childs'])
          newParent.childs.push(child._id)
          newParent.childs = this._.uniq(newParent.childs)
          console.log('newParent:after', newParent)
          await updateResource(newParent)
        }

        child = this._.pick(child, ['_id', 'parent'])
        child.parent = newParent ? newParent._id : undefined
        console.log('child:after', child)
        await updateResource(child)
        this.$notify({
          title: `resource saved`,
          message: `resource ${child.name} moved under new parent ${newParent ? newParent.name : 'root'}`,
          type: 'success',
          duration: 2000
        })
      } catch (errorMsg) {
        this.$notify({
          title: `dragndrop failed`,
          message: `cannot dragndrop resource ${child.name}: \n${errorMsg}`,
          type: 'warning',
          duration: 2000
        })
      }
    },
    async itemClick(node, item, e) {
      const resource = this._.cloneDeep(node.model.resource)
      this.enableEdit = false // by default cannot edit
      this.editingNode = node
      this.editingItem = node.model

      if (node.model.isLeaf) {
        const _id = resource._id
        console.log('Get result: ', _id)
        const { data } = await searchResource(_id)
        // eslint-disable-next-line no-console
        console.log(`searchResult(${_id}): ${JSON.stringify(data)}`)
        this._.unset(data, '__v')
        this.row = data
      } else {
        this.row = resource
      }
      this.show = this._.has(resource, '_id')
      if (this.show) {
        this.onReset()
      }
    },
    openCreateModal() {
      this.$root.$emit('bv::show::modal', `modal-create-resource`, '#btnShow')
    },
    async onCreate() {
      console.log('create new resource...', this.newResource)
      const resource = await createResource(this.newResource)
      console.log('resource: ', resource)
      const item = this.mapItem(resource)
      console.log('mapItem: ', item)
      console.log('treeData: ', this.treeData)
      this.treeData.push(item)
      this.newResource = {}
    },
    async onSubmit() {
      console.log('onSubmit', this.form)
      if (this.form._id !== this.row._id) {
        throw new Error('id mismatch')
      }
      await updateResource(this.form)
      this._.merge(this.row, this.form)
      const item = this.mapItem(this.row)
      this._.merge(this.editingItem, item)
    },
    onReset(event) {
      console.log('onReset', event)
      this.form = this._.pick(this.row, ['_id', 'name', 'type', 'usage.group'])

      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async onRemove(event) {
      console.log('onRemove', event)
      this.$confirm('Confirm to remove the resource', 'Warning', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      })
        .then(() => deleteResource(this.form._id))
        .then(() => this.$message({
          type: 'success',
          message: 'Delete succeed!'
        }))
        .then(() => {
          if (this.editingItem.id !== undefined) {
            const index = this.editingNode.parentItem.indexOf(this.editingItem)
            this.editingNode.parentItem.splice(index, 1)
          }
          this.row = {}
        })
    }
  }
}
</script>
