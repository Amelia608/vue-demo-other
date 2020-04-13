import axios from '@/utils/saas/axios'

export default {
  // 查询护理日志列表
  get_nursing (data) {
    return axios.get(`nursingdiaryList`, { params: data })
  },
  // 护理日志置顶、取消置顶
  top_nursing (id, data = {}) {
    return axios.post(`nursingdiary/${id}/top`, { params: data })
  },
  // 查询护理日志详情
  serach_nursing (id, data = {}) {
    return axios.get(`nursingdiary/${id}`, data)
  },
  // 删除护理日志
  del_nursing (id, data = {}) {
    return axios.delete(`nursingdiary/${id}`, data)
  },
  // 添加，修改护理日志
  add_edit (data = {}) {
    // POST /v1/nursingdiary
    return axios.post(`nursingdiary`, data)
  },
  // 查询客户的护理日志
  user_nursing (customerId, data = {}) {
    return axios.get(`customers/${customerId}/nursingDiary`, { params: data })
  },
  // 技师
  technicians (data = {}) {
    // GET /v1/employees/technicians
    return axios.get(`employees/technicians`, { params: data })
  },
  // 部门
  // GET /v1/organizations
  organization (data = {}) {
  // GET /v1/employees/technicians
    return axios.get(`organizations`, { params: data })
  }
}
