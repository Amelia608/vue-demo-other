import axios from '@/utils/saas/axios'

export default {
  // 获取职能列表
  getDeptList () {
    return axios.get(`organizations`, {
      params: {
        type: 'DEPZ'
      }
    })
  },
  // 获取职位列表
  getPositionList () {
    return axios.get(`employees/positions`)
  },
  // 获取用户列表
  getUserList (data) {
    return axios.post(`users/_search`, data)
  },
  // 新增用户
  newusers (data = {}) {
    return axios.post(`users`, data)
  },
  // 获取用户
  getusers (id) {
    return axios.get(`users/${id}`)
  },
  // 修改用户
  putusers (id, data = {}) {
    return axios.put(`users/${id}`, data)
  },
  // 获取用户
  users_role (id) {
    return axios.get(`users/${id}/role`)
  },
  // 批量设置用户角色
  assign_user_to_role (data = {}) {
    return axios.post(`_assign_user_to_role`, data)
  },
  // 密码设置
  users_password (id, data = {}) {
    return axios.put(`users/${id}/password`, data)
  },
  // 根据员工编号查询员工信息
  getemployees (data = {}) {
    return axios.get(`employees`, { params: data })
  },
  // 禁用
  users_forbid (id) {
    return axios.put(`users/${id}/_forbid`)
  },
  // 启用
  users_enable (id) {
    return axios.put(`users/${id}/_enable`)
  }
}
