import axios from '@/utils/saas/axios'

export default {
  tags_list (data) {
    return axios.get(`customers/tags`, { params: data })
  },
  new_tags (data) {
    return axios.post(`customers/tags`, data)
  },
  del_tags (id) {
    return axios.delete(`customers/tags/${id}`)
  },
  put_tags (id, data) {
    return axios.put(`customers/tags/${id}`, data)
  }
}
