import request from '@/utils/request'
import { downloadExcel } from '@/utils'

export function getList (params) {
  return request({
    url: '/activity/list',
    params
  }).then(res => res)
}

export function getInfo (params) {
  return request({
    url: '/activity/info',
    params
  }).then(res => res)
}

export function statistic (params) {
  return request({
    url: '/activity/statistic',
    params
  }).then(res => res)
}

export function save (params) {
  return request({
    url: `/activity/${params.id ? 'update' : 'add'}`,
    method: 'post',
    data: params
  }).then(res => res)
}

export function operate (params) {
  return request({
    url: '/activity/operate',
    method: 'post',
    data: params
  }).then(res => res)
}

// 导出参与名单
export function exportList (data = {}, filename) {
  return request({
    url: '/activityrecord/record_export',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    data
  }).then((data) => downloadExcel(data, filename))
}
