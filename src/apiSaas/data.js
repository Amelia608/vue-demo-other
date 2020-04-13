// 数据中心
import axios from '@/utils/saas/axios'
export default {
  // 订单业绩明细汇总
  getOrderListDeductTotal (data = {}) {
    return axios.post(`consumeBillDeduct/getOrderListDeductTotal`, data)
  },
  // 订单业绩明细
  getOrderListDeduct (data = {}) {
    return axios.post(`consumeBillDeduct/getOrderListDeduct`, data)
  },
  // 订单业绩明细详情
  getOrderDetailDeduct (data = {}) {
    return axios.get(`consumeBillDeduct/getOrderDetailDeduct`, { params: data })
  },
  // 批量日结
  confirmDayClose (data = {}) {
    return axios.post(`dayClose/confirmDayClose`, data)
  },
  // 取消日结
  cancelDayClose (dayCloseId) {
    return axios.get(`dayClose/cancelDayClose`, { params: { dayCloseId } })
  },
  // 查询日结详情
  getDayCloseInfo (dayCloseId) {
    return axios.get('dayClose/getDayCloseInfo', { params: { dayCloseId } })
  },
  // 删除日结
  delDayClose (dayCloseId) {
    return axios.get('dayClose/delDayClose', { params: { dayCloseId } })
  },
  // 员工业绩排行
  getEmpPerformanceRankingList (data) {
    return axios.post('consumeBillDeduct/getEmpPerformanceRankingList', data)
  },
  // 员工提成排行榜
  getEmpDeductRankingList (data) {
    return axios.post('consumeBillDeduct/getEmpDeductRankingList', data)
  },
  // 获取员工激励详情
  getIncentivePerformance (data) {
    return axios.post('consumeBillDeduct/getIncentivePerformance', data)
  },
  // 员工详情汇总
  getEmpPerformanceTotal (data) {
    return axios.post('consumeBillDeduct/getEmpPerformanceTotal', data)
  },
  // 员工详情list
  getOrderDetailDeductByEmp (data) {
    return axios.post('consumeBillDeduct/getOrderDetailDeductByEmp', data)
  }
}
