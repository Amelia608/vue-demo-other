import axios from '@/utils/saas/axios'

export default {
  /** ****充值******/
  // 某门店充值列表查询
  rechargeList (storeId, data) {
    return axios.get(`${storeId}/receipts/_search`, {
      params: Object.assign({
        page: 1,
        page_size: 10,
        keyword: '',
        begin_time: '',
        end_time: '',
        payment_state: ''
      }, data)
    })
  }
}
