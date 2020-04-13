import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'
export default {
  // 消费业绩列表
  getConsumeAchievement (data) {
    return axios.get(`consume_achievement/_search`, { params: data })
  },
  // 收款业绩列表
  getReceiptAchievement (data) {
    return axios.get(`receipt_achievement/_search`, { params: data })
  },
  // 开卡奖励列表
  getCardAchievements (data) {
    return axios.post(`card_achievements/_search`, data)
  },
  // 获取消费业绩详情
  getConsumeAchievementInfo (id) {
    return axios.get(`consume_achievement/${id}`)
  },
  // 保存消费业绩
  saveConsumeAchievementInfo (data) {
    return axios.post(`consume_achievement/_assign`, data)
  },

  // 获取收款业绩详情
  getReceiptAchievementInfo (data) {
    return axios.get(`receipt_achievement,receipt_achievement_item`, {
      params: data
    })
  },
  // 保存收款业绩
  saveReceiptAchievementInfo (data) {
    return axios.post(`receipt_achievement/allocationReceiptAchievement`, data)
  },

  // 可分配收款业绩的员工查询
  getReceiptAchievementcanEmployee (data) {
    return axios.get(`receipt_achievement/canAllocationEmployee/_search`, {
      params: data
    })
  },

  // 预约列表
  getReservations (data) {
    return axios.get(`reservations`, { params: data })
  },

  // 预约详情
  getReservationsInfo (id) {
    return axios.get(`reservations/${id}`)
  },

  // 开卡列表
  getCardOrders (data) {
    return axios.get(`card_orders/_system_search`, { params: data })
  },

  // 开卡详情
  getCardOrdersInfo (id) {
    return axios.get(`card_orders/${id}`)
  },

  // 消费单列表
  getConsumeOrder (data) {
    return axios.post(`consumeOrder/_system_search`, data)
  },

  // 消费单详情
  getConsumeOrderInfo (id) {
    return axios.get(`consumeOrder/${id}`)
  },

  // 进店登记列表
  getRegistrations (data) {
    return axios.get(`registrations/list/_search`, { params: data })
  },
  /** ******退款管理api**********/
  // 查询退款列表
  getRefundList (data) {
    let params = {
      firmInfoId: '',
      deptId: '',
      storeId: '',
      custKeyWord: '',
      refundState: '',
      refundDateStart: '',
      refundDateEnd: '',
      pageNum: 1,
      pageSize: 10
    }
    return axios.get(`refund/_search`, { params: Object.assign(params, data) })
  },
  // 撤销退款
  refundBackOut (id) {
    return axios.post(`refund/${id}/_backout`)
  },
  // 退款审核
  refundAudit (id) {
    return axios.get(`refund/audit/${id}`)
  },
  // 退款业绩追溯查询
  refundAchievements (data) {
    return axios.get(`receipt_achievement/_retrospect`, { params: data })
  },
  // 立即追溯
  refundTrackBack (id) {
    return axios.post(`refund/${id}/_retrospect`)
  },
  // 添加退款
  newRefund (data) {
    return axios.post(`refund`, data)
  },
  // 退款银行列表
  refundBanks (data) {
    return axios.get(`refundBank/_search`, {
      params: Object.assign(
        {
          firmId: '',
          accountName: '',
          spaSubject: '',
          valid: '0',
          page: 1,
          page_size: 10
        },
        data
      )
    })
  },
  // 新增退款银行
  addFunBank (data) {
    return axios.post(`refundBank`, data)
  },
  // 修改退款银行
  updateFunBank (data) {
    return axios.post(`refundBank/update`, data)
  },
  handleFunBank (data) {
    const url = data.id ? `refundBank/update` : 'refundBank'
    return axios.post(url, data)
  },
  // 撤销消费单
  backoutOrder (id) {
    let obj = {
      order_id: id
    }
    return axios.post(
      'consumeOrder/_backout',
      qs.stringify(obj),
      F_CONTENT_TYPE
    )
  },
  //
  // 关账列表
  // /v1/
  closeAccountList (data) {
    return axios.get(`tradeCloseAccountList`, { params: data })
  },
  deleteAccountList (id) {
    return axios.delete(`tradeCloseAccount/${id}`)
  },
  addAccountList (data = {}) {
    return axios.post(`tradeCloseAccount`, data)
  }
}
