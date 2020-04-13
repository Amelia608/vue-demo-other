import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/distcoupon/list_pc',
    method: 'post',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/distcoupon/info_pc',
    method: 'get',
    data
  }).then(res => res)
}

export function save (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    url: '/distcoupon/add',
    method: 'post',
    data
  }).then(res => res)
}

export function deleteStop (data) {
  return request({
    url: '/distcoupon/discard',
    method: 'post',
    data
  }).then(res => res)
}

export function update (data) {
  return request({
    url: '/distcoupon/edit',
    method: 'post',
    data
  }).then(res => res)
}

export function updatenum (data) {
  return request({
    url: '/reduce/update_num',
    method: 'post',
    data
  }).then(res => res)
}
