import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  Newfile (data) {
    return axios.post(`file`, qs.stringify(data), F_CONTENT_TYPE)
  },
  Delfile (data) {
    return axios.delete(`file`, data)
  },
  getQiniuToken (params) {
    return axios.get(`file/getQiniuToken`)
  }
}
