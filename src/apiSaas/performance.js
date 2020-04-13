import axios from '@/utils/saas/axios'

export default {
  // 新增方案
  addPerformancePart (data) {
    return axios.post(`schemes`, data)
  },
  // 获取方案列表
  getPartList (data = {}) {
    return axios.get(`schemes`, { params: data })
  },
  // 获取特殊产品设置
  setProduct (data = {}) {
    return axios.get(`achievement_config`, { params: data })
  },
  // 获取方案信息
  getPartInfo (id) {
    return axios.get(`schemes/${id}`)
  },
  // 修改方案信息
  updatePartInfo (data = {}) {
    return axios.post(`achievement/update`, data)
  },
  // 获取特殊产品设置
  getSpeProduct (data = {}) {
    return axios.get(`achievement_config/_search`, { params: data })
  },
  // 设置特殊产品配置
  // POST /v1/achievement_configs
  addProduct (id, data) {
    return axios.post(`achievement_configs/${id}`, data)
  },
  // 删除方案
  // DELETE /v1/achievement/{id}
  delPart (id) {
    return axios.delete(`achievement/${id}`)
  }
}
