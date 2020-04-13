import axios from '@/utils/saas/axios'

// import qs from 'qs'
// import {
//   F_CONTENT_TYPE
// } from '@/utils/saas/consts'

export default {
  // 获取生命周期信息列表
  lifeCycleList () {
    return axios.get(`customers/lifecycle/_search`)
  },
  // 查询生命周期信息
  qyLifeCycle (id) {
    return axios.get(`customers/lifecycle/${id}`)
  },
  // 更新客户生命周期
  putLifeCycle (id, data) {
    return axios.put(
      `customers/lifecycle/${id}`,
      Object.assign(
        {
          min_recharge: '',
          max_recharge: '',
          min_balance: '',
          max_balance: '',
          min_days: '',
          max_days: ''
        },
        data
      )
    )
  },
  // 客户等级列表
  customerLevels () {
    return axios.get(`customers/levels/_search`)
  },
  // 客户等级详情
  customerLevelsInfo (id) {
    return axios.get(`customers/levels/${id}`)
  },
  // 删除客户等级
  removeLevel (id) {
    return axios.delete(`customers/levels/${id}`)
  },
  // 客户等级添加编辑
  handleCustomerLevels (data) {
    const id = data.id || ''
    const path = `customers/levels${id ? `/${id}` : ''}`
    const type = id ? 'put' : 'post'
    return axios[type](
      path,
      Object.assign(
        {
          name: '',
          grow_value: '',
          max_balance: '',
          mj_money_limit: '',
          mx_money_limit: '',
          dx_times_limit: '',
          other_memo: '',
          memo: ''
        },
        data
      )
    )
  },
  // 查询生命周期 /v1/customers/lifecycle/selectList
  getLifecycle (params) {
    return axios.get(`sysConfig/selectSysConfig`, { params })
  },
  // 成长值规则列表
  getGrowRules () {
    return axios.get(`growth_rules`)
  },
  putGrowRules (id, data) {
    return axios.put(
      `growth_rules/${id}`,
      Object.assign(
        {
          id: '',
          amounts: '',
          grow_values: ''
        },
        data
      )
    )
  },
  /** ************取消预约原因*****************/
  // 查询取消预约原因列表
  getReasons (data) {
    return axios.get(`reason_definitions`, {
      params: Object.assign({ category: '1' }, data)
    })
  },
  // 添加、编辑取消预约原因
  handleReason (id, data) {
    const path = `reason_definitions${id ? `/${id}` : ''}`
    const type = id ? 'put' : 'post'
    return axios[type](
      path,
      Object.assign({ name: '', remark: '', sort: 0, category: '1' }, data)
    )
  },
  // 删除取消预约
  delReason (id) {
    return axios.delete(`reason_definitions/${id}`)
  },
  // 根据传参选择性获取设置积分、成长值、全局设置
  getSysConfig (data) {
    return axios.get(`sysConfig/selectSysConfig`, { params: data })
  },
  setSysConfig (data) {
    return axios.post(`sysConfig/saveSysConfig`, data)
  }
}
