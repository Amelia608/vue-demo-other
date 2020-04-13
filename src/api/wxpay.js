import request from '@/utils/request'

export function getDetail () {
  return request({ url: '/wechatpayset/detail' }).then(res => res)
}

export function save (params = {}) {
  return request({ url: `/wechatpayset/save`, method: 'post', data: params }).then(res => res)
}
