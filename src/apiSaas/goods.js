import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'

export default {
  // * * ** ** ** ** ** ** ** ** ** ** ** ** ** ** * new
  // 添加商品
  goods_add (data = {}) {
    return axios.post(`goods`, data)
  },
  // 编辑商品  更新商品
  goods_update (data = {}) {
    let path = data.spuId ? `updateGoods` : `goods`
    return axios.post(path, data)
  },
  // 商品批量删除
  goods_delete (data) {
    let obj = {}
    obj.ids = typeof data === 'string' ? data : data.join(',')
    return axios.delete(`goods`, { data: obj })
  },
  // 获取商品基本信息
  get_info (id) {
    let obj = {
      spuId: id
    }
    return axios.get(`goods`, {
      params: obj
    })
  },
  // 商品批量上下架
  change_state (type, ids) {
    let obj = {
      type: type
    }
    obj.ids = typeof ids === 'string' ? ids : ids.join(',')
    return axios.post(`goods/_grounding`, obj)
  },
  // 商品列表
  goods_list (data = {}) {
    let obj = Object.assign(
      {
        page: '1',
        page_size: '10',
        categoryId: '',
        serviceType: '',
        keyWords: '',
        way: '',
        state: ''
      },
      data
    )
    return axios.get(`goodsList`, {
      params: obj
    })
  },
  // 商品sku列表  套餐添加商品的列表
  goods_sku_list (data = {}) {
    let obj = Object.assign({
      page: 1,
      pageSize: 10,
      name: '',
      categoryId: '',
      serviceType: ''
    }, data)
    return axios.get(`goods/skuList`, {
      params: obj
    })
  }
  // * ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *
  //* *
}
