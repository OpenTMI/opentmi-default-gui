import Mock from 'mockjs'
import utils from './utils'

const { query, getItem } = utils
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
    response: config => query(List, config)
  },

  {
    url: '/api/v0/testcases/:_id',
    type: 'get',
    response: config => getItem(List, config)
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
