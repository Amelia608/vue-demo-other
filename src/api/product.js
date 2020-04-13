import { downloadExcel } from '@/utils'
import request, { apiGenerate, addOrUpdate } from '@/utils/request'

export default {
  ...apiGenerate({
    // 商品信息
    getList: { method: 'post', path: 'list' },
    getDetail: { path: 'info' },
    // add: { path: 'add', methoffffd: 'post' },
    // update: { path: 'update', method: 'post' },
    getQrCode: { path: 'qrcode' },
    batchUpdateProduct: { method: 'post', path: 'updatebatchproduct' },

    // 商品分类
    getCategoryList: { path: 'category/list' },
    delCategory: { method: 'delete', path: 'category/delete' },
    // addCategory: { method: 'post', path: 'category/add' },
    // updateCategory: { method: 'post', path: 'category/update' },

    // 商品标签
    getLabelList: { path: 'label/list' },
    getLabelDetail: { path: 'label/info' },
    addLabel: { method: 'post', path: 'label/add' },
    updateLabel: { method: 'post', path: 'label/update' },
    delLabel: { method: 'delete', path: 'label/delete' }
  }, '/product/'),

  // 扩展api ===
  // 新增或更新商品
  addOrUpdateProduct: (data) => addOrUpdate('/product', data),

  // 新增或更新分类
  addOrUpdateCategory: (data) => addOrUpdate('/product/category', data),

  // 商品导出
  productExport (params = {}, filename) {
    return request({
      url: '/product/exportproduct',
      method: 'get',
      headers: {
        'Content-type': 'application/json'
      },
      responseType: 'arraybuffer',
      params
    }).then((data) => downloadExcel(data, filename))
  },

  // 优惠劵根据商品id批量查询商品信息
  productCouponlist (params = {}) {
    return request({
      url: '/product/productCouponlist',
      method: 'post',
      data: params
    }).then((data) => data)
  },

  // 获取商品列表
  storeproductList (params = {}) {
    return request({ url: '/storeproduct/list', params }).then((data) => data)
  },

  // 获取规格列表
  attributeList () {
    return request({ url: '/attribute/list' }).then((data) => data)
  },

  // 新增规格列表
  attributeAdd (params = {}) {
    return request({ url: '/attribute/add', method: 'post', data: params }).then((data) => data)
  },

  // 批量选择商品
  addstoreproduct (params = {}) {
    return request({ url: '/product/addstoreproduct', method: 'post', data: params }).then((data) => data)
  },
  // 区域设置会员价
  // 批量
  batchproductdiscount (params = {}) {
    return request({ url: '/productdiscount/querybatchproductdiscount', params }).then((data) => data)
  },
  // 单商品
  productdiscount (params = {}) {
    return request({ url: '/productdiscount/info', params }).then((data) => data)
  },
  // set会员价
  setproductdiscount (params = {}) {
    return request({ url: '/productdiscount/addbatch', method: 'post', data: params }).then((data) => data)
  },

  // 区域、门店获取商品详情
  storeProductInfo ({ id }) {
    return request({ url: `/storeproduct/info?id=${id}` }).then((data) => data)
  },

  // 区域、门店保存商品详情
  saveStoreProductInfo (params = {}) {
    return request({ url: '/storeproduct/edit', method: 'post', data: params }).then((data) => data)
  },

  // 门店上下架
  storeProductUpdown (params = {}) {
    return request({ url: '/storeproduct/updown', method: 'post', data: params }).then((data) => data)
  },

  // 门店上下架
  exportProduct ({ params, filename }) {
    return request({
      url: `/storeproduct/export_storeproduct`,
      params,
      responseType: 'arraybuffer'
    }).then((data) => downloadExcel(data, filename))
  },

  // 区域、门店批量上下架
  updatebatchproduct (params = {}) {
    return request({ url: '/storeproduct/updatebatchproduct', method: 'post', data: params }).then((data) => data)
  }

}
