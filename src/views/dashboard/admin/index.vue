<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart :chart-data="raddarChartData" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart :chart-data="pieChartData" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart :chart-data="barChartData" />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <results-table />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { resultsList } from '@/api/results'
import { eventList } from '@/api/events'
import { resourceList } from '@/api/resources'
import { testList } from '@/api/testcases'
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import ResultsTable from './components/ResultsTable'

const lineChartData = {
  newResults: {
    actualData: []
  },
  events: {
    actualData: []
  },
  tests: {
    actualData: []
  },
  resources: {
    actualData: []
  }
}

const raddarChartData = []
const pieChartData = []
const barChartData = []

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    ResultsTable
  },
  data() {
    return {
      lineChartData: lineChartData.newResults,
      raddarChartData: raddarChartData,
      pieChartData: pieChartData,
      barChartData: barChartData
    }
  },
  created() {
    this.getRaddarChartData()
    this.getPieChartData()
    this.getBarChartData()
    this.handleSetLineChartData('newResults')
  },
  methods: {
    getDayGroup(field) {
      return { '$subtract': [
        field,
        { '$add': [
          { '$multiply': [{ '$hour': field }, 3600000] },
          { '$multiply': [{ '$minute': field }, 60000] },
          { '$multiply': [{ '$second': field }, 1000] },
          { '$millisecond': field }
        ] }
      ] }
    },
    mapData(data, map = item => [item.date, item.count]) {
      return this._.reduce(data, (acc, item) => {
        acc.actualData.push(map(item))
        return acc
      }, {
        actualData: []
      })
    },
    lastWeekDate() {
      const ourDate = new Date()
      // Change it so that it is 7 days in the past.
      const pastDate = ourDate.getDate() - 7
      ourDate.setDate(pastDate)
      return ourDate
    },
    handleSetLineChartData(type) {
      const query = {
        q: JSON.stringify([
          {
            $match: {
              'cre.time': {
                $gt: this.lastWeekDate().toISOString()
              }
            }
          },
          {
            $group: {
              _id: { day: this.getDayGroup('$cre.time') },
              count: { $sum: 1 }
            }
          },
          {
            $sort: { '_id.day': -1 }
          },
          {
            $project: {
              date: '$_id.day',
              count: '$count'
            }
          }
        ]), t: 'aggregate' }

      let list
      if (type === 'newResults') {
        list = resultsList
      } else if (type === 'events') {
        list = eventList
      } else if (type === 'resources') {
        list = resourceList
      } else if (type === 'testcases') {
        list = testList
      }

      list(query)
        .then(({ data }) => data)
        .then(data => {
          this.lineChartData = this.mapData(data)
        })
    },
    getBarChartData() {
      /* this.barChartData = [{
        name: 'pageA',
        data: [79, 52, 200, 334, 390, 330, 220],
      }, {
        name: 'pageB',
        data: [80, 52, 200, 334, 390, 330, 220],
      }, {
        name: 'pageC',
        data: [30, 52, 200, 334, 390, 330, 220],
      }]*/
      console.log('getPieChartData')
      const query = {
        q: JSON.stringify([
          {
            $match: {
              'cre.time': {
                $gt: this.lastWeekDate().toISOString()
              }
            }
          },
          {
            $group: {
              _id: {
                day: this.getDayGroup('$cre.time'),
                verdict: '$exec.verdict'
              },
              count: { $sum: 1 }
            }
          },
          {
            $sort: {
              '_id.day': -1,
              'count': -1
            }
          },
          {
            $project: {
              day: '$_id.day',
              verdict: '$_id.verdict',
              value: '$count'
            }
          }
        ]), t: 'aggregate' }

      resultsList(query)
        .then(({ data }) => data)
        .then(data => {
          const barData = this._.reduce(data, (acc, item) => {
            let obj = this._.find(acc, { name: item.verdict })
            if (!obj) {
              obj = { name: item.verdict, data: [0, 0, 0, 0, 0, 0, 0] }
              acc.push(obj)
            }
            let dayOfWeek = new Date(item.day).getDay()
            if (dayOfWeek === 0) {
              dayOfWeek = 7
            }
            dayOfWeek--
            obj.data[dayOfWeek] = item.value
            return acc
          }, [])
          this.barChartData = barData
        })
    },
    getPieChartData() {
      console.log('getPieChartData')
      const query = {
        q: JSON.stringify([
          {
            $match: {
              'cre.time': {
                $gt: this.lastWeekDate().toISOString()
              }
            }
          },
          {
            $group: {
              _id: {
                campaign: '$campaign'
              },
              count: { $sum: 1 }
            }
          },
          {
            $project: {
              name: '$_id.campaign',
              value: '$count'
            }
          }
        ]), t: 'aggregate' }

      resultsList(query)
        .then(({ data }) => data)
        .then(data => {
          this.pieChartData = data
        })
    },
    getRaddarChartData() {
      const query = {
        q: JSON.stringify([
          {
            $match: {
              'cre.time': {
                $gt: this.lastWeekDate().toISOString()
              }
            }
          },
          {
            $group: {
              _id: {
                verdict: '$exec.verdict',
                campaign: '$campaign'
              },
              count: { $sum: 1 }
            }
          },
          {
            $project: {
              verdict: '$_id.verdict',
              campaign: '$_id.campaign',
              count: '$count'
            }
          }
        ]), t: 'aggregate' }

      resultsList(query)
        .then(({ data }) => data)
        .then(data => {
          const raddarData = this._.reduce(data, (acc, item) => {
            let obj = this._.find(acc, { name: item.campaign })
            if (!obj) {
              obj = { name: item.campaign, value: [0, 0, 0, 0, 0, 0] }
              acc.push(obj)
            }
            if (item.verdict === 'pass') {
              obj.value[0] = item.count
            } else if (item.verdict === 'fail') {
              obj.value[1] = item.count
            } else if (item.verdict === 'inconclusive') {
              obj.value[2] = item.count
            } else if (item.verdict === 'block') {
              obj.value[3] = item.count
            } else if (item.verdict === 'error') {
              obj.value[4] = item.count
            } else if (item.verdict === 'skip') {
              obj.value[5] = item.count
            }
            return acc
          }, [])
          this.raddarChartData = raddarData/* [
                  {
                    value: [5000, 7000, 12000, 0, 0, 0],
                    name: 'Allocated Budget'
                  },
                  {
                    value: [4000, 9000, 15000, 0, 0, 0],
                    name: 'Expected Spending'
                  },
                  {
                    value: [5500, 11000, 12000, 0, 0, 0],
                    name: 'Actual Spending'
                  }
                ]*/
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
