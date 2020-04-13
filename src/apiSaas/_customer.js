import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'

export default {
  // 会员快捷修改积分
  upDateIntegral (id, val) {
    // GET customers/updateCustomerIntegral
    return axios.get(`customers/updateCustomerIntegral`, {
      params: { id: id, integralVal: val }
    })
  },
  // 客户详情
  getCustomerInfo (id) {
    return axios.get(`customers/getCustomerDetail`, { params: { id: id } })
  },
  // 客户列表
  getCustomerList (data = {}) {
    return axios.post(`customers/queryCustomer`, Object.assign({
      startPage: 1,
      pageSize: 10,
      storeId: '',
      keyword: '',
      levelId: ''
    }, data))
  },
  // 分配责任人
  setDutys (data = {}) {
    return axios.post(`customers/distributionDuty`, Object.assign({
      id: '',
      dutyIds: '',
      dutyName: ''
    }, data))
  },
  // 客户增
  addCustomer (data) {
    return axios.post(`customers/saveOrUpdateCustomer`, data)
  },
  // 客户标签增
  addCustomerTag (id, ids) {
    return axios.get(`customers/addCustomersCTags`, { params: { id: id, tagIds: ids } })
  },
  // 待服务预约
  queryNoAppointment (data) {
    return axios.post(`appointment/queryNoAppointment`, data)
  },
  // 交易记录
  customerBillList (data) {
    return axios.get(`consume/selectCustomerBill`, { params: data })
  },
  // 服务日志
  serveLog (data) {
    return axios.get(`cServLog/selectServLog`, { params: data })
  },
  // 会员标签增
  assCustomerTag (id, tagIds) {
    return axios.get(`customers/addCustomersCTags`, { params: { id: id, tagIds: tagIds } })
  },
  // 获取用户已购套餐列表
  getCSetmealCardListByCid (cid) {
    return axios.get('cSetmealCard/getCSetmealCardListByCid', { params: { cid } })
  },
  // 获取用户已购套餐列表详情
  getSetmealCardInfo (id) {
    return axios.get('cSetmealCard/getSetmealCardInfo', { params: { id } })
  },
  // 获取用户套餐信息列表
  getSetmealCardList (data) {
    return axios.get('cSetmealCard/getCSetmealCard/info/list', { params: data })
  },
  // 获取用户套餐数量
  getSetmealCardNum (data) {
    return axios.get(`cSetmealCard/getCSetmealCard/${data}/number`)
  },
  // 获取用户套餐基本信息
  getSetmealCardDetail (data) {
    return axios.get(`cSetmealCard/getCSetmealCard/${data}/basicInfo`)
  },
  // 获取用户套餐权益
  getSetmealCardRightsInfo (data) {
    return axios.get(`cSetmealCard/getCSetmealCard/${data}/rightsInfo`)
  },
  // 获取用户套餐使用明细
  getSetmealCardUseDetail (data) {
    return axios.get(`cSetmealCard/getCSetmealCard/${data}/useDetail`)
  },
  // 获取用户储值卡信息列表
  getCStoredValueCardList (data) {
    return axios.get('CStoredValueCard/info/list', { params: data })
  },
  // 获取用户储值卡数量
  getCStoredCardNum (data) {
    return axios.get(`getCStoredValueCard/${data}/number`)
  },
  // 获取用户储值卡基本信息
  getCStoredCardDetail (data) {
    return axios.get(`getCStoredValueCard/${data}/basicInfo`)
  },
  // 获取用户储值卡权益
  getCStoredCardRightsInfo (data) {
    return axios.get(`getCStoredValueCard/${data}/rightsInfo`)
  },
  // 获取用户储值卡使用明细
  getCStoredCardUseDetail (data) {
    return axios.get(`getCStoredValueCard/${data}/useDetail`)
  },
  // 获取用户--会员标签接口
  getCustomerTags (data) {
    return axios.post('emp/customerLabel/getList', data)
  },
  // 添加用户会员标签-接口
  addCustomersTags (data) {
    if (data.id) {
      return axios.post('emp/customerLabel/updateLabel', data)
    }
    let { id, ...params } = data
    return axios.post('emp/customerLabel/saveLabel', params)
  },
  // 删除用户会员标签--接口
  delCustomersTags (data) {
    return axios.get('emp/customerLabel/deleteLabel', { params: data })
  },
  // 获取客户余额及名下储值卡信息
  getCustomerBalanceInfo (data) {
    return axios.get(`customers/getbalance/${data}/info`)
  },
  // 添加客户会员标签
  addCustomerTags (data) {
    return axios.post('emp/customerLabel/saveClable', data)
  },
  // 客户标签上下移动
  updateMoveUpOrDown (data) {
    return axios.get(`emp/customerLabel/moveUpOrDown`, { params: data })
  },
  // 客户储值卡延期接口
  expirationTime (data) {
    return axios.post(`sStoredValueCard/update/expirationTime`, data)
  },
  // 客户礼品卡数量
  getCustomerGiftCardCount: customerId => axios('/customerGiftCard/getCount', { params: { customerId } }),
  // 肌肤日志列表
  skinDiaryList (data) {
    return axios.get(`skinDiary/skinDiaryList`, { params: data })
  },
  // 肌肤日志显示隐藏
  skinDiaryIsHide (data) {
    return axios.put(`skinDiary/hideSkinDiary`, data)
  },
  // 获取客户优惠券
  getCustomerCoupon: params => axios.get('saastkapi/coupon/getCustomerCoupons', { params }),
  // 查询优惠券详情
  getCouponInfo: id => axios.get('/saastkapi/coupon/getCouponInfo', { params: { id } })
}
