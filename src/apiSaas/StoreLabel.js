import axios from '@/utils/saas/axios'

export default {
  tagslist (data) {
    return axios.get('tags', {
      params: data
    })
  },
  newtags (data) {
    return axios.post('tags', data)
  },
  deltags (id) {
    return axios.delete(`tags/${id}`)
  },
  gettags (id) {
    return axios.get(`tags/${id}`)
  },
  updatetags (id, data) {
    return axios.put(`tags/${id}`, data)
  }
}
