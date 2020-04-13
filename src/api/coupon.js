import request from '@/utils/request'

export function list (params) {
  return request({ url: '/coupon/list', params }).then(res => res)
}

export function info (params) {
  return request({ url: '/coupon/info', params }).then(res => res)
}

export function save (params) {
  return request({
    url: `/coupon/${params.id ? 'edit' : 'add'}`,
    method: 'post',
    data: params
  }).then(res => res)
}

export function discard (params) {
  return request({
    url: '/coupon/discard',
    method: 'post',
    data: params
  }).then(res => res)
}
