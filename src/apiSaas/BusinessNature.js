import axios from '@/utils/saas/axios'

export default {
  get_biz_types (data) {
    return axios.get(`stores/biz_types`, {
      params: data
    })
  },
  del_biz_types (id) {
    return axios.delete(`stores/biz_types/${id}`)
  },
  AddBizTypes (query) {
    return axios.post(`stores/biz_types`, Object.assign({
      name: '',
      memo: '',
      order: ''
    }, query))
  },
  EditBizTypes (id, query) {
    return axios.put(`customer/member_tag/${id}`, Object.assign({
      name: '',
      memo: '',
      order: ''
    }, query))
  }
}
