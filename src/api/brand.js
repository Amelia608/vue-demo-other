import request from '@/utils/request'

export function getDetail () {
  return request({
    url: '/brand/detail'
  }).then(res => res)
}

export function save (params) {
  return request({
    url: '/brand/update',
    method: 'post',
    data: params
  }).then(res => res)
}

export function companySave (params) {
  return request({
    url: '/company/save',
    method: 'post',
    data: params
  }).then(res => res)
}

export function getCategoryList () {
  return request({ url: '/category/treelist' }).then(res => res)
}
