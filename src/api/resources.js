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

export function getSchema(_) {
  return request({
    url: `/api/v0/schemas/Resource.json`,
    method: 'get'
  }).then(({ data }) => {
    const { schema } = data
    return schema
  })
}
