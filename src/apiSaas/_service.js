import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'

export default {
  // 获取服务列表
  getServeList (data = {}) {
    return axios.post(
      `products/getProductsListByParam`,
      Object.assign(
        {
          psName: '',
          cateId: '',
          isUp: '',
          pageSize: 10,
          startPage: 1
        },
        data
      )
    )
  },
  // 新增/编辑服务
  saveOrUpdateProduct (data = {}) {
    return axios.post(`products/saveOrUpadateProducts`, data)
  },
  getServeInfo (id) {
    return axios.get(
      `products/getProductInfoById`,
      {
        params: { productId: id }
      })
  },
  // 批量删除服务
  delProduct (data = []) {
    return axios.post(`products/deleteProducts`, data)
  },
  // 批量上下架
  setProductDown (data = []) {
    return axios.post(`products/updateIfUp`, data)
  }

}
