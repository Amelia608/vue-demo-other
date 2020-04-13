import axios from '@/utils/saas/axios'
export default {
  /* saas和拓客融合页面，新增的接口 */
  // 新建用户角色
  saveSysUser (params = {}) {
    return axios.post(`saastkapi/sysuser/add`, {
      ...params,
      type: 2 // 1草动商城 2五五拓客
    })
  },
  // 获取用户角色详情
  getSysUserDetail (id = '') {
    return axios.get(`saastkapi/sysuser/${id}/getInfo`)
  },
  // 获取用户角色权限树
  getSysUserRoleTree () {
    return axios.get(`saastkapi/role/permlist`)
  },
  // 删除用户账号
  deleUserById (data) {
    return axios.delete(`saastkapi/sysuser/list`, { params: data })
  },
  // 首页数据统计
  getDashboadData () {
    return axios.get('mall/order/index/statistics/data')
  },
  // 首页有效预约统计
  getDashboadAppoinData (params) {
    return axios.get('/mall/order/index/statistics/typeData', { params })
  },
  // 删除门店
  deleteStore (data) {
    return axios.get('saastkapi/tkStore/deleteStore', { params: data })
  }
}
