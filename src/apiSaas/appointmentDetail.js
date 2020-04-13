import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  /** *****预约详情api*********/
  // 查询预约详情
  qyReservations (id) {
    return axios.get(`reservations/${id}`)
  },
  // 获取预约取消原因预设常量
  getCancelReason () {
    return axios.get(`reservation/cancel_reason`)
  },
  // 取消预约
  putCanceReason (id, data) {
    return axios.put(`reservations/${id}/_cancel`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 预约确认 确认到店
  reserConfirm (id) {
    return axios.put(`reservations/${id}/_confirm`)
  },
  /** *****预约列表api********/
  reserList (data) {
    return axios.get(`reservations`, {
      params: Object.assign({
        keyword: '',
        dept_id: '',
        store_id: '',
        level_id: '',
        technician_id: '',
        state: '',
        begin_time: '',
        end_time: '',
        page: 1,
        page_size: 10,
        member_type: ''
      }, data)
    })
  }
}
