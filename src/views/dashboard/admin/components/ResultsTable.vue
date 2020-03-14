<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Test Case" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.tcid }}
      </template>
    </el-table-column>
    <el-table-column label="Verdict" width="195" align="center">
      <template slot-scope="scope">
        {{ scope.row.exec.verdict }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { resultsList } from '@/api/results'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        fail: 'fail',
        inconclusive: 'inconc'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      resultsList().then(response => {
        this.list = response.data.slice(0, 8)
      })
    }
  }
}
</script>
