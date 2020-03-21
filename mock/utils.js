import _ from 'lodash'

export default {
  getItem: function(list, config){
    const { _id } = config.params
    return _.find(list, { _id })
  },
  query: function(list, config) {
    console.log(`query([${list.length}] items`, config)
    const { sk = 0, l = 20, s, t } = config.query
    const limit = parseInt(l)
    const skip = parseInt(sk)

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
    const filter = _.omit(config.query, ['s', 'sk', 'l', 't'])
    console.log({ filter })
    mockList = _.filter(mockList, filter)

    if (t === 'count') {
      return { count: mockList.length }
    }
    const data = _.slice(mockList, skip, skip + limit)
    return data
  }
}
