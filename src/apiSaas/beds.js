import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 获取床位/工位列表
  workpositions_search (data) {
    return axios.get(`workpositions/_search`, { params: data })
  },

  enableForbid (id, value) {
    return axios.put(`workpositions/${id}/${value ? '_forbid' : '_enable'}`)
  },

  // 批量释放工位
  workpositions_release (data) {
    return axios.put(`workpositions/_release`, qs.stringify(data), F_CONTENT_TYPE)
  },

  saveWorkpositions (data) {
    const type = data.id ? 'put' : 'post'
    const path = data.id ? `/${data.id}` : ''
    return axios[type](`workpositions${path}`, data)
  },

  // 获取床位/工位
  get_workpositions (id) {
    return axios.get(`workpositions/${id}`)
  }
}
