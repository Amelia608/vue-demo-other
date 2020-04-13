// 合法uri
export function url (value) {
  return /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(
    value
  )
}

// 手机号
export function mobile (value) {
  return /^[1][0-9]{10}$/.test(value)
}

// 手机号
export function isPhone (rule, value, callback) {
  const argumentsLen = arguments.length
  let reg = /^[1][0-9]{10}$/
  if (argumentsLen > 2) {
    if (value && !reg.test(value)) {
      return callback(new Error('手机号格式不正确'))
    }
    callback()
  } else {
    return reg.test(rule)
  }
}
// 金额
export function money (rule, value, callback) {
  // console.log('monye', value)
  const argumentsLen = arguments.length
  if (argumentsLen > 2) {
    if (
      value &&
      !/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(
        value
      )
    ) {
      return callback(new Error('最多保留两位小数'))
    }
    callback()
  } else {
    return /^[0-9]*$/.test(rule)
  }
}

// 百分比
export function perNumber (rule, value, callback) {
  const argumentsLen = arguments.length
  if (argumentsLen > 3) {
    if (!/^[0-9]*$/.test(value)) {
      return callback(new Error('只能输入数字'))
    }
    callback()
  } else {
    return /^(100|[0-9]\d|\d)(.\d{1,2})?%$/.test(rule)
  }
}

// 数字
export function number (rule, value, callback) {
  const argumentsLen = arguments.length
  if (argumentsLen > 2) {
    if (!/^[0-9]*$/.test(value)) {
      return callback(new Error('只能输入数字'))
    }
    callback()
  } else {
    return /^[0-9]*$/.test(rule)
  }
}

// 正整数
export function positiveNumber (rule, value, callback) {
  const argumentsLen = arguments.length
  if (argumentsLen > 2) {
    if (value && !/^[1-9]\d*$/.test(value)) {
      return callback(new Error('只能输入大于零的数字'))
    }
    callback()
  } else {
    return /^[1-9]\d*$/.test(rule)
  }
}
// 身份证
export function isIDCard (rule, value, callback) {
  const argumentsLen = arguments.length
  let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx])|([1−9]\d5\d2((0[1−9])|(10|11|12))(([0−2][1−9])|10|20|30|31)\d2[0−9Xx])/
  if (argumentsLen > 2) {
    if (value && !reg.test(value)) {
      return callback(new Error('身份证号格式不对'))
    }
    callback()
  } else {
    return reg.test(rule)
  }
}

// 限制最大、最小值(包含小数)
export function limitFloatNumber (rule, value, callback, { min, max }) {
  if (parseFloat(min) && parseFloat(value) < parseFloat(min)) {
    return callback(new Error(`最小值为${min}`))
  }
  if (max && value > max) {
    return callback(new Error(`最大值为${max}`))
  }
  callback()
}

// 限制最大、最小值
export function limitNumber (rule, value, callback, { min, max }) {
  if (value && !/^[0-9]*$/.test(value)) {
    return callback(new Error('只能输入数字'))
  }

  if (min && value < min) {
    return callback(new Error(`最小值为${min}`))
  }
  if (max && value > max) {
    return callback(new Error(`最大值为${max}`))
  }
  callback()
}
export function letterNumber (rule, value, callback) {
  if (value === '' || value === undefined) {
    callback()
  } else {
    let reg = /^[0-9a-zA-Z]*$/g
    if (!reg.test(value)) { callback(new Error('由数字和字母组合')) } else {
      callback()
    }
  }
}
// 积分调整
export function point (rule, value, callback) {
  const argumentsLen = arguments.length
  if (argumentsLen > 2) {
    if (
      value &&
      !/(^-*[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^-*(0){1}$)|(^-*[0-9]\.[0-9]([0-9])?$)/.test(
        value
      )
    ) {
      return callback(new Error('请最多保留两位小数'))
    }
    callback()
  } else {
    return /^[0-9]*$/.test(rule)
  }
}
