import axios from '@/utils/saas/axios'
// import qs from 'qs'

export default {
  // 获取上架的商品列表
  getShoppingList (data) {
    return axios.get('/mall/product/productListForPcSelect', { params: data })
  },
  // 获取上架的商品价格及规格
  getShoppingSkuPrice (data) {
    return axios.get('/mall/product/getPrice', { params: data })
  },
  // 获取商品一级分类
  getShoppingTypeTopList () {
    return axios.get('/mall/product/type/typeTopList')
  },
  // 获取服务分类下产品-开单时
  getServeProductList (data = {}) {
    return axios.post(`products/selectService`, data)
  },
  // 新增/修改/挂单消费单
  saveOrUpdateConsumeBill (data) {
    return axios.post('consume/saveOrUpdateConsumeBill', data)
  },
  // 新增开卡单
  addSetmealCardBill (data) {
    return axios.post('consume/addSetmealCardBill', data)
  },
  // 获取挂单list
  getHangUpList (storeId) {
    return axios.get('consume/getHangUpList', { params: { storeId } })
  },
  // 获取消费单详情/取单
  getConsumeBillInfo (consumeBillId) {
    return axios.get('consume/getConsumeBillInfo', { params: { consumeBillId } })
  },
  // 现金支付
  cashPay (data) {
    return axios.post('pay/cashPay', data)
  },
  // pos机支付
  posPay (data) {
    return axios.post('pay/posPay', data)
  },
  // 微信支付
  wxChatPay (data) {
    return axios.post('pay/weiXinPay', data)
  },
  // 支付页面保存
  confirmPay (orderId) {
    return axios.get('pay/confirmPay', { params: { orderId } })
  },
  // 新增充值单
  addRechargeBill (data) {
    return axios.post('consume/addRechargeBill', data)
  },
  // 余额支付
  banlancePay (data) {
    return axios.post('pay/banlancePay', data)
  },
  // 获取支付方式
  getPayWays () {
    return axios.get('shop/getPayWays')
  },
  // 根据shopid获取是否开通五五开代收
  selectWuWuKaiPayWay () {
    return axios.get('shop/selectWuWuKaiPayWay')
  },
  // 获取设置开通的支付方式
  getPayWaySet () {
    return axios.get('get/shopPayWay/isOpenList')
  },
  // 五五开支付
  getTradeQrcode (data) {
    return axios.post('pay/getTradeQrcode', data)
  },
  // 申请开通五五开代收
  requestWuWuKaiPayWay (payType) {
    return axios.get('shop/requestWuWuKaiPayWay', { params: { payType } })
  },
  // 申请关闭五五开代收
  closeWuWuKaiPayWay (id, payType) {
    return axios.get('shop/closeWuWuKaiPayWay', { params: { id, payType } })
  },
  // 扫码枪支付
  scanPay (data) {
    return axios.post('pay/scanPay', data)
  },
  // 储值卡支付
  storeCardPay (data) {
    return axios.post('pay/valueCard/payment', data)
  },
  // 礼品卡支付
  giftCardPay (data) {
    return axios.post('pay/giftCard/payment', data)
  },
  // 自定义支付
  customPay (data) {
    return axios.post('customPay', data)
  },
  // 支付设置-微信
  saveWxPayKey: data => axios.post(`/mall/api/saveWxPayKey`, data),
  // 查询微信设置信息
  getWxPayInfo: () => axios.get(`/mall/api/getWxPayInfo`),
  // 根据选择的产品获取客户可抵扣的积分
  getIntegralVal: data => axios.post(`/customers/getIntegralVal/info`, data)
}
