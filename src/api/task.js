import { downloadExcel } from '@/utils'
import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/task/list',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/task/info',
    data
  }).then(res => res)
}

export function save (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    method: 'post',
    url: '/task/add',
    data
  }).then(res => res)
}

export function update (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    method: 'post',
    url: '/task/update',
    data
  }).then(res => res)
}

export function deleteStop (data) {
  return request({
    method: 'post',
    url: '/task/close',
    data
  }).then(res => res)
}

// 表头统计
export function statisinfo (data) {
  return request({
    url: '/task/statistic',
    data
  }).then(res => res)
}

export function statisinfoDetail (data) {
  return request({
    url: '/task/statistic_detail',
    data
  }).then(res => res)
}

// 任务详情导出
export function exportStatisticDetail (params = {}, filename) {
  return request({
    url: '/task/export_statistic_detail',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}
