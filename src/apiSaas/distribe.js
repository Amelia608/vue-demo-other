// 分销管理--提现申请
import axios from '@/utils/saas/axios'
export default {
  // 提现申请列表
  getCashApplys (data = {}) {
    return axios.post(`mall/cddb/getCashApplys`, data)
  },
  // 提现状态变更--通过或驳回
  changeCashApplyState (data = {}) {
    return axios.post(`mall/cddb/changeCashApplyState`, data)
  },
  // 提现发放
  pinganwithdraw (data = {}) {
    return axios.post(`mall/cddb/pinganwithdraw`, data)
  },
  // 佣金明细
  getcommissionlist (data = {}) {
    return axios.post('mall/cddb/getcommissionlist', data)
  }
}
