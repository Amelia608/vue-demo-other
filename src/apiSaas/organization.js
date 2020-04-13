import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {

  // 修改
  orgPut (id, data) {
    return axios.put(`organizations/${id}`, data)
  },

  // 新增
  orgPost (data) {
    let v = qs.stringify(data)
    return axios.post(`organizations`, v, F_CONTENT_TYPE)
  },

  // 获取
  orgGet (data) {
    return axios.get(`organizations`, {
      params: data
    })
  },

  // 删除
  orgDelete (id) {
    return axios.delete(`organizations/${id}`)
  },

  // // 子组织
  subGet (id) {
    return axios.get(`organizations/${id}/sub_organizations`)
  },
  // // 组织机构类型
  orgTypes (id) {
    return axios.get(`organization_types`)
  }

}
