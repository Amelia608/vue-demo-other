import axios from '@/utils/saas/axios'

// 营业-开卡
export default {
  // 查询可选套餐构成明细
  getOptionalCardDetail: (id) => axios.get(`optional_cards/${id}`),

  // 获取客户可使用套餐
  getAvailableCard: (id, params) => axios.get(`customers/${id}/card_orders/_available`, { params }),

  // 查询用户开卡可用积分
  getIntegral: (data) => axios.post(`cards/integral`, data),

  // 获取开卡单详情
  getCardOrderDetail: (id) => axios.get(`card_orders/${id}`),

  // 查询开卡协议信息
  getAgreement: (id) => axios.get(`card_orders/agreement/${id}`),

  // 开卡签署服务协议
  addAgreement: (data) => axios.post('card_orders/agreement', data),

  // 查询可选套餐列表
  searchOptionalCard: (params) => axios.get('optional_cards/_search', { params }),

  // 搜索开卡单
  searchCardOrder: (params) => axios.get('card_orders/_search', { params }),

  // 获取客户卡项明细列表
  searchCardOrderDetail: (params) => axios.get('card_orders/detail', { params }),

  // 开卡
  create: (data) => axios.post('card_orders', data),

  // 取消开卡
  cancel: (id) => axios.post(`card_orders/_cancel/${id}`),

  // 获取客户卡项明细列表
  getAvailableCardList: (params) => axios.get(`card_orders/detail`, { params }),
  // 查询消耗明细
  getCardOrderSettlements: (id, params) => axios.get(`customer/${id}/card_order_settlements`, { params }),

  // 查询开卡协议信息
  getCustomerCardOrder: (id) => axios.get(`customers/card_orders/${id}`)
}
