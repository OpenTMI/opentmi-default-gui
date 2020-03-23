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
        user: '@first'
      },
      priority: {
        level: Mock.Random.pick(['emerg', 'alert', 'crit', 'err', 'warning', 'notice', 'info', 'debug']),
        facility: Mock.Random.pick(['auth', 'cron', 'daemon','mail','news','syslog','user', 'result', 'resource', 'testcase'])
      }
    })
  )
}

export default [
  {
    url: '/api/v0/events',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/events/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },

  {
    url: '/api/v0/events/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },

  {
    url: '/api/v0/events',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
