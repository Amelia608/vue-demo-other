import axios from '@/utils/saas/axios'
export default {
  // 根据sid查询详情
  getSelfTakeBySid (sid) {
    return axios.get(`mall/order/getSelfTake/${sid}`)
  },
  // 根据提货码查询详情
  getSelfTakeBySelfTakeNo (selfTakeNo) {
    return axios.get(`mall/order/getSelfTake`, { params: { selfTakeNo } })
  },
  // 自提列表查询
  getSelfTakeList (data) {
    return axios.post('mall/order/getSelfTakeList', data)
  },
  // 自提验证
  saveSelfTake (data) {
    return axios.post('mall/order/saveSelfTake', data)
  }
}
