import request from '@/utils/request'

// 首页统计数据
export function getData () {
  return request({
    url: '/index/statistics/data'
  }).then(res => res)
}

// 首页统计列表
export function getList (params) {
  return request({
    url: '/index/statistics/list',
    params
  }).then(res => res)
}
