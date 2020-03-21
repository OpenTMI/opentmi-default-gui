import Mock from 'mockjs'
import utils from './utils'

const { query, getItem } = utils

const List = []
const count = 100



for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      _id: '@increment',
      cre: {
        time: +Mock.Random.date('T'),
        user: Mock.Random.first()
      },
      name: Mock.Random.first(),
      type: Mock.Random.pick(['system', 'dut', 'instrument', 'accessories', 'computer', 'room']),
      status: {
        value: Mock.Random.pick(['active', 'maintenance', 'storage', 'broken']),
        note: Mock.Random.string()
      }
    })
  )
}

export default [
  {
    url: '/api/v0/resources',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/resources/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },

  {
    url: '/api/v0/resources/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },

  {
    url: '/api/v0/resources',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
