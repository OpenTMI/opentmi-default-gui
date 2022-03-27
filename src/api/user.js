import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function findUsers(query) {
  return request({
    url: '/api/v0/users',
    method: 'get',
    params: query
  }).then(({ data }) => data)
}

export function githubId() {
  return request({
    url: '/auth/github/id',
    method: 'get'
  })
}

export function getInfo() {
  return request({
    url: '/auth/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getUser({ _id }, query) {
  return request({
    url: `/api/v0/users/${_id}`,
    method: 'get',
    params: query
  }).then(({ data }) => data)
}
