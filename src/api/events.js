import request from '@/utils/request'

export function searchEvent(id) {
  return request({
    url: `/api/v0/events/${id}`,
    method: 'get'
  })
}

export function eventList(query) {
  return request({
    url: '/api/v0/events',
    method: 'get',
    params: query
  })
}
