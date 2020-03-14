import request from '@/utils/request'

export function searchResult(id) {
  return request({
    url: `/api/v0/results/${id}`,
    method: 'get'
  })
}

export function resultsList(query) {
  return request({
    url: '/api/v0/results',
    method: 'get',
    params: query
  })
}
