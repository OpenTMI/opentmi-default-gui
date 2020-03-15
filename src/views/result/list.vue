<template>
  <div class="app-container">

    <div class="filter-container">
      <el-input v-model="listQuery.tcid" placeholder="Tcid" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="listQuery.campaign" placeholder="Campaign" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery['exec.verdict']" placeholder="Verdict" clearable style="width: 90px" class="filter-item">
        <el-option v-for="item in ['pass', 'fail', 'inconclusive', 'block', 'error', 'skip']" :key="item" :label="item" :value="item" />
      </el-select>
      <el-input v-model="listQuery['exec.duts.0.model']" placeholder="Dut Model" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
    </div>
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column width="180px" align="center" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.cre.time | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Testcase" width="300">
        <template slot-scope="{row}">
          <span>{{ row.tcid }}</span>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="Campaign">
        <template slot-scope="scope">
          <span>{{ scope.row.campaign }}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="Verdict" width="110">
        <template slot-scope="{row}">
          <el-tag :type="row.exec.verdict | statusFilter">
            {{ row.exec.verdict }}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column width="200px" align="center" label="Dut Model">
        <template slot-scope="{row}">
          <span>{{ row.exec.duts[0].model }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/result/edit/'+scope.row._id">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Edit
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />
  </div>
</template>

<script>
import { resultsList } from '@/api/results'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination

export default {
  name: 'ResultList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        pass: 'success',
        inconclusive: 'info',
        fail: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 0,
        limit: 20
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      resultsList({t: 'count'})
              .then(({data}) => {
                this.total = data.count
                const query = this._.clone(this.listQuery)
                query.l = query.limit
                query.sk = query.page * query.limit
                query.sort = {'cre.time': -1}
                this._.unset(query, 'limit')
                this._.unset(query, 'page')
                return resultsList(query)
              })
              .then(({data}) => {
                this.list = data
                this.listLoading = false
              })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
