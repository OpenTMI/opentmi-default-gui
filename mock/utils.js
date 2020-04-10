import _ from 'lodash'

export default {
  getItem: function(list, config){
    const { _id } = config.params
    return _.find(list, { _id })
  },
  query: function(list, config) {
    console.log(`query([${list.length}] items`, config)
    const { sk = 0, l = 20, s, t, f } = config.query
    const limit = parseInt(l)
    const skip = parseInt(sk)
    const fields = f ? f.split(' ') : []

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
    const filter = _.omit(config.query, ['s', 'sk', 'l', 't', 'f'])
    console.log({ filter })
    mockList = _.filter(mockList, filter)

    if (t === 'count') {
      return { count: mockList.length }
    }
    if (t === 'distinct') {
      console.log(`distinct by ${f}`)
      const items = _.map(mockList, obj => _.get(obj, f))
      return _.uniq(items)
    }
    let data = _.slice(mockList, skip, skip + limit)
    if (fields) {
      data = _.map(data, obj => _.pick(obj, fields))
    }
    return data
  }
}
