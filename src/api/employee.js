import request from '@/utils/request'

// 员工列表
export function getList (params) {
  return request({
    url: '/user/listemp',
    params: Object.assign({
      pageNum: 1,
      pageSize: 10
    }, params)
  }).then(res => res)
}

// 员工账号
export function accountList (params) {
  return request({
    url: '/withdraw/account_list',
    params: Object.assign({
      pageNum: 1,
      pageSize: 10
    }, params)
  }).then(res => {
    (res.data.dataList || []).forEach(v => {
      v.userName = v.userName || '-'
      v.storeName = v.storeName || '-'
      v.userPhone = v.userPhone || '-'
      v.allCommission = v.allCommission || '-'
      v.cashAmount = v.cashAmount || '-'
      v.frozenAmount = v.frozenAmount || '-'
      v.settlementAmount = v.settlementAmount || '-'
      v.withdrawAmount = v.withdrawAmount || '-'
    })
    return res
  })
}

// 添加员工、修改员工
export function add (params) {
  return request({
    url: params.id ? '/user/update' : '/user/add',
    method: 'post',
    data: params
  }).then(res => res)
}

// 门店列表
export function getStoresList (params) {
  return request({
    url: '/store/storelist',
    params
  }).then(res => res)
}
