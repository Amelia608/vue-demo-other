import request from '@/utils/request'

export function list () {
  return request({
    url: '/express/temp/list'
  }).then(res => res)
}

export function save (params) {
  return request({
    url: `/express/temp/${params.list ? 'add' : 'update'}`,
    method: 'post',
    data: params
  }).then(res => res)
}

export function del (id) {
  return request({
    url: `/express/temp/delete?id=${id}`,
    method: 'post'
  }).then(res => res)
}
// 列表
export function listPc (params) {
  return request({
    url: '/express/temp/list_pc',
    method: 'post',
    data: params
  }).then(res => res)
}
// 设为默认模板
export function setDefultTemp (params) {
  return request({
    url: 'express/temp/set_defult_temp',
    method: 'post',
    data: params
  }).then(res => res)
}
// 根据id设置默认回显信息
export function setDefultTempInfo (id) {
  return request({
    url: `/express/temp/set_defult_temp_info?id=${id}`
  }).then(res => res)
}
// 编辑回显信息
export function EditDefultTempInfo (id) {
  return request({
    url: `express/temp/info?id=${id}`
  }).then(res => res)
}

// 删除前提示用户
export function delInfo (id) {
  return request({
    url: `/express/temp/total_store_by_teamId?id=${id}`
  }).then(res => res)
}
