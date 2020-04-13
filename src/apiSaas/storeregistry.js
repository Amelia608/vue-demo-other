import axios from '@/utils/saas/axios'

export default {
  // 获取预约客户
  reservation_customers (id, data = {}) {
    return axios.get(`stores/${id}/reservation_customers`, { params: data })
  },
  // 获取非预约客户
  not_reservation_customers (id, data) {
    return axios.get(`stores/${id}/not_reservation_customers`, { params: data })
  },
  // 获取门店空闲技师
  free_employees (id) {
    return axios.get(`stores/${id}/free_employees`)
  },
  // 获取客户基本信息
  customers (id) {
    return axios.get(`customers/${id}`)
  },
  // 获取客户来源
  customers_source () {
    return axios.get(`customers/_source`)
  },
  // 进店登记记录
  new_registrations (data) {
    return axios.post(`registrations`, data)
  }
}
