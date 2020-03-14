<template>
  <div class="app-container">
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
  name: 'ArticleList',
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
                console.log(data)
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
