// 日结
import axios from '@/utils/saas/axios'
export default {
  // 日结列表
  getDayClose (data = {}) {
    return axios.post(`dayClose/queryDayCloseAccount`, data)
  },
  // 新增日结
  newDayClose (data = {}) {
    return axios.post(`dayClose/submitDayClose`, data)
  },
  // // 展示日结数据
  // showDayClose (data = {}) {
  //   return axios.post(`dayClose/showDayCloseData`, data)
  // },
  // 批量结账
  confirmDayClose (data = {}) {
    return axios.post(`dayClose/confirmDayClose`, data)
  },
  // 取消日结
  cancelDayClose (id) {
    return axios.get(`dayClose/cancelDayClose`, { params: { id } })
  },
  // 查询日结详情
  getDayCloseInfo (dayCloseId) {
    return axios.get('dayClose/getDayCloseInfo', { params: dayCloseId })
  },
  // 删除日结
  delDayClose (id) {
    return axios.get('dayClose/delDayClose', { params: { id } })
  }
}
