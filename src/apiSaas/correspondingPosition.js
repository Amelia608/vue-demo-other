import axios from '@/utils/saas/axios'

export default {
  // 列表
  employeeslist (data) {
    return axios.get(`employees/positionRelations`, {
      params: data
    })
  },
  // 添加、修改SAP职位对应职位
  savePositionRelations (data) {
    const id = data.id || ''
    return axios.post(`employees/positionRelations${id ? `/${id}` : ''}`, data)
  },
  // 删除SAP职位对应职位
  delPositionRelations (id) {
    return axios.delete(`employees/positionRelations/${id}`)
  },
  // 查
  getemployees (id) {
    return axios.get(`employees/positionRelations/${id}`)
  },
  // 员工组
  position_types () {
    return axios.get(`employees/positions`)
  },
  // 门店职位
  groups_types () {
    return axios.get(`employees/positions`)
  },
  // 门店组织结构
  getStoreOrg (data) {
    return axios.get(`employees/organize`, {
      params: data
    })
  }
}
