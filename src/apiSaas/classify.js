import axios from '@/utils/saas/axios'
import qs from 'qs'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'

export default {
  // 产品分类列表
  // product_list (data = {}) {
  //   return axios.get(`product/type/categorys`, { params: data })
  // },
  // 商品分类列表
  goodsTypes: params => axios.get(`mall/product/type/tree`, { params }),
  // 护理商品列表
  serveTypes: params => axios.get(`mall/care/products/classify/getList`, { params }),
  // 编辑商品分类
  editGoodsType: data => axios.post(`mall/product/type/updateType`, data),
  // 商品分类查询
  qyGoodsTypeById: params => axios.get(`mall/product/type/findById`, { params }),
  // 新增修改商品分类
  newAddGoodsType: (type, data) => axios.post(`${type === 'edit' ? 'mall/product/type/updateType' : 'mall/product/type/saveType'}`, data),
  // 删除
  delGoodsType: data => axios.post(`mall/product/type/deleteType`, qs.stringify(data), F_CONTENT_TYPE),
  // 增分类
  new_product (data = {}) {
    return axios.post(
      `product/category`,
      Object.assign(
        {
          type: '',
          name: '',
          order: '',
          pid: ''
        },
        data
      )
    )
  },
  // 删
  del_product (id) {
    return axios.delete(`product_category/${id}`)
  },
  // 查
  get_product (id) {
    return axios.get(`product_category/${id}`)
  },
  // 改
  update_product (id, data) {
    return axios.put(`product_category/${id}`, data)
  }
}
