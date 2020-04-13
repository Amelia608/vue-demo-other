import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: window.VUE_APP_API_URL + window.VUE_APP_BASE_API,
  timeout: 60 * 1000
})

// request 拦截器
service.interceptors.request.use(
  config => {
    config.headers['token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // if (store.getters.token) {
    // }

    // 兼容params和data
    const useParams = ['get', 'delete'].includes(config.method)
    config[useParams ? 'params' : 'data'] = config.data || config.params || {}

    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  // response => response,
  response => {
    // 下载文件（返回文件流）
    if (Object.prototype.toString.call(response.data) === '[object ArrayBuffer]') {
      const getUint8Value = (arraybuffer) => {
        let n = ''
        let i = new DataView(arraybuffer)
        for (let s = 0; s < i.byteLength; s++) {
          n += String.fromCharCode(i.getUint8(s))
        }
        return n
      }
      try {
        const json = JSON.parse(getUint8Value(response.data))
        Message({
          message: decodeURIComponent(json.message), // message 信息需要后端帮忙encode一下，因汉字会被解析为乱码。
          type: 'error',
          duration: 5 * 1000
        })
        return Promise.reject(json)
      } catch (e) {
        return response.data
      }
    }

    const { code, message, status } = response.data
    // const { data, code, message } = response.data
    if (code === 'SUCCESS') return response.data

    if (status === 401) {
      // TODO 优化：若一个页面请求多个接口，会导致此处多次执行
      MessageBox.confirm(
        `你已被登出，可以取消继续留在该页面，或者重新登录(${message})`,
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
    } else if (status === 403) {
      // 没有权限
      Message.error(message)
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    } else {
      // console.log(status)
      Message({
        message,
        type: 'error',
        duration: 5 * 1000
      })
    }

    return Promise.reject(new Error(message))
  },

  error => {
    // console.log(error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

// 简易api生成器
export function apiGenerate (config, baseURL) {
  const result = {}
  Object.keys(config).forEach(key => {
    result[key] = (params) => {
      const item = config[key]
      item.method = item.method || 'get'
      const useParams = ['get', 'delete'].includes(item.method)

      return service({
        url: `${baseURL}${item.path}`,
        method: item.method,
        [useParams ? 'params' : 'data']: params
      })
    }
  })
  return result
}

export function addOrUpdate (baseURL, data) {
  if (!data.id) delete data.id
  return service({
    url: `${baseURL}/${data.id ? 'update' : 'add'}`,
    method: 'post',
    data
  })
}
