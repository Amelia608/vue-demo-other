import axios from '@/utils/saas/axios'
import qs from 'qs'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'

export default {
  // 客户列表
  customers_search (data = {}) {
    return axios.post(
      `customers/_search`,
      Object.assign(
        {
          dep_id: '', // "部门id",
          store: '', // "门店id,或者门店名称",
          keyword: '', // "客户编号/姓名/手机",
          member_type: '', // "是否是会员:Y:是 N:否",
          lifecycle_code: '', // "生命周期未进店WJD、体验客TYK、正常客ZCK、休眠客XMK、流失客LSK、封存客FCK",
          grow_value_start: '', // "客户等级成长值起始",
          grow_value_end: '', // "客户等级成长值截至",
          employee_type: '', // "是否是内部员工，1是员工，2不是员工",
          belong: '', // "归属1员工组，2门店、3公司",
          technician_id: '', // "美容师id ",
          group_id: '', // "客户经理id",
          wx_state: '', // "是否绑定微信1:是 2:否",
          level_above: '', // "及以上(Y:是 N:否)"
          page: '1',
          page_size: '10'
        },
        data
      )
    )
  },
  // 标记内部员工
  sign_emp (id, data = {}) {
    return axios.put(
      `customers/${id}/sign_emp`,
      qs.stringify(data),
      F_CONTENT_TYPE
    )
  },
  // 解封客户
  state_enabled (id) {
    return axios.put(`customers/${id}/state_enabled`)
  },
  // 删除客户
  del_customer (id) {
    return axios.delete(`customers/${id}`)
  },

  // 增一级分类
  Newtop (type, data) {
    return axios.post(`product_category/top/${type}`, data)
  },
  // 删
  Delclassify (id, data = {}) {
    return axios.delete(`product_category/${id}`, data)
  },
  // 查
  getclassify (id, data = {}) {
    return axios.get(`product_category/${id}`, {
      params: data
    })
  },
  // 改
  updateclassify (id, data) {
    return axios.put(`product_category/${id}`, data)
  }
}
