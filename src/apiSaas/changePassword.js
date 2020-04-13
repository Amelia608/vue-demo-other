import axios from '@/utils/saas/axios'
// import { F_CONTENT_TYPE } from '@/utils/saas/consts'
// import qs from 'qs'

export default {
  changePassw (id, data) {
    return axios.put(`users/${id}/password`, data)
  }
}
