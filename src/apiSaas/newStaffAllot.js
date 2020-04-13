import axios from '@/utils/saas/axios'

export default {
  getNewStaffAllot (query) {
    return axios.get(`employees/_toStore`, { params: Object.assign({
      department: '',
      store: '',
      employee_no: '',
      post: '',
      begin_time: '',
      end_time: ''
    }, query) })
  }
}
