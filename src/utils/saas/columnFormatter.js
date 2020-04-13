export function TimeFormate (row, column, cellValue, index) {
  if (cellValue) {
    return cellValue.substr(0, 10)
  } else {
    return '--'
  }
}
export function columnFormatter (row, column, cellValue, index) {
  if (cellValue) {
    return cellValue
  } else {
    return '--'
  }
}
export function moneyFormatter (row, column, cellValue, index) {
  if (!cellValue) return '￥0'
  return `￥${cellValue}`
}
export function numberFormate (row, column, cellValue, index) {
  if (!cellValue) return '--'
  return `X  ${cellValue}`
}
export function moneyFixed2Formatter (row, column, cellValue, index) {
  if (!cellValue) return '￥0'
  return '￥' + cellValue.toFixed(2)
}
