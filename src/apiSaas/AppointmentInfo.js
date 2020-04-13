import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 选择卡项
  reservation_setting (id) {
    return axios.get(`reservation_setting/customer/${id}`)
  },
  // 选择卡项
  servers_choose (data = {}) {
    return axios.get(`servers/_choose`, { params: data })
  },
  // 获取职位
  positions () {
    return axios.get(`employees/positions`)
  },
  // 获取技师
  technician_employees (data = {}) {
    return axios.get(`technician_employees/_search`, { params: data })
  },
  // 新增预约
  new_reservations (data) {
    return axios.post(`reservations`, data)
  },
  // 获取预约
  get_reservations (id) {
    return axios.get(`reservations/${id}`)
  },
  // 修改预约
  update_reservations (id, data) {
    return axios.put(`reservations/${id}`, data)
  },
  // 取消预约
  cancel_reservations (id, data) {
    return axios.put(`reservations/${id}/_cancel`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 获取预约取消原因预设常量
  getCancelReason () {
    return axios.get(`reservation/cancel_reason`)
  }
}
