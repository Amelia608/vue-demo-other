import Cookies from 'js-cookie'

const LITTLE_CAMEL_CASE_REG = /([a-z\d])([A-Z])/g
const BIG_CAMEL_CASE_REG = /([A-Z]+)([A-Z][a-z\d]+)/g

// 驼峰命名转下划线风格
export const camelCase2UnderLine = (str, separator = '_') => str
  .replace(LITTLE_CAMEL_CASE_REG, '$1' + separator + '$2')
  .replace(BIG_CAMEL_CASE_REG, '$1' + separator + '$2')
  .toLowerCase()

// 驼峰命名转下划线风格 对象
export const getUnderLine = (obj = {}) => {
  let obj2 = {}
  Object.keys(obj).map(item => {
    obj2[camelCase2UnderLine(item)] = obj[item]
  })
  return obj2
}

// 是否是驼峰命名
export const isCamelCase = (str) => LITTLE_CAMEL_CASE_REG.test(str) || BIG_CAMEL_CASE_REG.test(str)

// 空字符串转#符
export const empty2Sharp = (obj) => {
  const result = {
    ...obj
  }
  Object.keys(result).forEach(key => {
    if (result[key] === '') result[key] = '#'
  })
  return result
}

export const fmtDate = (date, fmtExp) => {
  date = new Date(Number(date))
  var o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmtExp)) {
    fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmtExp)) {
      fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmtExp
}
export const Height = (className, num) => {
  return document.documentElement.clientHeight - document.querySelector(className).offsetTop - num + 'px'
}

export const clearCookies = (cookiesNames) => {
  localStorage.removeItem('flattenMenus') // 移除菜单列表
  localStorage.removeItem('shopInfo') // 移除门店信息列表
  cookiesNames.forEach(e => Cookies.remove(e))
}

// 将url查询字符串转为对象
export function getQueryObject (url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

export function cleanArray (actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

export function param (json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

export function param2Obj (url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
        decodeURIComponent(search)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
  )
}
