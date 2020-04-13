import axios from '@/utils/saas/axios'

import {
  Message
} from 'element-ui'

const errorHandler = ({
  response: {
    data
  }
}) => {
  if (data && data.msg) {
    Message.error(` ${data.msg}`)
  }
  return data
}

export default {
  // 获取合作商家列表
  list (data = {}) {
    return axios.get(`cooperavite_business`, { params: data })
  },
  // 合作商家类型
  cooType () {
    return axios.get(`cooperavite/business/types`, {})
  },
  // 添加 商品
  addGoods (data = {}) {
    return axios.post(`goods`, data).catch(errorHandler)
  },
  // 修改 商品
  editGoods (data = {}) {
    return axios.put(`goods`, data).catch(errorHandler)
  },
  // 添加 上架
  addShelf (data = {}) {
    return axios.post(`goods/_shelf`, data).catch(errorHandler)
  }
}
