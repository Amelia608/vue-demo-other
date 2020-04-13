import request from '@/utils/request'
import { downloadExcel } from '@/utils'

export function list (data) {
  return request({
    url: '/video/list',
    data
  }).then(res => res)
}

export function upLine (data) {
  return request({
    url: '/video/up_line',
    method: 'post',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/video/info',
    data
  }).then(res => res)
}

export function save (data) {
  return request({ method: 'post', url: `/video/${data.id ? 'update' : 'save'}`, data }).then(res => res)
}

export function report (data) {
  return request({ method: 'post', url: '/video/report', data }).then(res => res)
}

export function reportExport (params = {}, filename) {
  return request({
    url: '/video/report/export',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

export function commentList (data) {
  return request({ url: '/video/comment_list', data }).then(res => res)
}

export function commentOperate (data) {
  return request({ url: '/video/comment_operate', method: 'post', data }).then(res => res)
}

export function replyList (data) {
  return request({ url: '/video/reply_list', data }).then(res => res)
}
