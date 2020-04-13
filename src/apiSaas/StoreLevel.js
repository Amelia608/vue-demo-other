import axios from '@/utils/saas/axios'
import {
  F_CONTENT_TYPE
} from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 获取门店等级列表
  getList (data = {}) {
    return axios.get(`levels/_search`, {
      params: Object.assign({
        name: '',
        valid: '',
        page_size: 10,
        page: 1
      }, data)
    })
  },
  // 门店等级启用、禁用
  changeState (id, data) {
    return axios.put(`leaves/${id}/_operator`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 新增门店等级
  newArea (data) {
    return axios.post(`levels`, Object.assign({
      name: '',
      memo: '',
      order: 0
    }, data))
  },
  // 删除门店等级
  delStoreLevel (id) {
    return axios.delete(`leaves/${id}`)
  },
  // 修改公司信息
  editArea (id, data) {
    return axios.put(`levels/${id}`, Object.assign({
      name: '',
      memo: '',
      order: 0
    }, data))
  }
}
