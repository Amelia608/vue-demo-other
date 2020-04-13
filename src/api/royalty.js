import request from '@/utils/request'
import { downloadExcel } from '@/utils'

export function list () {
  return request({
    url: '/commission/list'
  }).then(res => res)
}

export function save (params) {
  return request({
    url: '/commission/save',
    method: 'post',
    data: params
  }).then(res => res)
}

// 设置提现设置
export const withdrawSetup = (data) => request({ url: '/withdraw/setup', method: 'post', data })

// 获取提现设置
export const getWithdrawSetupInfo = () => request({ url: '/withdraw/setup_info' })

// 提现明细
export const getWithdrawList = (params) => request({ url: '/withdraw/list', params })

// 提现发放、驳回
export const withdrawOperate = (data) => request({ url: '/withdraw/operate', method: 'post', data })

// 员工账户导出
export function withdrawExport (params = {}, filename) {
  return request({
    url: '/withdraw/export',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}

// 提现明细导出
export function withdrawExportWithdrawFund (params = {}, filename) {
  return request({
    url: '/withdraw/export_withdraw_fund',
    method: 'get',
    headers: {
      'Content-type': 'application/json'
    },
    responseType: 'arraybuffer',
    params
  }).then((data) => downloadExcel(data, filename))
}
