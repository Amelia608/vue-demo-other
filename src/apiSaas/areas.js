import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 获取区域列表
  getList (data = {}) {
    return axios.get(`areas/_search`, { params: Object.assign({ name: '', valid: '', page: 1 }, data) })
  },
  // 区域启用、禁用
  changeState (id, data) {
    return axios.put(`areas/${id}/_operator`, qs.stringify(data), F_CONTENT_TYPE)
  },

  saveArea (data) {
    const id = data.id || ''
    const path = `areas${id ? `/${id}` : ''}`
    const type = id ? 'put' : 'post'
    return axios[type](path, Object.assign({ name: '', memo: '', order: 0 }, data))
  },
  delete (id) {
    return axios.delete(`areas/${id}`)
  },
  getProvince () {
    return axios.get(`area/getAllProvince`)
  },
  getCity (parentCode) {
    return axios.get(`area/getCity`, { params: { parentCode } })
  },
  getArea (parentCode) {
    return axios.get(`area/getArea`, { params: { parentCode } })
  }
}
