import request from '@/utils/request'

export function searchResource(id) {
  return request({
    url: `/api/v0/resources/${id}`,
    method: 'get'
  })
}

export function resourceList(query) {
  return request({
    url: '/api/v0/resources',
    method: 'get',
    params: query
  })
}
