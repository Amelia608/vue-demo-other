import axios from '@/utils/saas/axios'
// import qs from 'qs'

export default {
  // 获取评价设置
  getInfo () {
    return axios.get(`comment/get/storeCommentSet/info`)
  },
  // 保存修改评价设置
  newUpdateInfo (data) {
    return axios.post('comment/set/storeComment', data)
  },
  // 获取评价列表接口
  getList (data) {
    return axios.get('comment/item/get/list', { params: data })
  },
  // 获取评价详情接口
  getDetail (data) {
    return axios.get('comment/item/get/info', { params: data })
  },
  // 商家回复
  replyShop (data) {
    return axios.get('comment/item/reply/info', { params: data })
  },
  // 删除评价
  deleteInfo (data) {
    return axios.delete('comment/item/delete/info', { params: data })
  }
}
