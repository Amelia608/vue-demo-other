import request from '@/utils/request'

export function list (data) {
  return request({
    url: '/article/list',
    data
  }).then(res => res)
}

export function info (data) {
  return request({
    url: '/article/article_info',
    data
  }).then(res => res)
}

export function save (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    method: 'post',
    url: '/article/add',
    data
  }).then(res => res)
}

export function update (data) {
  if (!data.id) {
    delete data.id
  }
  return request({
    method: 'post',
    url: '/article/update',
    data
  }).then(res => res)
}

export function deleteStop (data) {
  return request({
    method: 'post',
    url: '/article/delete',
    data
  }).then(res => res)
}

// 爬虫文章
export function reptile (data) {
  return request({
    url: '/article/reptile_article',
    data
  }).then(res => {
    res.data.title = res.data.title.substring(0, 30)
    return res
  })
}
