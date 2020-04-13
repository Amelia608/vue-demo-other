import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
/** ************产品管理  商品********************/
  getList: params => axios.get(`mall/product/listProduct`, { params }),
  getGoodsList: params => axios.post(`/emp/storedValueCard/getProducts`, params),
  getDetail: (sid, storeId) => axios.get(`mall/product/findProduct`, { params: { sid, storeId } }),
  newUpdateGoods: data => axios.post(`${data.product.sid ? 'mall/product/updateProduct' : 'mall/product/saveProduct'}`, data),
  downUp: data => axios.post(`${+data.type === 1 ? 'mall/product/upProduct' : 'mall/product/downProduct'}`, qs.stringify({ sid: data.sid }), F_CONTENT_TYPE),
  del: sid => axios.post(`mall/product/delProduct`, qs.stringify({ sid }), F_CONTENT_TYPE),
  getGoodsStores: productSid => axios.get(`mall/product/spuSuitedStores`, { params: { productSid } }), // 商品列表适用门店查询SPU
  getGoodsStoresSku: paroductSpecsId => axios.get(`mall/product/skuSuitedStores`, { params: { paroductSpecsId } }), // 适用门店中查询已授权门店 sku
  productSpecsStockList: params => axios.get(`mall/product/productSpecsStockList`, { params }),
  authorStore: data => axios.post(`mall/product/setStock`, data), // 授权门店
  upProductBatch: data => axios.post(`mall/product/upProductBatch?sids=${data.sids}`), // 批量上架
  downProductBatch: data => axios.post(`mall/product/downProductBatch?sids=${data.sids}`), // 批量下架
  setStockBatch: data => axios.post(`mall/product/setStockBatch`, data) // 批量授权
}
