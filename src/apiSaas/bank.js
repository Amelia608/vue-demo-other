import axios from '@/utils/saas/axios'

export default {
  getBanks (data) {
    return axios.get(`receipts/banks/_search`, {
      params: Object.assign({
        keyword: '',
        page: 1,
        page_size: 10
      }, data)
    })
  },
  // 新增收款银行
  addGatherBank (data) {
    return axios.post(`receipts/banks`, Object.assign({
      name: '',
      code: '',
      memo: '',
      order: ''
    }, data))
  },
  // 查询收款银行详情
  qyBank (id) {
    return axios.get(`receipts/banks/${id}`)
  },
  // 编辑收款银行
  editBank (id, data) {
    return axios.put(`receipts/banks/${id}`, Object.assign({
      name: '',
      code: '',
      memo: '',
      order: ''
    }, data))
  },
  // 删除收款银行
  delBank (id) {
    return axios.delete(`receipts/banks/${id}`)
  }
}
