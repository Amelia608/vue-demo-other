import request from '@/utils/request'
import { downloadExcel } from '@/utils'

// 编辑信息保存
export function edit (params) {
  return request({ url: '/order/edit', method: 'post', data: params })
}

// 编辑信息
export function editInfo (params) {
  return request({ url: '/order/edit_info', params }).then(res => res.data)
}

// 编辑信息
export function orderInfo (params) {
  return request({ url: '/order/info', params }).then(res => res.data)
}

// 订单导出
export function orderExport (data = {}, filename) {
  return request({
    url: '/order/export',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    data
  }).then((data) => downloadExcel(data, filename))
}

// 员工佣金导出
export function exportEmpBrokerage (data = {}, filename) {
  return request({
    url: '/order/export_emp_brokerage',
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    data
  }).then((data) => downloadExcel(data, filename))
}

// 订单列表
export function getList (data = {}) {
  return request({ url: '/order/list', method: 'post', data })
}

// 订单取消
export function cancel (data) {
  return request({ url: '/order/cancel', method: 'post', data })
}

// 发货
export function deliver (data) {
  return request({ url: '/order/deliver', method: 'post', data })
}

// 发货数据展示
export function deliverPageInfo (data) {
  return request({ url: '/order/order/deliver_page_info', method: 'get', data })
}

// 售后订单列表
export function getAfterSaleList (data = {}) {
  return request({ url: '/orderreturn/list', method: 'post', data })
}

// 售后订单详情
export function getAfterSaleInfo (params = {}) {
  return request({ url: '/orderreturn/returndetail', params }).then(res => res.data)
}

// 售后订单导出
export function afterSaleOrderExport (params = {}, filename) {
  return request({
    url: '/orderreturn/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

// 售后订单详情
export function getAfterSaleConsultlist (params = {}) {
  return request({ url: '/orderreturn/consultlist', params })
}

// 获取最新售后协商记录详情
export function getConsultDetail (params = {}) {
  return request({ url: '/orderreturn/consultdetail', params })
}

// 后台审核订单
export function check (data = {}) {
  return request({ url: '/orderreturn/check', method: 'post', data })
}

// 获取订单对应的快递信息
export function getExpressRecords (params = {}) {
  return request({ url: '/orderexpress/express_records', params })
}

export function bindOrderEmp (data = {}) {
  return request({ url: '/order/bind_order_emp', method: 'post', data })
}

// 赠品售后
export const giftRefund = (data = {}) => request({ url: '/orderreturn/gift_refund', method: 'post', data })
