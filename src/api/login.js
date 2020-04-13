import request from '@/utils/request'
import { setToken } from '@/utils/auth'

export function login (params) {
  return request({
    url: '/sysuser/login',
    method: 'post',
    data: {
      mobile: params.username,
      password: params.password,
      code: params.imageCode,
      uuid: params.uuid,
      brandType: params.brandType,
      type: params.type
    }
  }).then(async res1 => {
    setToken(res1.data.token)
    const res2 = await request({ url: '/distribution/getDistriSettings', method: 'post' })
    res1.data._dtype = res2.data ? res2.data.dtype : 0
    return res1
  })
}

export function getInfo (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout () {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function register (params) {
  return request({ url: '/sysuser/register', method: 'post', data: params }).then(res => res)
}

export function forgotpassword (params) {
  return request({ url: '/sysuser/forgotpassword', method: 'post', data: params }).then(res => res)
}

export function authcode (params) {
  return request({ url: '/sysuser/authcode', method: 'post', data: params }).then(res => res)
}

// 通过token获取用户信息
export function getSysUser (params = {}) {
  return request({ url: '/sysuser/getsysuser', params }).then(async res1 => {
    const res2 = await request({ url: '/distribution/getDistriSettings', method: 'post' })
    res1.data._dtype = res2.data ? res2.data.dtype : 0
    return res1
  })
}

export function getSmsCode (params = {}) {
  return request({
    url: '/sysuser/smscode',
    method: 'post',
    data: {
      ...params,
      type: 2 // 1草动商城 2五五拓客
    }
  }).then(res => res)
}
