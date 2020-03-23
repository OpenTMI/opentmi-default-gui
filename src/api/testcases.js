import request from '@/utils/request'

export function searchTests(id) {
  return request({
    url: `/api/v0/testcases/${id}`,
    method: 'get'
  })
}

export function testList(query) {
  return request({
    url: '/api/v0/testcases',
    method: 'get',
    params: query
  })
}
