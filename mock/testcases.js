import Mock from 'mockjs'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
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
      value: Mock.Random.pick(['unknown', 'released', 'development', 'maintenance', 'broken'])
    }
  }))
}

export default [
  {
    url: '/api/v0/testcases',
    type: 'get',
    response: config => {
      const { tcid, sk = 0, l = 20, s, t } = config.query
      const limit = parseInt(l)
      const page = (parseInt(sk) / limit)

      let mockList = List.filter(item => {
        if (tcid && item.tcid !== tcid) return false
        return true
      })

      if (s === '{"tcid":-1}') {
        mockList = mockList.reverse()
      }
      // console.log({ limit, page, s })
      let pageList = mockList.filter((item, index) => index < (limit * (page + 1)) && index >= (limit * page))

      // console.log({ count: pageList.length })
      if (t === 'count') {
        pageList = { count: pageList.length }
      }

      return pageList
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

