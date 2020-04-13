import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'
// 分销
export default {
  // 分销商列表
  getDistributors: data => axios.post(`/mall/cddb/getDistributors`, data),
  settingDistribution: data => axios.post(`/mall/cddb/saveDistriSettings`, data),
  getDistribution: () => axios.get(`/mall/cddb/getDistriSettings`),
  // 分销设置
  updateState: data => axios.post(`/mall/cddb/updateDistributorState`, data),
  getDetail: id => axios.post(`/mall/cddb/viewdistributor`, { id }),
  // 佣金明细
  getcommissionlist: data => axios.post(`/mall/cddb/orderlist`, data),
  // 下级列表
  subList: duserId => axios.post(`/mall/cddb/subDistributors`, { duserId }),
  rejectDistributor: data => axios.post(`/mall/cddb/rejectDistributor`, data)
}
