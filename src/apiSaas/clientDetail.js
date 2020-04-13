import axios from '@/utils/saas/axios'
import qs from 'qs'

const F_CONTENT_TYPE = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export default {
  getInfo (id) {
    return axios.get(`customers/${id}/main_info,extend_info,tags`)
  },
  // 、、 获取客户标签
  getTag (id) {
    return axios.get(`customers/tags/${id}`)
  },
  // 编辑客户标签 可批量
  editTag (data, query) {
    let ids = typeof data === 'string' ? data : data.join(',')
    return axios.post(`customers/batch_tags`, {
      tags: query,
      ids: ids
    })
  },
  // 获取客户详情
  getDetail (id, storeId) {
    let obj = {
      customer_id: id,
      store_id: storeId
    }
    return axios.get(`customer/dedailsAndAccount`, {
      params: obj
    })
  },
  // 获取客户账户信息
  getAccountDetail (id) {
    return axios.get(`account/${id}/_detailAccount`)
  },
  // 获取客户账户变动列表
  getAccountHistory (id, query) {
    return axios.get(`account/${id}/_history`, {
      params: query
    })
  },
  // 获取客户积分
  getPointCount (id) {
    return axios.get(`customer/pointCount`, { params: { customer_id: id } })
  },
  // 获取客户积分变动列表
  getPointHistory (data) {
    let obj = Object.assign(
      {
        customer_id: '',
        type: '',
        page: '',
        page_size: ''
      },
      data
    )
    return axios.get(`customer/point_historys`, {
      params: obj
    })
  },
  // 备忘列表
  // 查询客户的护理日志(重要备忘)
  user_nursing (customerId, data = {}) {
    return axios.get(`customers/${customerId}/nursingDiary`, { params: data })
  },

  // 添加备忘
  addMemo (query) {
    return axios.post(`customers/memo `, qs.stringify(query), F_CONTENT_TYPE)
  },

  // 删除备忘
  delMemo (id) {
    return axios.delete(`/v1/customers/memo/${id}`)
  },

  getArchives (id) {
    return axios.get(`customers/${id}/archives`)
  },

  // 投诉客
  putComplaint (id, val) {
    return axios.put(
      `customers/${id}/complaint`,
      qs.stringify({
        opt: val
      }),
      F_CONTENT_TYPE
    )
  },

  // 手机
  putPhone (id, val) {
    return axios.put(
      `customers/${id}/phone_invalid`,
      qs.stringify({
        opt: val
      }),
      F_CONTENT_TYPE
    )
  },

  // 获取 预约记录
  getReservationRecord (id, query) {
    return axios.get(`customers/${id}/reservation_record`, { params: query })
  },

  // 进店记录
  getRegistrations (id, query) {
    return axios.get(`${id}/registrations`, { params: query })
  },

  // 消费记录
  getShopingRecord (customerId, query) {
    return axios.get(`customer/${customerId}/consumeOrderList`, { params: query })
  },

  // 分配历史
  getAllocationHistory (id, query) {
    return axios.get(`customers/${id}/assign_history`, {
      params: query
    })
  },

  // 人脸照片
  customerPhoto (query) {
    return axios.get(`customers/customerPhotoList`, { params: query })
  },
  // 添加客户照片
  // POST /v1/customers/customerPhoto
  add_customerPhoto (data = {}) {
    return axios.post(`customers/customerPhoto`, data)
  },
  // 删除照片
  // /v1/customers/customerPhoto/{id}
  del_customerPhoto (id, data = {}) {
    return axios.delete(`customers/customerPhoto/${id}`, data)
  },

  // 变动日志列表
  change_nursing (query) {
    return axios.get(`getCustomerChangeOperationLogList`, { params: query })
  },
  // 获取账户信息
  getCustomerInfo (id) {
    return axios.get(`account/${id}`)
  },
  // 护理日志是否置顶
  // POST /v1/nursingdiary/{id}/top
  isTop (id, data = {}) {
    return axios.post(`nursingdiary/${id}/top`, data)
  }
}
