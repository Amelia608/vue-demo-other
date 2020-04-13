import axios from '@/utils/saas/axios'

export default {
  // getList (data) {
  //   return axios.get(`schedule/_search,technicians`, {
  //     params: data
  //   })
  // },
  // add (id, data) {
  //   return axios.post(`stores/${id}/schedule`, data)
  // },
  // edit (id, data) {
  //   return axios.put(`stores/${id}/schedule`, data)
  // }
  // 排班管理查询
  getDutyRosterList (data) {
    return axios.get('group/getDutyRosterList', { params: data })
  },
  // 设置员工班次
  setShifts (data) {
    return axios.post('shifts/setShifts', data)
  },
  // 复制班次
  copyShifts (data) {
    return axios.post('shifts/copyShifts', data)
  }
}
