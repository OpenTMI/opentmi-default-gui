import request from '@/utils/request'

export function getVersion() {
  return request({
    url: `/api/v0/version`,
    method: 'get'
  }).then(({ data }) => data)
}
