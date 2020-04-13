import axios from '@/utils/saas/axios'
import qs from 'qs'
import {
  F_CONTENT_TYPE
} from '@/utils/saas/consts'

// TODO 接口分类。同类别的接口放置在一起
export default {
  // 获取日结详情
  getSettlementInfo (data) {
    return axios.get(`trade_day_settlements`, {
      params: data
    })
  },
  // 获取日结列表
  getSettlementList (data) {
    return axios.get(`trade_day_settlements/_search`, {
      params: data
    })
  },
  // 获取日结详情
  setSettlementInfo (data) {
    return axios.post(`trade_day_settlements`, data)
  },
  // 取消/撤销结算
  cancelSettlementInfo (id, data) {
    return axios.put(`trade_day_settlements/${id}/cancel`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 点单充值开卡之前进行日结校验
  getSettlementSta (data) {
    return axios.get(`trade_day_settlements/_check`, {
      params: data
    })
  },
  // 批量结账
  closeSettlement (ids) {
    return axios.put(`trade_day_settlements/${ids}/close_accounts`)
  },
  // 删除结算
  delSettlement (id, data) {
    return axios.delete(`trade_day_settlements/${id}/delete`, data)
  }
  // empBoard (id, data) {
  //   return axios.get(`employees/${id}/reservations/panel`, {
  //     params: data
  //   })
  // },
  // // 员工看板
  // getBizTime (id) {
  //   return axios.get(`stores/${id}/shift_span`)
  // }
}
