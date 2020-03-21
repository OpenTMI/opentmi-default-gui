import Mock from 'mockjs'
import _ from 'lodash'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      _id: '@increment',
      tcid: '@first',
      cre: {
        time: +Mock.Random.date('T'),
        user: '@first'
      },
      other_info: {
        type: Mock.Random.pick([
          'installation',
          'compatibility',
          'smoke',
          'regression',
          'acceptance',
          'alpha',
          'beta',
          'stability',
          'functional',
          'destructive',
          'performance',
          'reliability'
        ])
      },
      status: {
        value: Mock.Random.pick([
          'unknown',
          'released',
          'development',
          'maintenance',
          'broken'
        ])
      }
    })
  )
}

export default [
  {
    url: '/api/v0/testcases',
    type: 'get',
    response: config => {
      const { sk = 0, l = 20, s, t } = config.query
      const limit = parseInt(l)
      const skip = parseInt(sk)

      let mockList = List
      if (!_.isEmpty(s)) {
        const sort = JSON.parse(s)
        const sortBy = _.keys(sort)
        const sortAsc = _.values(sort)[0]
        console.log({ sortAsc, sortBy })
        mockList = _.sortBy(List, sortBy)
        if (sortAsc === 1) {
          mockList = mockList.reverse()
        }
      }
      const filter = _.omit(config.query, ['s', 'sk', 'l', 't'])
      console.log({ filter })
      mockList = _.filter(mockList, filter)

      if (t === 'count') {
        return { count: mockList.length }
      }
      const data = _.slice(mockList, skip, skip + limit)
      return data
    }
  },

  {
    url: '/api/v0/testcases/:_id',
    type: 'get',
    response: config => {
      const { _id } = config.params
      for (const testcase of List) {
        if (testcase._id === _id) {
          return testcase
        }
      }
    }
  },

  {
    url: '/api/v0/testcases/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },

  {
    url: '/api/v0/testcases',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
