import axios from '@/utils/saas/axios'

export default {
  // 门店看板
  storeBoard (id, data) {
    return axios.get(`stores/${id}/reservations/panel`, {
      params: data
    })
  },
  // 员工看板
  empBoard (id, data) {
    return axios.get(`employees/${id}/reservations/panel`, {
      params: data
    })
  },
  // ```  get  查询门店班次表
  stores_shift_span (storeId) {
    return axios.get(`shifts/stores/shift_span`, {
      params: { storeId }
    })
  },
  //  门店预约看板
  stores_board (data) {
    return axios.get(`appointment/stores/board`, {
      params: data
    })
  }
}
