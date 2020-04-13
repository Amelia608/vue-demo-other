import axios from '@/utils/axios'
import { Message } from 'element-ui'

const F_CONTENT_TYPE = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}

const errorHandler = ({ response: { data } }) => {
  if (data && data.msg) {
    Message.error(`${data.code}: ${data.msg}`)
  }
  return data
}

/**
 * Restful 接口工厂
 */
export default class RestFactory {
  constructor (baseURL) {
    this.baseURL = baseURL
  }

  static instance (baseURL) {
    return new RestFactory(baseURL)
  }

  create (data = {}) {
    return axios.post(this.baseURL, data).catch(errorHandler)
  }

  get (params = {}) {
    return axios.get(this.baseURL, { params }, F_CONTENT_TYPE).catch(errorHandler)
  }

  getDetail (id, params = {}) {
    return axios.get(`${this.baseURL}/${id}`, { params }, F_CONTENT_TYPE).catch(errorHandler)
  }

  update (id, data = {}) {
    return axios.put(`${this.baseURL}/${id}`, data).catch(errorHandler)
  }

  delete (id) {
    return axios.delete(`${this.baseURL}/${id}`, {}, F_CONTENT_TYPE).catch(errorHandler)
  }

  /**
   * 扩展请求
   * @param name 请求函数名
   * @param path 请求路径，在baseURL上追加
   * @param method 请求方式
   */
  extend (name, path, method) {
    const methodsRestricted = ['get', 'delete', 'post', 'put']
    const nameRestricted = ['create', 'get', 'getDetail', 'update', 'delete']

    if (~nameRestricted.indexOf(name)) {
      console.error(`name 参数已存在，避免使用这些关键字 [${nameRestricted.join(',')}]`)
      return
    }

    if (!~methodsRestricted.indexOf(method)) {
      console.error(`method 参数应是 [${methodsRestricted.join(',')}] 中的一项`)
      return
    }

    const options = ~['get', 'delete'].indexOf('method') ? F_CONTENT_TYPE : {}
    this[name] = (data = {}) => {
      const params = method === 'get' ? { params: data } : data
      return axios[method](`${this.baseURL}${path}`, params, options).catch(errorHandler)
    }
    return this
  }

  //  扩展多个请求
  extendMulti (query) {
    query.forEach(item => this.extend(item.name, item.path, item.method))
    return this
  }

  // 添加子级接口工厂
  subFactory (name, path) {
    if (!this._checkRepeatMethod(name)) return
    this[name] = new RestFactory(`${this.baseURL}${path}`)
  }

  // 检测参数是否存在
  _checkRepeatMethod (name) {
    const nameRestricted = Object.keys(this)
    if (~nameRestricted.indexOf(name)) {
      console.error(`name 参数已存在`)
      return false
    }
    return true
  }
}
