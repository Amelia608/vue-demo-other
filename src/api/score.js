import request from '@/utils/request'

export function getDetail () {
  return request({ url: '/integralsetup/info' }).then(res => res)
}

export function save (params = {}) {
  return request({ url: `/integralsetup/save`, method: 'post', data: params }).then(res => res)
}
