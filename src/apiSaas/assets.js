import axios from '@/utils/saas/axios'
// import qs from 'qs'

export default {
  // 获取资金账户详情
  getAccountInfo () {
    return axios.get(`pay/getAccountInfo`)
  },
  // 提现
  withdraw (data) {
    return axios.post('shop/withdraw', data)
  },
  // 资金明细、提现记录
  getBillDetail (data) {
    return axios.post('shop/getBillDetail', data)
  }
}
