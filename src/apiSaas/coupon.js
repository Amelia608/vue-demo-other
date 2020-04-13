import axios from '@/utils/saas/axios'

export default {
  // 编辑优惠券
  saveAndUpdateCoupon (data) {
    return axios.post(`saastkapi/coupon/saveAndUpdateCoupon`, data)
  },
  // 获取优惠券详情
  getCouponInfo (data) {
    return axios.get(`saastkapi/coupon/getCouponInfo`, { params: data })
  },
  // 获取商品列表
  getProducts (data = {}) {
    return axios.post(`saastkapi/coupon/getProducts`, data)
  },
  // 获取商品标签
  getProLabels () {
    return axios.get(`saastkapi/coupon/getProLabels`)
  },
  // 获取商品分类
  getProCateGorys () {
    return axios.get(`saastkapi/coupon/getProCateGorys`)
  },
  // 获取储值卡分类
  getStoreValueType () {
    return axios.get(`couponPro/getStoreValueType`)
  },
  // 获取储值卡列表
  getStoreValueCardList (data) {
    return axios.post(`couponPro/getStoreValueCardList`, data)
  },
  // 获取套卡列表
  getSetmealCardList (data) {
    return axios.post(`couponPro/getSetmealCardList`, data)
  },
  // 获取管理项目标签
  getPskuTags () {
    return axios.get(`couponPro/getPskuTags`)
  },
  // 获取管理项目分类
  getPskuCategorys () {
    return axios.get(`couponPro/getPskuCategorys`)
  },
  // 获取管理项目列表
  getPskuList (data) {
    return axios.post(`couponPro/getPskuList`, data)
  },
  // 获取礼品卡分类
  getGiftCardClassify () {
    return axios.get(`couponPro/getGiftCardClassify`)
  },
  // 获取礼品卡列表
  getGiftCards (data) {
    return axios.post(`couponPro/getGiftCards`, data)
  },
  // 根据客户id和产品id选择用户可用优惠券
  getCustomerProductCoupons (data) {
    return axios.post(`saastkapi/coupon/getCustomerProductCoupons`, data)
  },
  // 点单--添加优惠券列表
  getCustomerAddCouponsList (data) {
    return axios.post('saastkapi/coupons/getList', data)
  },
  // 点单--客户添加优惠券
  saveCustomerAddCoupons (data) {
    return axios.post('saastkapi/coupon/customer/save', data)
  }
}
