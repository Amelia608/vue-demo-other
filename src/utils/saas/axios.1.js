import axios from 'axios'
import Cookies from 'js-cookie'
import { clearCookies } from '@/utils/common'
import { COOKIES_KEYS } from '@/utils/consts'
// import router from '@/router/index'
import { Message } from 'element-ui'
import baseConfig from './config'
// console.log(process.env.VUE_APP_SECRET)
// console.log(process.env.NODE_ENV)
// const isProd = process.env.NODE_ENV === 'production'
// const noMsgWhiteList = ['users/_login']

const config = {
  // baseURL: isProd
  //   ? 'http://dev.zhimeiplus.com:20001/api/cspc/v1/'
  //   : '/api/cspc/v1/',
  // baseURL: `${window.VUE_APP_API_URL}/api/cspc/v1/`,
  baseURL: baseConfig.baseUrl,
  responseType: 'json', // default
  headers: {
    'Content-Type': 'application/json'
  }
}

const instance = axios.create(config)

instance.interceptors.request.use(
  req => {
    req.headers.token = Cookies.get('token')
    req.data = req.data || {}
    return req
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  data => {
    if (data.status === 200) {
      return data.request.response
    }
    return Promise.reject(data.request.response)
  },
  error => {
    if (error.response && error.response.data) {
      const data = error.response.data
      if (data.code === 'USER_NOT_LOGIN') {
        Message({
          message: '请重新登录',
          type: 'warning',
          duration: 1500,
          onClose: () => {
            clearCookies(COOKIES_KEYS)
            window.location.href = '/login'
          }
        })
      } else {
        // 指定接口不显示错误消息提示
        // if (~noMsgWhiteList.map(api => `${error.response.config.baseURL}${api}`).indexOf(error.response.config.url)) return
        Message({
          message: data.msg || data.message,
          type: 'warning',
          duration: 1800
        })
      }
    }
    return Promise.reject(error)
  }
)

export default instance
