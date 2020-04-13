import { downloadExcel } from '@/utils'
import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/reduce/list',
    method: 'get',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/reduce/info',
    method: 'get',
    data
  }).then(res => res)
}

export function save (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    url: '/reduce/add',
    method: 'post',
    data
  }).then(res => res)
}

export function deleteStop (data) {
  return request({
    url: '/reduce/operate',
    method: 'post',
    data
  }).then(res => res)
}

export function update (data) {
  return request({
    url: '/reduce/update',
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

// 活动统计
export function statisinfo (data) {
  return request({
    url: '/reduce/get_reduce_record_data',
    method: 'get',
    data
  }).then(res => res)
}

// 活动统计 - 小计
export function statisinfoTotal (data) {
  return request({
    url: '/reduce/get_reduce_record_data_total',
    method: 'get',
    data
  }).then(res => res)
}

// 详情统计
export function statisinfoDetail (data) {
  return request({
    url: '/reduce/get_reduce_record_details_data',
    method: 'get',
    data
  }).then(res => res)
}

// 详情统计 - 小计
export function statisinfoDetailTotal (data) {
  return request({
    url: '/reduce/get_reduce_record_details_data_total',
    method: 'get',
    data
  }).then(res => res)
}

// 详情导出
export function exportStatisticDetail (params = {}, filename) {
  return request({
    url: '/reduce/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}
