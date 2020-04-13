import request from '@/utils/request'

// 资产账户
export function getInfo (params = {}) {
  return request({ url: '/assetaccount/info', params }).then(res => res)
}

// 资金明细
export function getList (params = {}) {
  return request({ url: '/assetrecord/list', data: params, method: 'post' }).then(res => res)
}

// 获取账户历史信息
export function assetaccountHistory (params = {}) {
  return request({ url: '/assetaccount/history', params }).then(res => res)
}
