import {
  Message
} from 'element-ui'

export default (type = 'success', message = '操作成功', center = false, showClose = true, duration = 1500) => {
  Message({
    message,
    type,
    center,
    showClose,
    duration
  })
}
