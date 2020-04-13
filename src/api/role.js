import request from '@/utils/request'

// 角色列表不分页
export function getRolelist () {
  return request({ url: '/role/rolelist' }).then(res => res)
}

// 角色列表分页
export function getRolelist2 (params = {}) {
  return request({ url: '/role/list', params }).then(res => res)
}

// 删除角色
export function deleteRole (params = {}) {
  return request({ url: '/role/delete', method: 'delete', params }).then(res => res)
}

// 新增、编辑角色
export function addRole (params = {}) {
  return request({ url: `/role/${params.id ? 'update' : 'add'}`, method: 'post', data: params }).then(res => res)
}

// 角色详情
export function getRoleInfo (params = {}) {
  return request({ url: '/role/info', params }).then(res => res)
}

// 权限列表
export function getPermlist () {
  return request({ url: '/role/permlist', method: 'get' }).then(res => res)
}
