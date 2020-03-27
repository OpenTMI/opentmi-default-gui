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
      campaign: +Mock.Random.pick(['camp-1', 'camp-2', 'camp-3']),
      exec: {
        verdict: Mock.Random.pick(['pass', 'fail', 'pass', 'inconclusive', 'blocked', 'pass', 'error', 'skip']),
        note: Mock.Random.pick(['', 'something happens', '', '']),
        duts: [
          {
            vendor: Mock.Random.pick(['Samsung', 'Huawei', 'Nokia', 'Apple']),
            model: Mock.Random.pick(['A', 'B', 'C', 'D'])
          }
        ]
      }
    })
  )
}

export default [
  {
    url: '/api/v0/results',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/results/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },

  {
    url: '/api/v0/results/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },

  {
    url: '/api/v0/results',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
