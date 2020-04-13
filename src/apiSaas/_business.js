import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'

export default {
  // 查询护理日志
  gwtNursingList (data = {}) {
    // GET customers/updateCustomerIntegral
    return axios.post(`cServLog/queryServLog`, data)
  },
  // 护理日志详情
  getNursingInfo (consumeBillId) {
    return axios.get(`cServLog/getCServLogInfo`, { params: { consumeBillId } })
  },
  // 修改护理日志
  saveNursing (data) {
    return axios.post(`cServLog/saveOrUpdateCServLog`, Object.assign({
      id: '',
      servLog: '',
      photosUrl: '',
      isTop: '',
      cId: ''
    }, data))
  },
  // 删除护理日志
  delServLog (logId) {
    return axios.get('cServLog/delServLog', { params: { logId } })
  },
  // 获取客户标签列表
  getCustomerLabelList (data) {
    return axios.get('cServLog/customer/label', { params: data })
  }
}
