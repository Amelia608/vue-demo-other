import request from '@/utils/request'

export function getOrderInfo () {
  return request({ url: '/ordersetup/info' }).then(res => res)
}

export function setOrderInfo (params) {
  return request({
    url: '/ordersetup/update',
    method: 'post',
    data: params
  }).then(res => res)
}
