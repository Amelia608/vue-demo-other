import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // 员工列表
  employeeList (data) {
    return axios.get('employees/_search', {
      params: data
    })
  },
  // 员工删
  delemployees (id) {
    return axios.delete(`employees/${id}`)
  },
  // 员工查
  getemployees (id, data = {}) {
    return axios.get(`employees/${id}`, {
      params: data
    })
  },
  // 添加、修改员工
  saveEmployees (data) {
    const id = data.id || ''
    return axios[id ? 'put' : 'post'](`employees${id ? `/${id}` : ''}`, data)
  },

  // 员工分配门店
  employees_assign (id, data) {
    console.log('<<<', data)
    console.log('>>', data.group_name.length)
    return axios.put(
      `employees/${id}/_assign`,
      qs.stringify(data),
      F_CONTENT_TYPE
    )
  },
  // 门店客户经理
  getManager (data) {
    return axios.get(`employees/_customerManager`)
  },

  // 门店美容师
  getBeautician (data) {
    return axios.get(`employees/_beautician`)
  },
  // 获取导入员工的历史列表
  import_employee_records (data) {
    return axios.get('import/employee/records', {
      params: data
    })
  },
  // 获取导入员工失败的列表
  import_employee_exceptions (data) {
    return axios.get('import/employee/exceptions', {
      params: data
    })
  },
  // 员工导入
  import_employees (data) {
    return axios.post('import/employees', data)
  }
}
