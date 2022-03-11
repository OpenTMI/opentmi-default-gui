import _ from 'lodash'
import { flatten } from 'flat'

export default {
  getItem: function(list, config) {
    const { _id } = config.params
    return _.find(list, { _id })
  },
  query: function(list, config) {
    console.log(`query([${list.length}] items`, config)
    const { sk = 0, l = 20, s, t, f } = config.query
    const limit = parseInt(l)
    const skip = parseInt(sk)
    let fields = f ? f.split(' ') : []
    fields = _.filter(fields, field => !field.startsWith('-'))
    console.log('fields: ', fields)

    let mockList = list
    if (!_.isEmpty(s)) {
      const sort = JSON.parse(s)
      const sortBy = _.keys(sort)
      const sortAsc = _.values(sort)[0]
      console.log({ sortAsc, sortBy })
      mockList = _.sortBy(mockList, sortBy)
      if (sortAsc === 1) {
        mockList = mockList.reverse()
      }
    }
    const filter = _.omit(config.query, ['s', 'sk', 'l', 't', 'f', 'fl', 'to'])
    let query = {}
    if (filter.q) {
      query = JSON.parse(filter.q)
      if (query['cre.time']) delete query['cre.time']
    }
    console.log('query: ', { query })
    mockList = _.filter(mockList, query)
    console.log('filtered:', mockList)

    if (t === 'count') {
      return { count: mockList.length }
    }
    if (t === 'distinct') {
      console.log(`distinct by ${f}`)
      const items = _.map(mockList, obj => _.get(obj, f))
      return _.uniq(items)
    }
    let data = _.slice(mockList, skip, skip + limit)
    if (fields.length) {
      console.log('use fields..')
      data = _.map(data, obj => _.pick(obj, fields))
    }
    if (config.query.fl) {
      data = _.map(data, flatten)
    }
    console.log('data: ', data)
    return data
  }
}
