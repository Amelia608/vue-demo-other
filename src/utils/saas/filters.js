import store from '@/store'
const filters = {
  /**
     * 功能：将时间戳按照给定的 时间/日期 格式进行处理
     * @param {Number} date 时间戳
     * @param {String} fmtExp 时间格式 'hh:ss'
     * @returns {String} 规范后的 时间/日期 字符串
     */
  fmtDate: function (date, fmtExp) {
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
    if (/(y+)/.test(fmtExp)) { fmtExp = fmtExp.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)) }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmtExp)) { fmtExp = fmtExp.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length))) }
    }
    return fmtExp
  },
  // 手机号隐藏中间四位
  phoneHide: function (cellValue) {
    if (!store.state.hideCustomPhone) {
      return cellValue
    }
    if (Number(cellValue) && String(cellValue).length === 11) {
      let mobile = String(cellValue)
      let reg = /^(\d{3})\d{4}(\d{4})$/
      return mobile.replace(reg, '$1****$2')
    }
    return cellValue
  }
}
export default (Vue) => {
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })
}
