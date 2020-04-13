import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'
// apiurl:
// http://pre.zhimeiplus.com/sosoapi-web/auth/apidoc/preview.htm?docId=37#!/%E7%A4%BC%E5%93%81%E5%8D%A1%E6%A8%A1%E5%9D%97/post_coupon_save_giftCard_applyStore
export default {
  // 获取礼品卡列表
  getList: params => axios.get('/coupon/getGiftCardList', { params }),
  // 删除
  delItem: id => axios.delete(`/coupon/delete/${id}/giftCard`),
  // 新增,编辑礼品卡
  newUpdate: data => axios.post('/coupon/addGiftCard', data),
  // 详情
  getInfo: id => axios.get(`/coupon/getGiftCard/${id}/info`),
  // 分类列表
  getClassifyList: params => axios.get('/coupon/get/giftCard/classifyList', { params }),
  // 添加/编辑分类
  newUpdateClassify: data => axios.post('/coupon/saveOrUpdate/giftCard/Classify', data),
  delClassify: sid => axios.delete(`/coupon/delete/giftCard/${sid}/classify`),
  // 分类详情
  getClassifyDetail: sid => axios.get(`/coupon/get/giftCard/classify/${sid}/info`),
  // 礼品卡适用门店
  applyStore: data => axios.post('/coupon/save/giftCard/applyStore', data),
  // 上下架
  changeState: id => axios.get(`/coupon/${id}/giftCard/isUp`),
  // 根据ids查询服务列表
  qyServiceList: params => axios.get('/products/getProducts/skuList', { params }),
  // 根据ids查询商品
  qyGoodsList: params => axios.get('/mall/product/getProductList/bySpec', { params }),
  // 根据ids查询套卡
  qyCardList: params => axios.get('/setmealCard/getSetmealCard/list', { params }),
  // 获取客户礼品卡列表http://pre.zhimeiplus.com/sosoapi-web/auth/apidoc/preview.htm?docId=37#!/%E5%AE%A2%E6%88%B7%E7%A4%BC%E5%93%81%E5%8D%A1%E6%A8%A1%E5%9D%97/get_customerGiftCard_getList
  customerGiftCardList: params => axios.get('/customerGiftCard/getList', { params }),
  // 获取客户礼品卡详情
  customerGiftCardDetail: id => axios.get(`/customerGiftCard/${id}/getList`),
  // 客户礼品卡延期
  customerGiftCardDelay: data => axios.post('/customerGiftCard/delay', data),
  // 开卡-获取门店可开礼品卡
  getStroeGiftCards: params => axios.get('/mall/gift/getStroeGiftCards', { params }),
  // 商品、服务（项目）分类根据ids查询
  getProductCategory: (type, params) => axios.get(`${type === 1 ? '/mall/product/cates/getList' : '/products/cates/getList'}`, { params }),
  // 客户礼品卡数量
  getCustomerGiftCardCount: customerId => axios('/customerGiftCard/getCount', { params: { customerId } }),
  // 客户礼品卡消耗明细
  getUseHistoryList: params => axios.get('/customerGiftCard/getUseHistoryList', { params })
}
