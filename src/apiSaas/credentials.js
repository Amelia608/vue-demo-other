import axios from '@/utils/saas/axios'

export default {
  // 获取证件列表
  getCredentials (data) {
    return axios.get(`certs/_search`, {
      params: data
    })
  },
  // 获取证件类型列表
  getCredTypeValid () {
    return axios.get(`certs/types`)
  },
  // 添加、修改证件类型
  saveCertsTypes (data) {
    const id = data.id || ''
    return axios.post(`certs/types${id ? `/${id}` : ''}`, data)
  },
  // 删除证件类型
  delCertsTypes (id) {
    return axios.delete(`certs/types/${id}`)
  },
  updateStatus (id, data) {
    return axios.post(`certs/types/${id}/_switch`, data)
  },
  // 新增证件信息
  newCred (data) {
    return axios.post(`certs`, data)
  },
  // 修改证件信息
  putCred (id, data) {
    return axios.put(`certs/${id}`, data)
  },
  // 获取证件信息
  CredInfo (id) {
    return axios.get(`certs/${id}`)
  },
  // 批量删除证件信息列表
  multiDelCred (data) {
    return axios.delete(`certs`, {
      params: data
    })
  }
}
