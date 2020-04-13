import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  getList (data = {}) {
    return axios.get(`merchants`, {
      params: data
    })
  },
  add (data = {}) {
    return axios.post(`merchants`, data)
  },
  edit (id, data = {}) {
    return axios.put(`merchants/${id} `, data)
  },
  switch (id, data = {}) {
    return axios.put(`merchants/${id}/_operator`, qs.stringify(data), F_CONTENT_TYPE)
  },
  delete (id) {
    return axios.delete(`merchants/${id}`)
  }
  // 部门下拉列表

}
