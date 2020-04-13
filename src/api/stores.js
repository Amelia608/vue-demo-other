import request from '@/utils/request'
import { downloadExcel } from '@/utils'

// 修改门店
export function storeDelete (params) {
  return request({ url: '/store/delete', method: 'delete', params }).then(res => res)
}

// 添加、修改门店
export function storeAdd (params) {
  return request({
    url: params.id ? '/store/update' : '/store/add',
    method: 'post',
    data: params
  }).then(res => res)
}

// 门店列表
export function getList (params) {
  return request({ url: '/store/list', params }).then(res => res.data)
}

// 修改自提状态
export function changeTakeStatus (params) {
  return request({
    url: '/store/take_status',
    method: 'post',
    data: params
  }).then(res => res)
}

// 门店详情
export function info (params) {
  return request({ url: '/store/info', params }).then(res => res.data)
}

// 地点搜索
export function placeSearch (params) {
  return request({ url: '/store/place_search', method: 'post', data: params }).then(res => res.data)
}

// 自提记录
export function takeList (params) {
  return request({ url: '/selftake/list', params }).then(res => res.data)
}

// 自提核销查询
export function takeInfo (params) {
  return request({ url: '/selftake/info', params }).then(res => res.data)
}

// 自提验证提货码
export function takeValidate (params) {
  return request({ url: '/selftake/validate_take', params }).then(res => res)
}

// 获取用户门店
export function getSysuserStore (params) {
  return request({ url: '/store/get_sysuser_store', params }).then(res => res)
}

// 获取用户门店，树形结构
export function getSysuserStoreTree (params) {
  return request({ url: '/store/get_sysuser_store_tree', params }).then(res => res)
}

// 门店导出
export function storeExport (params = {}, filename) {
  return request({
    url: '/store/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

// 根据id查询门店树
export function getStoresListTree (params) {
  return request({ url: '/store/get_store_tree_by_ids', method: 'post', data: params }).then(res => res)
}
