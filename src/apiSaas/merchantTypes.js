import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  getList (data = {}) {
    return axios.get(`merchant_types`, data)
  },
  add (data = {}) {
    return axios.post(`merchant_types`, data)
  },
  edit (id, data = {}) {
    return axios.post(`merchant_types/${id} `, data)
  },
  switch (id, data = {}) {
    return axios.put(`merchant_types/${id}/_operator`, qs.stringify(data), F_CONTENT_TYPE)
  },
  handleType (id, data) {
    const path = `merchant_types${id ? `/${id}` : ''}`
    const type = id ? 'put' : 'post'
    return axios[type](path, data)
  },
  delType (id) {
    return axios.delete(`merchant_types/${id}`)
  }
}
