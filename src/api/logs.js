import request from '@/utils/request'

// 日志列表
export function getList (params) {
  return request({
    url: '/operatelog/list',
    method: 'get',
    params
  }).then(res => res)
}
