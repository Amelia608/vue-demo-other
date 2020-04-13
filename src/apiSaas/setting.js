import axios from '@/utils/saas/axios'
export default {
  // 获取支付方式列表
  getPayWays () {
    return axios.get('shop/getPayWays')
  },
  // 获取支付方式列表-订单
  getPayWaysAll () {
    return axios.get('shop/getPayWays/all')
  },
  // 收款方式是否实收
  getPayWaysIsOfficialReceipts (id) {
    return axios.get(`shopPayWay/${id}/isOfficialReceipts`)
  },
  // 收款方式是否启用
  getPayWaysIsOpen (id) {
    return axios.get(`shopPayWay/${id}/isOpen`)
  },
  // 收款方式是否上移
  getPayWaysMoveUp (id) {
    return axios.get(`shopPayWay/${id}/moveUp`)
  },
  // 编辑收款方式
  editPayWay (data) {
    return axios.post('save/shopPayWay', data)
  }
}
