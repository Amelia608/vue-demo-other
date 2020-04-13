import request from '@/utils/request'

export function getList (pcode = 0) {
  return request({
    url: '/region/list',
    params: { pcode }
  }).then(res => res)
}

export function getList2 () {
  return request({ url: '/region/treelist' }).then(res => res)
}
