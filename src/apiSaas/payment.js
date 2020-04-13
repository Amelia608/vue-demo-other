import axios from '@/utils/saas/axios'

export default {
  // 查询客户 账户
  custAccountsPost (id, data) {
    return axios.get(`customers/${id},accounts`, {
      params: data
    })
  },
  // 收款
  receiptsPost (data) {
    let obj = Object.assign({
      'payment_amount': '', // "支付金额",
      'payment_channel': '', // "支付方渠道，1微信、2支付宝、3拉卡拉支付、4银行卡、5现金、6转账、7支票、8其他",
      'payment_bank_name': '', // "支付银行名称",
      'payment_bank_account': '', // "支付银行户名",
      'payment_card_code': '', // "支付银行账号",
      'payment_pos_code': '', // "刷卡pos机号",
      'payment_card_type': '', // "支付卡类型，1信用卡、2银行卡",
      'customer_id': '', // "客户id",
      'batch_no': '' // "批次号"
    }, data)
    return axios.post(`receipts`, obj)
  },
  // 收款列表
  receiptsInfo (id) {
    return axios.get(`receipts/${id}`)
  },
  // 收款
  receiptsList (data) {
    return axios.get(`receipts/_system_search`, {
      params: data
    })
  }
}
