import axios from '@/utils/saas/axios'
import {
  F_CONTENT_TYPE
} from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 获取公司列表
  getCorpList (data = {}) {
    return axios.get(`firms/_search`, {
      params: Object.assign({
        name: '',
        valid: '',
        page: 1
      }, data)
    })
  },
  // 公司启用、禁用
  changeState (id, data) {
    return axios.put(`firms/${id}/_operator`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 新增公司信息
  newCompany (data) {
    return axios.post(`firms`, Object.assign({
      code: '',
      name: '',
      sap_km: '',
      zc_km: '',
      invoice_firm_name: '',
      tax_code: '',
      tax_point: '',
      invoice_address: '',
      invoice_phone: '',
      bank_name: '',
      bank_account: '',
      memo: '',
      order: 0
    }, data))
  },
  // 查询公司信息
  qyCompany (id) {
    return axios.get(`firms/${id}`)
  },
  // 修改公司信息
  editCompany (id, data) {
    return axios.put(`firms/${id}`, Object.assign({
      code: '',
      name: '',
      sap_km: '',
      zc_km: '',
      invoice_firm_name: '',
      tax_code: '',
      tax_point: '',
      invoice_address: '',
      invoice_phone: '',
      bank_name: '',
      bank_account: '',
      memo: '',
      order: 0
    }, data))
  },
  delete (id) {
    return axios.delete(`firms/${id}`)
  }
}
