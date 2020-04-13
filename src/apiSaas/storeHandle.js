import axios from '@/utils/saas/axios'

export default {
  // 获取所有有效的公司信息（获取所属公司下拉列表）
  getCompany () {
    return axios.get(`valid_firms`)
  },
  // 获取所有有效的门店等级（门店等级下拉列表）
  getStore () {
    return axios.get(`valid_levels`)
  },

  // 获取所有有效的区域列表
  getAreas () {
    return axios.get(`valid_areas`)
  },
  // 获取所有门店经营性质类型
  getBizType () {
    return axios.get(`stores/biz_types`)
  },
  // 门店来源类型
  getBelong () {
    return axios.get(`stores/belong_types`)
  },
  // 新增门店
  newStore (data) {
    return axios.post(
      `stores`,
      Object.assign(
        {
          code: '',
          name: '',
          phone: '',
          dept_id: '',
          dept_name: '',
          firm_id: '',
          firm_name: '',
          area_id: '',
          area_name: '',
          level_id: '',
          level_name: '',
          province_id: '',
          province_name: '',
          city_id: '',
          city_name: '',
          district_id: '',
          district_name: '',
          address: '',
          longitude: '',
          latitude: '',
          biz_type_id: '',
          biz_type_name: '',
          attacher_id: '',
          attacher_name: '',
          biz_time: '',
          open_time: '',
          close_time: '',
          order_above_count: '',
          ncust_above_count: '',
          memo: '',
          org_id: '',
          org_code: ''
        },
        data
      )
    )
  },
  // 搜索组织结构编码
  qyOrg (data) {
    return axios.get(`organizations/_search`, {
      params: Object.assign(
        {
          code: '',
          type: '3'
        },
        data
      )
    })
  },
  // 根据搜索组织结构编码查询所属部门
  qySubOrg (id) {
    return axios.get(`organizations/${id}`)
  },
  // 编辑新增拓展资料
  putSotreEx (id, data) {
    return axios.put(`stores/${id}/extend_info`, data)
  },
  // 查询门店详情
  qyStore (id) {
    return axios.get(`stores/${id}/base_info,extend_info,tags`)
  },
  // 获取门店基本信息
  requestStore (id) {
    return axios.get(`stores/${id}`)
  },
  // 查询公司信息
  qyCompany (id) {
    return axios.get(`firms/${id}`)
  },
  // 门店来源类型
  storeSource () {
    return axios.get(`stores/source_types`)
  },
  // 门店物业权属类型
  StorePro () {
    return axios.get(`stores/property_types`)
  },
  // 修改门店基本信息
  putBasic (id, data) {
    return axios.put(`stores/${id}/base_info`, data)
  },
  // 获取标签列表
  getTags (data) {
    return axios.get(`tags`, {
      params: data
    })
  },
  // 修改门店标签
  putStoreTag (id, data) {
    return axios.put(`stores/${id}/tags`, data)
  },
  // 修改公共客户密码
  resert_pwd (id, data) {
    return axios.post(`customers/${id}/resert_pwd`, data)
  },
  // 生成价格
  addPrice (type, id, data) {
    return axios.post(`${type}/products/${id}/price_policys`, data)
  },
  // 获取门店价格
  getPrice (type, id, params) {
    return axios.get(`${type}/products/${id}/price_policys`, {
      params
    })
  },
  // 删除产品价格
  price_delete (id, data) {
    // v1/price_policys/{id}
    return axios.delete(`price_policys/${id}`, data)
  },
  // 更新预约设置
  putResSetting (data) {
    return axios.put(`reservation_setting`, data)
  },
  // 查询预约设置
  getResSetting () {
    return axios.get(`reservation_setting`)
  }
}
