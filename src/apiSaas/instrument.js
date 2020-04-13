import axios from '@/utils/saas/axios'
import qs from 'qs'
import {
  F_CONTENT_TYPE
} from '@/utils/saas/consts'

export default {
  // 仪器列表
  instrumentslist (data) {
    return axios.get('mall/instrument/getList', {
      params: data
    })
  },
  // 有效的仪器类型列表
  types_valid () {
    return axios.get('mall/instrumentType/getList')
  },
  // 仪器增
  newinstruments (data) {
    return axios.post('instruments', qs.stringify(data), F_CONTENT_TYPE)
  },
  // 仪器查
  getinstruments (id) {
    return axios.get(`instruments/${id}`)
  },
  // 仪器改
  updateinstruments (data) {
    return axios.post(`mall/instrument/save/update`, data)
  },
  // 仪器删除
  delete (data) {
    return axios.delete(`mall/instrument/delete`, {
      data
    })
  },
  // 仪器启用 停用
  enabled (data) {
    return axios.post(`mall/instrument/enableDisable`, data)
  },
  // 仪器调店
  _exchange (data) {
    return axios.put(`instruments/_exchange`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 仪器类型列表
  gettypes () {
    return axios.get('mall/instrumentType/getList')
  },

  // 添加、修改仪器类型
  saveTypes (data) {
    return axios.post(`/mall/instrumentType/save/update`, data)
  },
  // 删除仪器类型
  deltypes (id) {
    return axios.delete(`mall/instrument/${id}/delete`)
  },
  // 仪器排班列表
  instrumentsPartlist (data) {
    return axios.get('mac_schedule/_search', {
      params: data
    })
  },
  // 仪器费用列表
  instrumentsMoneylist (data) {
    return axios.get('mac_freight/_search', {
      params: data
    })
  },
  // 仪器增
  addInstrumentPart (data) {
    return axios.post('mac/_schedule', data)
  },
  // 添加运费
  addInstrumentMoney (id, data) {
    return axios.post(`mac_schedule/${id}/freight`, data)
  },
  // 店内确认
  confirmMoney (id, data) {
    return axios.put(`mac_freight/${id}/confirm_state`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 店内复核
  review (id, data) {
    return axios.put(`mac_freight/${id}/check_state`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 删除仪器费用
  delMoney (id) {
    return axios.delete(`mac_freight/${id}`)
  },
  // 删除仪器费用
  delPart (id) {
    return axios.delete(`mac_schedule/${id}`)
  }
}
