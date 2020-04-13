import request from '@/utils/request'

export function list (params) {
  return request({ url: '/discount/list', params }).then(res => res)
}

export function info (params) {
  return request({ url: '/discount/info', params }).then(res => res)
}

export function save (params) {
  return request({
    url: `/discount/${params.id ? 'update' : 'add'}`,
    method: 'post',
    data: params
  }).then(res => res)
}

export function deleteStop (params) {
  return request({
    url: '/discount/delete_stop',
    method: 'post',
    data: params
  }).then(res => res)
}
