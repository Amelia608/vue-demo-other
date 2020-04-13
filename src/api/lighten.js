import request from '@/utils/request'
import { downloadExcel } from '@/utils'

// 活动设置
export const edit = (data) => request({ url: '/lighten/edit', method: 'post', data })

// 活动设置详情
export const infoPc = (params) => request({ url: '/lighten/info_pc', params })

// 留言列表
export const commentList = (params) => request({ url: '/lighten/message_list_pc', params })

// 隐藏留言
export const hideMessage = (data) => request({ url: '/lighten/hide_message', method: 'post', data })

// 发送留言
export const sendMessage = (data) => request({ url: '/lighten/send_message', method: 'post', data })

// 场景切换
export const cutScene = (data) => request({ url: '/lighten/cut_scene', method: 'post', data })

// 分享列表
export const shareList = (params) => request({ url: '/lighten/share_list', params })

// 分享列表导出
export const shareListExport = (data = {}, filename) => request({
  url: '/export_share_list',
  method: 'get',
  headers: { 'Content-type': 'application/json' },
  responseType: 'arraybuffer',
  data
}).then((data) => downloadExcel(data, filename))
