import utils from './utils'

const { query, getItem } = utils

const List = []

export default [
  {
    url: '/api/v0/loans',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/loans/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },
  {
    url: '/api/v0/loans',
    type: 'post',
    response: ({ body }) => {
      console.log(body)
      List.push(body)
      return {}
    }
  },

  {
    url: '/api/v0/loans',
    type: 'put',
    response: _ => {
      return {}
    }
  }
]
