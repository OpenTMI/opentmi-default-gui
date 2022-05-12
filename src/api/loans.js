import request from '@/utils/request'

export function getLoan(id, query) {
  return request({
    url: `/api/v0/loans/${id}`,
    method: 'get',
    params: query
  }).then(({ data }) => data)
}

export function findLoans(query) {
  return request({
    url: '/api/v0/loans',
    method: 'get',
    params: query
  }).then(({ data }) => data)
}

export function loanItem(loan) {
  return request({
    url: '/api/v0/loans',
    method: 'post',
    data: loan
  }).then(({ data }) => data)
}
export function updateLoan(loan) {
  return request({
    url: `/api/v0/loans/${loan._id}`,
    method: 'put',
    data: loan
  }).then(({ data }) => data)
}

export function returnLoan(loan) {
  return request({
    url: `/api/v0/loans/${loan._id}`,
    method: 'put',
    data: loan
  }).then(({ data }) => data)
}
