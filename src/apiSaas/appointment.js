import axios from '@/utils/saas/axios'

export default {
  /** *********预约模块*************/
  // 预约列表
  getAppointList (data = {}) {
    return axios.post(`appointment/queryAppointment`, data)
  },
  // 更新预约状态
  updateAppStatus (data = {}) {
    return axios.post(`appointment/updateAppointmentStatus`, data)
  },
  // 新增修改预约
  newUpdateApp (data = {}) {
    return axios.post(`appointment/saveOrUpdateAppointment`, data)
  },
  // 预约详情
  getAppInfo (appointmentId) {
    return axios.get(`appointment/getAppointmentInfo`, {
      params: { appointmentId }
    })
  },
  // 根据手机号查用户详情 customers/getCustomerByPhone
  getCustomerByPhone (phone) {
    return axios.get(`customers/getCustomerByPhone`, {
      params: { phone }
    })
  },
  // 获取门店可选时间
  getArriveTime (data) {
    return axios.post(`appointment/getArriveTime`, data)
  },
  // 获取服务和上门预约可选时间
  getTimeArriveTime (data) {
    return axios.post(`emp/newAppointment/arrangeableTime`, data)
  },
  // 根据预约时间获取技师
  getAppoTimeEmployees (data) {
    return axios.post(`emp/newAppointment/getAppEmployees`, data)
  },
  // 获取门店可选技师
  getAppoEmployees (data) {
    return axios.post(`appointment/getAppoEmployees`, data)
  },
  // 查询当前预约可选的服务列表
  getSetverList (data) {
    return axios.post(`emp/newAppointment/getSetverList`, data)
  },
  // 上门服务安排技师接口
  arrangeTechnicians (data) {
    return axios.post('emp/newAppointment/arrangeTechnicians', data)
  },
  // 新增修改预约--包含上门服务接口
  saveOrUpdAppt (data) {
    return axios.post('emp/newAppointment/saveOrUpdAppt', data)
  },
  // 获取预约列表--包含上门服务
  getApptList (data) {
    return axios.post('emp/newAppointment/getApptList', data)
  },
  // 获取预约详情--包含上门服务
  getApptInfo (id) {
    return axios.get('emp/newAppointment/getApptInfo', { params: { id } })
  },
  // 更新预约状态--包含上门服务
  updateAppt (data) {
    return axios.post('emp/newAppointment/updateAppt', data)
  },
  // 预约获取用户可用套餐服务
  getSetMealCardSku (data) {
    return axios.get('emp/newAppointment/getSetMealCardSku', { params: data })
  }

}
