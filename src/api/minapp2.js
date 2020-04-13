import request from '@/utils/request'

// 授权列表
export function getList (params = {}) {
  return request({ url: '/minapp/auth/list', params }).then(res => res)
}

// 授权详情
export function getInfo (params = {}) {
  return request({ url: '/minapp/auth/info', params }).then(res => res)
}

// 保存授权设置
export function save (params = {}) {
  return request({ url: `/minapp/auth/update`, method: 'post', data: params }).then(res => res)
}

// 授权链接地址
export function getPreauth (params = {}) {
  return request({ url: '/minapp/preauth', params }).then(res => res)
}

// 保存模板
export function saveTemplate (params = {}) {
  return request({
    url: `/home/${params.id || params.isUsed === 1 ? 'update' : 'add'}`,
    method: 'post',
    data: params
  }).then(res => res)
}

// 获取模板信息
export function getTemplate (params = {}) {
  return request({ url: `/home/get_template` }).then(res => res)
}

// 首页列表
export function getHomeTemplate (params = {}) {
  return request({ url: `/home/pg_list`, method: 'post', data: params }).then(res => res)
}

// 删除模板
export function delTemplate (params = {}) {
  return request({ url: `/home/delete`, method: 'post', data: params }).then(res => res)
}

// 编辑回显模板
export function infoTemplate (id) {
  return request({ url: `home/info?id=${id}` }).then(res => {
    const list = res.data.content ? JSON.parse(res.data.content) : []
    list.forEach(v => {
      // 轮播组件-数据兼容
      if (v.type === 3 && v.data instanceof Array) {
        const data = v.data
        v.data = {
          height: 400,
          list: data
        }
      }
    })
    res.data.content = JSON.stringify(list)
    return res
  })
}
