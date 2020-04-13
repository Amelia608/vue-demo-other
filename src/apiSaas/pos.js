import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 获取POS机信息列表
  getPos (data) {
    return axios.get(`pos/_search`, {
      params: data
    })
  },
  // 新增POS机信息
  newPos (data) {
    return axios.post(`pos`, data)
  },
  // 修改POS机信息
  putPos (id, data) {
    return axios.put(`pos/${id}`, data)
  },
  // 删除POS机信息
  delPos (id) {
    return axios.delete(`pos/${id}`)
  },
  // 获取pPOS机信息
  posDetail (id) {
    return axios.get(`pos/${id}`)
  },
  // 获取所有有效的POS机类型
  PosTypeValid () {
    return axios.get(`pos/types`)
  },
  // 获取POS机类型信息列表
  getPosType () {
    return axios.get(`pos/types`)
  },
  // 新增POS机类型
  newPosType (data) {
    return axios.post(`pos/types`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 修改POS机类型
  putPosType (id, data) {
    return axios.put(`pos/types/${id}`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 修改POS机类型
  delPosType (id) {
    return axios.delete(`pos/types/${id}`)
  },

  // 启用/禁用POS机
  changePosValid (id, value) {
    return axios.put(`pos/${id}/${value ? '_forbid' : '_enable'}`)
  }
}
