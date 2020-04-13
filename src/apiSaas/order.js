import axios from '@/utils/saas/axios'

export default {
  // 订单管理模块
  // 查询订单列表
  getOrderList (data = {}) {
    return axios.post(`consume/queryConsumeBill`, data)
  },
  // 查询商城订单列表
  getShopOrderList (data = {}) {
    return axios.post(`mall/order/list`, data)
  },
  // 查询商城订单详情
  getShopOrderDetail (data) {
    return axios.post(`mall/order/detail`, data)
  },
  // 发货
  deliverGoods (data) {
    return axios.post(`mall/order/deliverGoods`, data)
  },
  // 获取物流公司列表
  logisticsCompanys () {
    return axios.get('mall/order/logisticsCompanys')
  },
  // 查询退款列表
  getRefundList (data = {}) {
    return axios.post(`consumeRefund/queryConsumeRefund`, data)
  },
  // 修改备注
  updateConsume (id, remark) {
    return axios.post(`consume/updateConsumeBillRemark`, { id, remark })
  },
  // 修改备注--退款
  updateRemark (id, remark) {
    return axios.post(`consumeRefund/updateRemark`, { id, remark })
  },
  // 取消订单
  cancelOrder (orderId) {
    return axios.get(`consume/cancelConsumeBill`, { params: { orderId } })
  },
  // 订单详情
  orderDetail (consumeBillId) {
    return axios.get(`consume/getConsumeBillInfo`, { params: { consumeBillId } })
  },
  // 添加退款
  addRefund (data = {}) {
    return axios.post(`consumeRefund/addConsumeRefund`, data)
  },
  // 根据客户储值卡id查询储值卡详情
  getCStoredValueCardInfo (data) {
    return axios.get('getCStoredValueCard/info', { params: data })
  },
  // 根据客户礼品卡id查询储值卡详情
  getCGiftValueCardInfo (id) {
    return axios.get(`customerGiftCard/${id}/getmessage`)
  }
}
