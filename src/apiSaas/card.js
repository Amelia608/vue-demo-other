import axios from '@/utils/saas/axios'

export default {
  // 获取套餐列表
  getCards (params = {}) {
    return axios.post(
      `setmealCard/getSetmealCardListByParam`,
      Object.assign(
        {
          name: '',
          isUp: '',
          type: '',
          code: '',
          startPage: '1'
        },
        params
      )
    )
  },
  // 套餐批量上下架
  cardDownUp (data = {}) {
    return axios.post(`setmealCard/downUpSetmealCard`, data)
  },
  // 新建、修改套餐
  newUpdateCard (data = {}) {
    return axios.post(`setmealCard/saveOrUpdateSetmealCard`, data)
  },
  // 批量删除
  deleteCard (data = {}) {
    return axios.post(`setmealCard/deleteSetmealCard`, data)
  },
  // 获取套餐详情
  getCardInfo (id) {
    return axios.get(`setmealCard/getSetmealCardById`, { params: { id } })
  },
  // 根据条件查询sku
  getSku (data = {}) {
    return axios.post(`products/querySku`, data)
  },
  // 服务套餐门店授权
  productAuthor (data = {}) {
    return axios.post(`products/bachAuthorization`, data)
  },
  // 查询上线的服务--点单
  getProductsList (data) {
    return axios.get('products/getProducts/list', { params: data })
  },
  // 查询上线的服务sku和价格折扣--点单
  getProductsPriceSku (data) {
    return axios.get('products/getProducts/price', { params: data })
  },
  // 查询上线的卡项价格折扣
  getCardDiscount (data) {
    return axios.get('getCard/salesPrice', { params: data })
  }
}
