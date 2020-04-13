import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/comment/list',
    data
  }).then(res => {
    res.data.dataList.forEach(v => {
      v.imgUrlArr = (v.imgUrl || '').split(',')
      // v.starArr = [...new Array(v.star)]
      v.starArr = [...new Array(5)]
    })
    return res
  })
}

export function update (data) {
  return request({
    method: 'POST',
    url: '/comment/update',
    data
  }).then(res => res)
}
