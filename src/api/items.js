import request from '@/utils/request'

export function getItem(id, query) {
  return request({
    url: `/api/v0/items/${id}`,
    method: 'get',
    params: query
  })
}

export function findItems(query) {
  return request({
    url: '/api/v0/items',
    method: 'get',
    params: query
  }).then(({ data }) => data)
}

export function newItem(item) {
  return request({
    url: '/api/v0/items',
    method: 'post',
    data: item
  })
}
export function updateItem(item) {
  return request({
    url: `/api/v0/items/${item._id}`,
    method: 'put',
    data: item
  })
}

export function itemImageUrl(item) {
  return `${process.env.VUE_APP_BASE_API}/api/v0/items/${item._id}/image`
}
