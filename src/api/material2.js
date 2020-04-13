import request from '@/utils/request'

export function getReportList (params = {}) {
  return request({ url: '/product/materialreport/list', params })
}

export function del (data = {}) {
  return request({ url: '/product/materialreport/delete', method: 'post', data: { ...data, status: 1 } })
}

export function handle (data = {}) {
  return request({ url: '/product/materialreport/handle', method: 'post', data: { ...data, status: 2 } })
}

export function getCategoryList (data = {}) {
  return request({ url: '/material/label/list', method: 'get', data })
}

export function addCategory (data = {}) {
  return request({ url: '/material/label/add', method: 'post', data })
}

export function delCategory (data = {}) {
  return request({ url: '/material/label/delete', method: 'post', data })
}

export function updateCategory (data = {}) {
  return request({ url: '/material/label/update', method: 'post', data })
}

export function updateLabel (data = {}) {
  return request({ url: '/material/label/update_label', method: 'post', data })
}
