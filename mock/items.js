import { merge } from 'lodash'
import Mock from 'mockjs'
import utils from './utils'

const { query, getItem } = utils

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  const in_stock = Mock.Random.int(0, 200)
  const available = Mock.Random.int(0, in_stock)
  List.push(Mock.mock({
    _id: '@increment',
    name: Mock.Random.first(),
    category: Mock.Random.pick(['accessory', 'board', 'component', 'other']),
    in_stock,
    available,
    image_src: '',
    manufacturer: {
      name: Mock.Random.pick(['Nokia', 'Apple', 'Samsung', 'Huaway'])
    }
  }))
}

export default [
  {
    url: '/api/v0/items',
    type: 'get',
    response: config => query(List, config)
  },

  {
    url: '/api/v0/items/:_id',
    type: 'get',
    response: config => getItem(List, config)
  },
  {
    url: '/api/v0/items/create',
    type: 'post',
    response: _ => {
      return {}
    }
  },
  {
    url: '/api/v0/items',
    type: 'put',
    response: ({ body, method, url }) => {
      const id = url.split('/').pop()
      const item = List.find(obj => obj._id === id)
      if (!item) return {}
      merge(item, body)
      return {}
    }
  }
]
