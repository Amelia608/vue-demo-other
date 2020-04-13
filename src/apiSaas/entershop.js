import axios from '@/utils/saas/axios'
import qs from 'qs'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'

/** ****进店*******/
// 查询进店客户列表
export default {
  enterCustomers (data) {
    return axios.get(`registrations/_search`, {
      params: Object.assign({
        state: '',
        page_num: 1,
        page_size: 1000
      }, data)
    })
  },
  // 进店列表header信息查询
  storeInfo () {
    return axios.get(`registrations/in_stores_custnum_wpnum_empnum`)
  },
  // 门店床位列表查询当前门店占用情况列表
  getBeds (data) {
    return axios.get(`workpositions/_list_current_occupy_info`, {
      params: Object.assign({
        store_id: '',
        page_num: 1,
        state: '',
        page_size: 10000000
      }, data)
    })
  },
  // 进店_选择床位
  chooseBed (data) {
    let obj = Object.assign({
      registration_id: '',
      workposition_id: '',
      workposition_name: ''
    }, data)
    return axios.put(`registrations/_select_workposition`, qs.stringify(obj), F_CONTENT_TYPE)
  },
  // 出房
  getOut (id) {
    return axios.put(`registrations/_out_workposition`, qs.stringify({
      registration_id: id
    }), F_CONTENT_TYPE)
  }
}
