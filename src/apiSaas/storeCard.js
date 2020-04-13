import axios from '@/utils/saas/axios'

export default {
  // 储值卡列表
  storeCardList (data) {
    return axios.post(`emp/storedValueCard/getStoCardList`, data)
  },
  // 添加，编辑储值卡
  addStoreCard (data) {
    const url = data.storedValueCard.id ? 'emp/storedValueCard/updStoCard' : 'emp/storedValueCard/saveStoredValue'
    return axios.post(url, data)
  },
  // 储值卡类型列表
  getStoreCardTypeList (data) {
    return axios.post(`emp/storedValueCard/cardTypeList`, data)
  },
  // 添加储值卡类型
  addStoreCardType (data) {
    if (data.id) {
      return axios.post('emp/storedValueCard/updStoCardType', data)
    }
    return axios.post('emp/storedValueCard/saveStoCardType', {
      name: data.name
    })
  },
  // 删除储值卡类型
  delStoreCardType (id) {
    return axios.get('emp/storedValueCard/delStoValueCardType', { params: { id } })
  },
  // 储值卡详情
  getDetail (id) {
    return axios.get(`emp/storedValueCard/storValueCardDetail`, { params: { id } })
  },
  // 删除储值卡
  delStoreCard (id) {
    return axios.get(`emp/storedValueCard/delStoCard`, { params: { id } })
  },
  // 储值卡上下架
  downOrUp (data) {
    return axios.get('emp/storedValueCard/upperAndLowerRacks', { params: data })
  },
  // 获取储值卡修改记录
  getHistoryList (data) {
    return axios.post('emp/storedValueCard/getHistoryList', data)
  },
  // 获取储值卡历史记录详情
  getHistoryDetail (id) {
    return axios.get('emp/storedValueCard/getHistoryDetails', { params: { id } })
  },
  // 储值卡交易记录
  getTransactionRecords: id => axios.get(`emp/storedValueCard/transactionRecord`, { params: { id } }),
  // 储值卡门店授权
  storeCardAuthor: (ids, stores) => axios.get(`emp/storedValueCard/authorizedStores`, { params: { ids, stores } })
}
