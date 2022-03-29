<template>
  <div class="app-container">
    <b-button class="add-button" variant="success" @click="addRowHandler">Add Row</b-button>
    <b-table
      id="my-table"
      striped="true"
      bordered="true"
      head-variant="light"
      small="true"
      hover="true"
      :items="getList"
      :fields="fields"
      :busy.sync="listLoading"
      class="mt-3"
      responsive="sm"
      no-local-sorting
      primary-key="_id"
      selectable
      select-mode="single"
      @row-clicked="rowClicked"
    >
      <template v-slot:cell(value)="{value}">
        <div v-b-tooltip.hover placement="bottom" :title="value">
          {{ value }}
        </div>
      </template>
      <!-- details view -->
      <template v-slot:row-details="row">
        <el-row>
          <el-col :span="5">
            <div v-if="selectedRow.image_src && !isEditing">
              <b-img
                :src="imageUrl(selectedRow)"
                rounded
                width="200"
                max-height="300"
              />
            </div>
            <div v-else-if="isEditing">
              Image src:
              <input
                ref="image_src"
                type="text"
                :value="selectedRow.image_src"
              >
            </div>
          </el-col>
          <el-col :span="12">
            <div>
              <b-tabs content-class="mt-3" lazy>
                <b-tab title="Item details" active>
                  <div>
                    Name:
                    <input
                      ref="name"
                      type="text"
                      :value="selectedRow.name"
                      :disabled="!isEditing"
                      :class="{view: !isEditing}"
                    >
                  </div>
                  <div>
                    Total amount:

                    <button
                      type="button"
                      class="countpicker-dec"
                      :disabled="!isEditing || selectedRow.in_stock === 0 || selectedRow.in_stock <= selectedRow.available"
                      @click="selectedRow.in_stock--"
                    >-</button>
                    <input
                      ref="in_stock"
                      type="number"
                      class="countpicker-num"
                      :value="selectedRow.in_stock"
                      :disabled="!isEditing"
                      :class="{view: !isEditing}"
                    >
                    <button
                      type="button"
                      class="countpicker-inc"
                      :disabled="!isEditing"
                      @click="selectedRow.in_stock++"
                    >+</button>

                  </div>
                  <div>
                    Category:
                    <select
                      ref="category"
                      :value="selectedRow.category"
                      :disabled="!isEditing"
                    >
                      <option value="other">Other</option>
                      <option value="accessory">Accessory</option>
                      <option value="board">Board</option>
                      <option value="component">Component</option>
                    </select>
                  </div>
                  <div>
                    Manufacturer:
                    <a :href="selectedRow.manufacturer.url" target="_blank">
                      <input
                        ref="manufacturer.name"
                        type="text"
                        :value="selectedRow.manufacturer.name"
                        :disabled="!isEditing"
                        :class="{view: !isEditing}"
                      >
                    </a>
                    <v v-if="isEditing">
                      <input
                        ref="manufacturer.url"
                        type="text"
                        title="url"
                        :value="selectedRow.manufacturer.url"
                      >
                    </v>
                  </div>
                  <div>
                    testing type:
                    <select
                      ref="testing_type"
                      :value="selectedRow.testing_type"
                      :disabled="!isEditing"
                    >
                      <option value="">N/A</option>
                      <option value="R&D">R&D</option>
                      <option value="ConformanceTest">Conformance Test</option>
                      <option value="OperatorAcceptance">Operator Acceptance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <b-button v-if="!isEditing" variant="info" @click="isEditing = !isEditing">Edit</b-button>
                  <b-button v-else-if="isEditing" variant="success" @click="save">Save</b-button>
                  <b-button v-if="isEditing" variant="danger" @click="isEditing = false">Cancel</b-button>

                </b-tab>
                <b-tab title="Resources">
                  <b-list-group>
                    <b-list-group-item
                      v-for="resource in selectedRow.unique_resources"
                      :key="resource"
                      class="d-flex justify-content-between align-items-center"
                    >
                      {{ resource.name }}
                      <b-dropdown
                        v-if="resource._isLoaned === false"
                        right
                        split
                        variant="outline-primary"
                        text="Loan"
                        @click="loanResource(resource, me._id)"
                      >
                        <b-dropdown-item @click="loanResourceForOther(resource)">Loan for somebody else</b-dropdown-item>
                      </b-dropdown>
                      <b-button v-if="resource._isLoaned" variant="outline-primary" @click="unloanResource(resource)">Return</b-button>
                      <b-badge v-if="resource._isLoaned" variant="primary" pill>loaned by {{ resource._loaner }}</b-badge>

                      <!-- loan for others modal -->
                      <b-modal
                        :id="'modal-loan-' + resource._id + '-other'"
                        scrollable
                        hide-backdrop
                        content-class="shadow"
                        ok-only
                      >
                        <template #modal-title>
                          Loan {{ resource.name }} for selected user:
                        </template>
                        <div class="search-wrapper">
                          <input v-model="searchUser" type="text" placeholder="Search title..">
                          <label>Search users:</label>
                        </div>
                        <div class="wrapper">
                          <div v-for="user in filteredUsers" :key="user" class="card">
                            <b-button
                              variant="outline-primary"
                              @click="loanResourceFromModel(resource, user._id)"
                            >
                              {{ user.name }}
                            </b-button>
                          </div>
                        </div>
                      </b-modal>

                    </b-list-group-item>
                  </b-list-group>
                </b-tab>
                <b-tab title="Loans"><p>
                  <b-button
                    v-if="selectedRow.available > 0"
                    variant="outline-primary"
                    @click="loanItem(selectedRow, me)"
                  >Loan</b-button>
                  <b-list-group>
                    <b-list-group-item
                      v-for="loan in selectedRow._loans"
                      :key="loan"
                      class="d-flex justify-content-between align-items-center"
                    >
                      Loaned {{ loan.items.filter(obj => obj.item === selectedRow._id).length }} items  at {{ loan.loan_date }} by {{ loan.loaner.name }}
                      <b-button variant="outline-primary" @click="unloanItem(selectedRow, loan)">Return</b-button>

                    </b-list-group-item>
                  </b-list-group>

                </p></b-tab>
              </b-tabs>
            </div>
          </el-col>
        </el-row>
      </template>
    </b-table>
  </div>
</template>

<script>
import { updateItem, newItem, findItems, itemImageUrl } from '@/api/items'
import { findLoans, loanItem, returnLoan } from '@/api/loans'
import { findUsers, getInfo, getUser } from '@/api/user'

export default {
  name: 'ItemList',
  data() {
    return {
      listLoading: false,
      reload: this._.debounce(this._reload, 200),
      columns: [],
      fields: [
        { key: 'name', sortable: true, label: 'Name' },
        { key: 'category', sortable: true, label: 'category' },
        { key: 'manufacturer.name', sortable: true, label: 'Manufacturer' },
        { key: 'in_stock', sortable: true, label: 'Total amount' },
        { key: 'available', sortable: true, label: 'Available' }
      ],
      total: 0,
      selectedRow: { name: '' },
      isEditing: false,
      me: null,
      filteredUsers: [],
      searchUser: ''
    }
  },
  watch: {
    searchUser: {
      async handler(val) {
        if (val.length === 0) return
        const query = {
          q: { name: { $regex: val, $options: 'i' }},
          f: 'name'
        }
        const users = await findUsers(query)
        console.log('users', users)
        this.filteredUsers = users
      }
    }
  },
  async mounted() {
    this.me = await getInfo().then(({ data }) => data)
  },
  methods: {
    _reload() {
      this.$root.$emit('bv::refresh::table', 'my-table')
    },
    getList() {
      this.listLoading = true
      return findItems({ t: 'count' })
        .then(data => {
          this.total = data.count
          return findItems({})
        })
        .then(data => {
          data.forEach(row => {
            this._.defaults(row, {
              manufacturer: { name: '' },
              image_src: ''
            })
          })
          this.listLoading = false
          return data
        })
        .catch(error => {
          console.error(error)
          this.total = 0
          this.listLoading = false
          // Returning an empty array, allows table to correctly handle
          // internal busy state in case of error
          return []
        })
    },
    /**
     * click row -> sync selectedRow with  all data async way..
     * @param {Item} row
     * @param index
     * @return {Promise<void>}
     */
    async rowClicked(row, index) {
      if (row._id !== this.selectedRow._id) {
        // hide previous row
        this.$set(this.selectedRow, '_showDetails', false)
      }
      if (this.selectedRow._showDetails) {
        this.$set(row, '_showDetails', !row._showDetails)
        this.selectedRow = {}
        return // no need to reload when hide details
      }
      const query = { _id: row._id, p: 'unique_resources', f: 'unique_resources' }
      const results = await findItems(query)
      row.unique_resources = results[0].unique_resources || []

      this.selectedRow = row
      this.$set(row, '_showDetails', !row._showDetails)

      // these are used for resource tab
      row.unique_resources.forEach(async resource => {
        console.log(`Check if resource ${resource._id} is loaned`)
        try {
          const loan = await this.findLoanByResource(resource)
          const isLoaned = !!loan
          console.log(`isLoaned: ${isLoaned}`)
          if (isLoaned) {
            loan.user = await this.getUserName(loan.loaner)
            console.log(`getUserName(${loan.loaner}) -> ${loan.user}`)
            resource._loaner = loan.user
          }
          resource._isLoaned = isLoaned
        } catch (error) {
          console.error(error)
        }
      })
      // these are used for items tab
      row._loans = await this.findActiveLoansByItem(row)
    },
    async addRowHandler() {
      const obj = { name: 'new item', manufacturer: { name: 'unknown' }}
      await newItem(obj)
      this._reload()
    },
    imageUrl(row) {
      return itemImageUrl(row)
    },
    async save() {
      const updates = { _id: this.selectedRow._id }
      this._.keys(this.$refs).map(key => {
        const value = this.$refs[key].value
        this._.set(updates, key, value)
      })
      this._.merge(this.selectedRow, updates)
      await updateItem(updates)
      this.isEditing = !this.isEditing
    },

    async apiHandle(promise, { successTitle, successMsg, failTitle, failMsg }) {
      try {
        const ret = await promise
        this.$notify({
          title: successTitle,
          message: successMsg,
          type: 'success',
          duration: 2000
        })
        return ret
      } catch (error) {
        const errorMsg = this._.get(error, 'response.data.error', '')
        this.$notify({
          title: failTitle,
          message: `${failMsg}: \n${errorMsg}`,
          type: 'warning',
          duration: 2000
        })
        throw error
      }
    },

    async loanResourceForOther(resource) {
      this.$root.$emit('bv::show::modal', `modal-loan-${resource._id}-other`, '#btnShow')
    },
    async loanResourceFromModel(resource, loaner) {
      await this.loanResource(resource, loaner)
      this.$root.$emit('bv::hide::modal', `modal-loan-${resource._id}-other`, '#btnShow')
    },
    async loanResource(resource, loaner) {
      if (!resource) {
        throw new Error('resource is not defined!')
      }
      const loaningItem = {
        item: this.selectedRow._id,
        resource: resource._id
      }
      const name = await this.getUserName(loaner)
      const loan = {
        items: [loaningItem],
        loaner
      }
      console.log(`loaning ${resource.name}, loan object:`, loan)
      await this.apiHandle(loanItem(loan), {
        successTitle: 'loan success',
        successMsg: `Item ${resource.name} loaned succesfully`,
        failTitle: 'loan failed',
        failMsg: `Cannot loan item ${resource.name}`
      }).then(async(loan) => {
        this.selectedRow.available--
        loan.loaner = { name }
        resource._isLoaned = true
        resource._loaner = name
        this.selectedRow._loans.push(loan)
      }).catch(() => {})
    },
    async findActiveLoansByItem({ _id }) {
      const loans = await findLoans({ q: {
        items: { $elemMatch: {
          item: _id,
          return_date: { $exists: false }
        }}
      },
      p: { path: 'loaner', select: 'name' },
      f: 'items loaner name loan_date' })
      loans.forEach(loan => {
        if (loan.loaner === null) {
          delete loan.loaner
        }
        this._.defaults(loan, { loaner: { name: '' }})
      })
      console.log(loans)
      return loans
    },
    async findLoanByResource(resource) {
      const loans = await findLoans({ q: {
        items: { $elemMatch: {
          resource: resource._id,
          return_date: { $exists: false }
        }}
      }})
      if (loans.length === 0) {
        return undefined
      } else if (loans.length > 1) {
        throw new Error('there is multiple loans with same item ')
      }
      return loans[0]
    },
    async getUserName(_id) {
      return getUser(
        { _id },
        { f: 'name' })
        .then(user => user.name)
    },

    async unloanResource(resource) {
      console.log('unloan resource: ', resource.name)
      let loan
      try {
        loan = await this.findLoanByResource(resource)
      } catch (error) {
        if (!loan) {
          this.$notify({
            title: 'Item not found',
            message: `Resource ${resource.name} is not linked to items`,
            type: 'warning',
            duration: 2000
          })
          return
        }
      }
      if (!loan) {
        this.$notify({
          title: 'loan not found',
          message: `Cannot find loan for resource ${resource.name}`,
          type: 'warning',
          duration: 2000
        })
        return
      }
      console.log('loan to be returned: ', loan)
      const item = loan.items.find(item => item.resource === resource._id)
      item.return_date = new Date()
      await this.apiHandle(returnLoan(loan), {
        successTitle: 'loan returner',
        successMsg: `Loan ${resource.name} returned succesfully`,
        failTitle: 'return failed',
        failMsg: `Cannot return resource ${resource.name}`
      }).then(() => {
        this.selectedRow.available++
        resource._isLoaned = false
        resource._loan = null
        // find loan that holds this resource
        const pos = this.selectedRow._loans.findIndex(el => el.items.find(o => o.resource === resource._id))
        if (pos >= 0 && this.selectedRow._loans[pos].items.length === 1) {
          this.selectedRow._loans.splice(pos, 1)
        }
      }).catch(() => {})
    },

    async loanItem(item, loaner) {
      console.log('loan item: ', item.name)
      const loan = {
        items: [{ item }],
        loaner: loaner._id
      }
      const loaned = await loanItem(loan)
      loaned.loaner = loaner
      this.selectedRow._loans.push(loaned)
      this.selectedRow.available--
    },
    async unloanItem(item, loan) {
      console.log('unloan item: ', item.name, loan.loaner.name)
      const req = { _id: loan._id, items: [] }
      req.items = loan.items.filter(obj => obj.item === item._id)
      req.items.forEach(item => {
        item.return_date = new Date()
      })
      if (!req.items.length) {
        console.error('cannot find item!')
        return
      }
      await this.apiHandle(returnLoan(req), {
        successTitle: 'loan returner',
        successMsg: `Loan ${item.name} returned successfully`,
        failTitle: 'return failed',
        failMsg: `Cannot return item ${item.name}`
      })
      this.selectedRow.available++
      const pos = this.selectedRow._loans.findIndex(el => el.items.find(o => o.item === item._id))
      if (pos >= 0 && this.selectedRow._loans[pos].items.length === 1) {
        this.selectedRow._loans.splice(pos, 1)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.view {
  border-color: transparent;
  background-color: initial;
  color: initial
}

.search-wrapper {
  position: relative;
  label {
    position: absolute;
    font-size: 12px;
    color: rgba(0,0,0,.50);
    top: 8px;
    left: 12px;
    z-index: -1;
    transition: .15s all ease-in-out;
  }
  input {
    padding: 4px 12px;
    color: rgba(0,0,0,.70);
    border: 1px solid rgba(0,0,0,.12);
    transition: .15s all ease-in-out;
    background: white;
  &:focus {
     outline: none;
     transform: scale(1.05);
  & + label  {
      font-size: 10px;
      transform: translateY(-24px) translateX(-12px);
    }
  }
  &::-webkit-input-placeholder {
     font-size: 12px;
     color: rgba(0,0,0,.50);
     font-weight: 100;
   }
  }
}
.wrapper {
  display: flex;
  max-width: 444px;
  flex-wrap: wrap;
  padding-top: 12px;
}

.card {
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px;
  max-width: 124px;
  margin: 12px;
  transition: .15s all ease-in-out;
  :hover {
     transform: scale(1.1);
  }
}

</style>
