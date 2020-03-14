<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Testcase" min-width="400">
      <template slot-scope="scope">
        {{ scope.row.tcid }}
      </template>
    </el-table-column>
    <el-table-column label="Verdict" width="100" align="center">
      <template slot-scope="scope">
        {{ scope.row.exec.verdict }}
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
      resultsList({l: 8, s: {'cre.time': -1}, f: '-_id tcid exec.verdict'})
        .then(({data}) => {
          this.list = data
        })
    }
  }
}
</script>
