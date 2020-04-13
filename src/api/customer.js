import request from '@/utils/request'
import { downloadExcel } from '@/utils'

// 客户列表
export function getList (params) {
  return request({
    url: '/user/list',
    params
  }).then(res => res)
}

// 所属员工列表
export function getAllempList (params) {
  return request({
    url: '/user/listallemp',
    params
  }).then(res => res)
}

// 修改客户所属
export function updateemp (params) {
  return request({
    url: '/user/updateemp',
    method: 'post',
    data: params
  }).then(res => res)
}

// 员工业绩导出
export function achievementExport (params = {}, filename) {
  return request({
    url: '/user/achievement/export',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

// 员工信息导出
export function empExport (params = {}, filename) {
  return request({
    url: '/user/emp/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

// 会员导出
export function userExport (params = {}, filename) {
  return request({
    url: '/user/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

export function getLabelList (data = {}) {
  return request({ url: '/user/label/list', method: 'get', data })
}

export function addLabel (data = {}) {
  return request({ url: '/user/label/add', method: 'post', data })
}

export function delLabel (data = {}) {
  return request({ url: '/user/label/delete', method: 'post', data })
}

export function updateLabel (data = {}) {
  return request({ url: '/user/label/update', method: 'post', data })
}
