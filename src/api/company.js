import request from '@/utils/request'

/* 企业信息 (company-info-controller) */

// 查看企业信息
export const auditCheck = (params = {}) => request({ url: '/company/audit_check', params })

// 查询企业审核列表
export const auditList = (data = {}) => request({
  url: '/company/audit_list',
  method: 'post',
  data
})

// 审核通过
export const auditPass = (data = {}) => request({
  url: '/company/audit_pass',
  method: 'post',
  data
})

// 拒绝原因字典
export const reasonEnum = (params = {}) => request({ url: '/company/reason_enum', params })

// 保存企业信息
export const save = (data = {}) => request({
  url: '/company/save',
  method: 'post',
  data
})

// 查询企业信息
export const status = (params = {}) => request({ url: '/company/status', params })

// 审核不通过
export const auditNotPass = (data = {}) => request({
  url: '/company/audit_notpass',
  method: 'post',
  data
})

// 企业信息图片上传
export const uploadImg = (data = {}) => request({
  url: '/company/uploadimg',
  method: 'post',
  data
})

// 修改资料
export const editInfo = (data = {}) => request({
  url: '/company/edit_info',
  method: 'post',
  data
})

// 开启五五拓客
export const auditStart = (data = {}) => request({
  url: '/company/audit_start',
  method: 'post',
  data
})
