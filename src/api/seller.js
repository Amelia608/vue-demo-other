import request from '@/utils/request'

// 分销设置 - 获取分销设置
export function getDistriSettings (params) {
  return request({ url: '/distribution/getDistriSettings', method: 'post', data: params }).then(res => {
    const data = res.data || {}
    data.distriCommissions = data.distriCommissions || [...Array(data.rank)].map((v, i) => ({
      rank: i + 1,
      amount: ''
    }))
    data.companyId = data.companyId || ''
    data.storeId = data.storeId || ''
    data.prodCommissions = data.prodCommissions || []
    data.minOrderNumberIsChecked = Boolean(+data.minOrderNumber)
    data.minAmountIsChecked = Boolean(+data.minAmount)
    data.isNeedCondition = data.minOrderNumberIsChecked || data.minAmountIsChecked
    return res
  })
}

// 分销设置 - 获取分销设置
export function getDistriSettingsMenu (params) {
  return request({ url: '/distribution/getDistriSettingsMenu', method: 'post', data: params }).then(res => {
    const data = res.data || {}
    data.distriCommissions = data.distriCommissions || [...Array(data.rank)].map((v, i) => ({
      rank: i + 1,
      amount: ''
    }))
    data.companyId = data.companyId || ''
    data.storeId = data.storeId || ''
    data.prodCommissions = data.prodCommissions || []
    data.minOrderNumberIsChecked = Boolean(+data.minOrderNumber)
    data.minAmountIsChecked = Boolean(+data.minAmount)
    data.isNeedCondition = data.minOrderNumberIsChecked || data.minAmountIsChecked
    return res
  })
}

// 分销设置 - 分销设置保存
export function saveDistriSettings (params) {
  return request({ url: `/distribution/saveDistriSettings`, method: 'post', data: params }).then(res => res)
}

// 查看分销商状态信息
export function distributorInfo (params) {
  return request({ url: `/distribution/distributorInfo`, method: 'post', data: params }).then(res => res)
}

// 驳回分销商申请
export function rejectDistributor (params) {
  return request({ url: `/distribution/rejectDistributor`, method: 'post', data: params }).then(res => res)
}

// 获取分销商申请条件
export function saveDistributor (params) {
  return request({ url: `/distribution/saveDistributor`, method: 'post', data: params }).then(res => res)
}

// 保存分销商申请
export function getDistriCondition (params) {
  return request({ url: `/distribution/getDistriCondition`, method: 'post', data: params }).then(res => res)
}

// 更新分销商状态信息
export function updateDistributorState (params) {
  return request({ url: `/distribution/updateDistributorState`, method: 'post', data: params }).then(res => res)
}

// 分销管理 - 分销管理列表
export function getDistributors (params) {
  return request({ url: `/distribution/getDistributors`, method: 'post', data: params }).then(res => res)
}

// 分销管理 - 查看详情
export function viewdistributor (params) {
  return request({ url: `/distribution/viewdistributor`, method: 'post', data: params }).then(res => res)
}

// 佣金明细 - 佣金明细列表
export function getcommissionlist (params) {
  return request({ url: `/distribution/getcommissionlist`, method: 'post', data: params }).then(res => res)
}

// 提现申请 - 提现申请列表
export function getCashApplys (params) {
  return request({ url: `/distribution/getCashApplys`, method: 'post', data: params }).then(res => res)
}

// 提现申请 - 发放提现申请
export function pinganwithdraw (params) {
  return request({ url: `/distribution/pinganwithdraw`, method: 'post', data: params }).then(res => res)
}

// 提现申请 - 通过，驳回申请
export function changeCashApplyState (params) {
  return request({ url: `/distribution/changeCashApplyState`, method: 'post', data: params }).then(res => res)
}
