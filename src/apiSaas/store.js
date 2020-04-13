import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'
export default {
  /** ******门店相关********/
  // 查询门店列表
  getStores (data = {}) {
    return axios.post(
      `saastkapi/tkStore/getStoreList`,
      Object.assign(
        {
          name: '',
          areaId: '',
          startPage: 1
        },
        data
      )
    )
    // return axios.post(
    //   `store/getStoreListByParam`,
    //   Object.assign(
    //     {
    //       name: '',
    //       areaId: '',
    //       startPage: 1
    //     },
    //     data
    //   )
    // )
  },
  // 根据所属区域查询门店--下拉框形式
  getareaOrStores (data) {
    return axios.get(`saastkapi/tkStore/getareaOrStores`, { params: data })
  },
  // 根据所属区域、门店类型查询门店
  getStoreByType (data) {
    return axios.get(`saastkapi/store/getstoreList`, { params: data })
  },
  // 获取所属区域
  getAreaList () {
    return axios.get('saastkapi/store/getAreaList')
  },
  // 获取门店新建权限列表
  getNewPermissionsList (data) {
    return axios.get('store/newPermissions/getList', { params: data })
  },
  // 门店新建权限授权门店接口
  authorizationNewPermissions (data) {
    return axios.post(`store/authorization`, data)
  },
  // 查询门店树
  getStoreTree (data) {
    return axios.post(`saastkapi/tkStore/getAreaStoreList`, data)
  },
  // 根据storeid获取门店列表
  getStoreList () {
    return axios.get(`store/getStoreListByShopId`)
  },
  // 查询可创建门店数量
  createStoreCheck () {
    return axios.get(`shop/createStoreCheck`)
  },
  // 切换门店
  checkStore (storeId) {
    return axios.get(`store/selectStore`, { params: { storeId } })
  },
  // 获取已授权的门店
  queryAuthorizationStore (serviceId) {
    return axios.get(`products/queryAuthorizationStore`, { params: { serviceId } })
  },
  // 添加修改门店
  newUpdateStore (data = {}) {
    return axios.post(`store/saveOrUpateStore`, data)
  },
  // 获取门店信息
  getStoreInfo (id) {
    return axios.get(`/store/getStoreInfo`, { params: { id } })
  },
  // 删除门店
  deleteStore (id) {
    return axios.get(`store/deleteStore`, { params: { id } })
  },
  /** 门店等级相关 */
  // 门店等级列表
  storeGradeList () {
    return axios.get(`storeGrade/getList`)
  },
  // 门店等级编辑
  storeGradeEdit (data) {
    return axios.post(`storeGrade/saveAndUpdate`, data)
  },
  // 门店等级删除
  storeGradeDelete (data) {
    return axios.post(`storeGrade/delStoreGrade`, data)
  },
  // 门店等级上移
  storeGradeUp (data) {
    return axios.post(`storeGrade/moveUpOrDown`, data)
  },
  /** ******员工相关********/
  // 员工列表
  getEmployees (data = {}) {
    return axios.post(`employee/queryEmployee`, data)
  },
  // 添加、编辑员工
  newUpdateEmployees (data = {}) {
    return axios.post(`employee/saveOrUpdateEmployee`, data)
  },
  // 删除员工
  deleteEmployees (employeeId) {
    return axios.get(`employee/delEmployeeInfo`, { params: { employeeId } })
  },
  // 获取员工信息
  getEmployeeInfo (employeeId) {
    return axios.get(`employee/getEmployeeInfo`, { params: { employeeId } })
  },

  /** ******职位管理相关********/
  // 获取职位列表
  getPosList () {
    return axios.get(`post/getPostList`)
  },
  // 添加修改职位
  newUpdatePost (data = {}) {
    return axios.post(`post/saveOrUpdatePost`, data)
  },
  // 删除职位
  deletePost (id) {
    return axios.get(`post/deletePost`, { params: { id } })
  },
  // 获取职位详情
  getPostInfo (id) {
    return axios.get(`post/getPostInfo`, { params: { id } })
  },

  /** ******角色管理相关********/
  // 获取角色列表
  getRoles () {
    return axios.get(`role/getRoleAll`)
  },
  // 添加编辑角色
  newUpdateRole (data = {}) {
    return axios.post(`role/saveOrUpdateRole`, data)
  },
  // 获取角色详情
  getRoleInfo (id) {
    return axios.get(`role/getRoleInfo`, { params: { id } })
  },
  // 删除角色
  deleteRole (roleId) {
    return axios.get(`role/delRoleById`, { params: { roleId } })
  },
  // 获取功能授权列表
  getSelectResource (roleId) {
    return axios.get(`role/getSelectResource`, { params: { roleId } })
  },
  // 设置功能授权
  setRoleResource (data) {
    return axios.post('role/setRoleResource', data)
  },
  // 根据角色类型获取角色
  getRoleByType (data) {
    return axios.post('role/getRoleByType', data)
  },
  // 根据职位类型获取职位
  getPostByType (type) {
    return axios.get('post/getPostByType', { params: { type } })
  },
  // 门店导入
  importStore (data) {
    return axios.post(`saastkapi/tkStore/uploadStore`, qs.stringify(data), F_CONTENT_TYPE)
  },
  updateStoreAccount (data) {
    return axios.post('/openapi/store/update_account_id', data)
  }
}
