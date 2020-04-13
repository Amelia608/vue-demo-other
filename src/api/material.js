import { apiGenerate } from '@/utils/request'

// export function getList (params = {}) {
//   return request({
//     url: '/product/material/list',
//     params: {
//       pageSize: 10,
//       ...params
//     }
//   }).then(res => res)
// }
//
// export function deleteItem (params) {
//   return request({ url: '/product/material/delete', method: 'delete', params }).then(res => res)
// }

export default apiGenerate({
  getList: { path: 'list' },
  getListUnRelated: { path: 'list_unrelated' },
  add: { method: 'post', path: 'add' },
  del: { method: 'delete', path: 'delete' },
  unbind: { method: 'delete', path: 'unbind' }
}, '/product/material/')
