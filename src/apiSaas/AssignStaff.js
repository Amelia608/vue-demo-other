import axios from '@/utils/saas/axios'

// 查询门店美容师
export const getTechnicians = (data = {}) => {
  return axios.get(`employees/technicians`, {
    params: data
  })
}

// 查询门店客户经理
export const getManager = (data = {}) => {
  return axios.get(`employees/manager`, {
    params: data
  })
}

// 分配跟进员工
export const distribution = (data) => {
  return axios.put(`customers/assign_emp`, data)
}

// 分配归属小组
export const allotGroup = (data) => {
  return axios.put(`customers/assign_group`, data)
}
