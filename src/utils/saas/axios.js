import axios from 'axios'
// import Cookies from 'js-cookie'
// import {
//   clearCookies
// } from '@/utils/saas/common'
// import {
//   COOKIES_KEYS
// } from '@/utils/saas/consts'

// import router from '@/router/index'
import {
  Message,
  MessageBox
} from 'element-ui'
import store from '../../store'
import { getToken } from '@/utils/auth'
// console.log(process.env.VUE_APP_SECRET)
// console.log(process.env.NODE_ENV)
// const isProd = process.env.NODE_ENV === 'production'
// const noMsgWhiteList = ['users/_login']
window.tipLock = false
// let tsMinappUrl = 'miniplatform/view/getAuthUrl'
const config = {
  baseURL: window.VUE_APP_API_URL + '/',
  timeout: 60 * 1000,
  responseType: 'json', // default
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'token': getToken()
  }
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),
}

const instance = axios.create(config)

instance.interceptors.request.use(
  req => {
    req.data = req.data || {}
    req.headers['token'] = getToken()
    // if (req.url.indexOf(tsMinappUrl) !== -1) {
    //   req.baseURL = window.VUE_APP_MINAPP_URL + '/'
    // }
    return req
  },
  error => Promise.reject(error)
)
instance.interceptors.response.use(
  data => {
    // if (data.config.url.indexOf(tsMinappUrl) !== -1) {
    //   return data.request.response
    // }

    if (data.status === 200 && data.data && data.data.code === '000000') {
      // if (!Cookies.get('loginIn') && (!location.href.includes('/login'))) {
      //   if (!window.tipLock) {
      //     window.tipLock = true
      //     Message({
      //       message: '未登录',
      //       type: 'warning',
      //       duration: 1800
      //     })
      //     window.location.href = '/login'
      //   }
      // }
      return data.request.response
    } else if (data.status === 200 && data.data && data.data.code === '4001') {
      MessageBox.confirm(
        `你已被登出，可以取消继续留在该页面，或者重新登录(${data.data.msg})`,
        '确定登出',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload() // 为了重新实例化 vue-router 对象,避免bug
        })
      })
      // Message({
      //   message: '未登陆或登陆已失效，请重新登录',
      //   type: 'warning',
      //   duration: 1800
      // })
      // setTimeout(function () {
      //   clearCookies(COOKIES_KEYS)
      //   window.location.href = '/login'
      // }, 1800)
    } else {
      Message({
        message: data.data ? data.data.msg : '',
        type: 'warning',
        duration: 1800
      })
    }
    return Promise.reject(data.request.response)
  },
  error => {
    if (error.response && error.response.data) {
      // const data = error.response.data
      // if (data.code === 'USER_NOT_LOGIN') {
      //   Message({
      //     message: '请重新登录',
      //     type: 'warning',
      //     duration: 1500,
      //     onClose: () => {
      //       // let CookiesNames = [
      //       //   'token',
      //       //   'storeId',
      //       //   'storeName',
      //       //   'loginId',
      //       //   'loginName',
      //       //   'avatar',
      //       //   'positionName',
      //       //   'account',
      //       //   'password',
      //       //   'loginIn'
      //       // ]
      //       clearCookies(COOKIES_KEYS)
      //       window.location.href = '/login'
      //       // router.replace('')
      //     }
      //   })
      // } else {
      //   // 指定接口不显示错误消息提示
      //   // if (~noMsgWhiteList.map(api => `${error.response.config.baseURL}${api}`).indexOf(error.response.config.url)) return
      //   Message({
      //     message: data.msg || data.message,
      //     type: 'warning',
      //     duration: 1800
      //   })
      // }
    }
    return Promise.reject(error)
  }
)

export default instance
