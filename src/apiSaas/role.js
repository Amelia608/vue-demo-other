import axios from '@/utils/saas/axios'

export default {
  // 角色列表
  roleList (data) {
    return axios.get(`role_list`, {
      params: data
    })
  },
  // 批量设置用户角色
  assign_users_to_role (data = {}) {
    return axios.post(`_assign_users_to_role`, data)
  },
  // 添加 角色
  add (data) {
    return axios.post(`roles`, data)
  },
  // 编辑 角色
  edit (data) {
    return axios.put(`roles`, data)
  },
  // 删除 角色
  delete (id) {
    return axios.delete(`roles/?id=${id}`)
  },
  //   getRolesUser(id) {
  //     return axios.get(`roles/users/?role_id=${id} `)
  //   },
  employeeList (data = {}) {
    return axios.get(`employeeList`, data)
  },
  // 获取权限树
  menu_privilege_tree () {
    return axios.get(`menu_privilege_tree`)
  },
  // 获取角色的权限
  get_permissions (id) {
    return axios.get(`role/${id}/menu_ids,privilege_ids`)
  },
  // 授权角色
  assign_resources_privileges (data) {
    return axios.put(`role/_assign_resources_privileges`, data)
  },
  // 批量设置用户的角色
  setUsersToRole (data) {
    return axios.post(`_assign_users_to_role`, data)
  },
  // 当前登录用户的基本信息与菜单按钮权限聚合
  getLoginUserInfo (params) {
    return axios.get(`login_user_info,menu_privilege`, { params })
  },
  // 查询角色的数据权限
  get_data_privailege (data) {
    return axios.get(`data_privailege`, { params: data })
  },
  // 更新角色数据的数据权限
  put_data_privailege (data) {
    return axios.put(`data_privailege`, data)
  }
}
