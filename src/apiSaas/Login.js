import axios from '@/utils/saas/axios'

export default {
  // 登录
  login (data = {}) {
    return axios.post(`user/login`, data)
  },
  // 注册
  reg (data) {
    return axios.post(`user/register`, data)
  },
  // 获取图形验证码
  getVerify () {
    return axios.get(`user/getVerify`)
  },
  // 获取短信验证码
  getCode (phone) {
    return axios.get(`user/sendVerificationCode`, { params: phone })
  },
  // 获取删除店铺的短信验证码
  getDeleteCode (phone) {
    return axios.get(`user/sendDelShopVerificationCode`, { params: phone })
  },
  // 忘记密码
  forgetPwd (data) {
    return axios.post(`user/resetPassword`, data)
  },
  // 修改密码
  updatePwd (data) {
    return axios.post(`user/updatePassword`, data)
  },
  // 查询用户的店铺
  getSelectShop (data) {
    return axios.post(`shop/getSelectShop`, data)
  },
  // 创建更新店铺
  newUpdateShop (data = {}) {
    return axios.post(`shop/saveOrUpdateShop`, data)
  },
  // 删除店铺
  deleteShop (data = {}) {
    return axios.post(`shop/delShop`, data)
  },
  // 查询店铺分类
  getShopType () {
    return axios.get(`shopType/getShopTypeAll`)
  },
  // 选中店铺
  chooseStore (id) {
    return axios.get(`shop/selectShop`, { params: { shopId: id } })
  },
  // 查询可创建店铺数量
  createShopCheck () {
    return axios.get(`shop/createShopCheck`)
  },
  // 获取工作台数据
  getWorkBenchData (storeId = '') {
    return axios.get('shop/getWorkBenchData', { params: { storeId } })
  },
  // 获取公告列表
  getNotice () {
    return axios.get('notice/getNotice/list', { params: { page: 1, pageSize: 1 } })
  },
  // 更新公告
  updateNotice (data) {
    return axios.post('notice/updateNotice', data)
  }
}
