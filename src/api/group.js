import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/groupbuy/listmag',
    method: 'post',
    data
  }).then(res => res)
}

export function listEasy (data) {
  return request({
    url: '/groupbuy/list/running',
    method: 'post',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/groupbuy/info',
    data
  }).then(res => res)
}

export function save (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    method: 'post',
    url: '/groupbuy/save',
    data
  }).then(res => res)
}

export function deleteStop (data) {
  return request({
    url: '/groupbuy/close',
    data
  }).then(res => res)
}

// 表头统计
export function statisinfo (data) {
  return request({
    url: '/groupbuy/statisinfo',
    data
  }).then(res => res)
}

// 报表统计
export function reportinfo (data) {
  return request({
    url: '/groupbuy/reportinfo',
    method: 'post',
    data
  }).then(res => res)
}

// 报表统计
export function updatenum (data) {
  return request({
    url: '/groupbuy/updatenum',
    method: 'get',
    data
  }).then(res => res)
}
