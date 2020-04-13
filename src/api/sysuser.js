import request from '@/utils/request'

// 员工账户列表
export function getSysuserList (params = {}) {
  return request({ url: '/sysuser/list', params }).then(res => res)
}

// 删除员工
export function deleteSysuser (params = {}) {
  return request({ url: '/sysuser/delete', method: 'delete', params }).then(res => res)
}

// 新增、编辑员工
export function addSysuser (params = {}) {
  return request({
    url: `/sysuser/${params.id ? 'update' : 'add'}`,
    method: 'post',
    data: {
      ...params,
      type: 2 // 1草动商城 2五五拓客
    }
  }).then(res => res)
}

// 角色详情
export function getSysuserInfo (params = {}) {
  return request({ url: '/sysuser/info', params }).then(res => res)
}

// 修改密码
export function updatepwd (params = {}) {
  return request({ url: `/sysuser/updatepwd`, method: 'post', data: params }).then(res => res)
}

// 修改开启状态
export function updatestatus (params = {}) {
  return request({ url: `/sysuser/updatestatus`, method: 'post', data: params }).then(res => res)
}
