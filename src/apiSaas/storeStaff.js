import axios from '@/utils/saas/axios'
import qs from 'qs'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'

export default {
  // 撤销离职
  cancelDimission (query) {
    query = Object.assign({
      'emp_id': '', // "string,员工id",
      'store_id': '', // "string,门店id",
      'group_id': '', // "string,员工组id",
      'group_name': '', // "string,员工组名称",
      'position_code': '', // "string,职位编号",
      'position_name': '', // "string,职位名称",
      'date': '' // "string,时间 yyyy-mm-dd"
    }, query)
    return axios.put(`employees/_cancelDimission`, query)
  },
  // 员工离职类型
  getLeaveType (query) {
    return axios.get(`employees/leave_type`)
  },
  // 员工工作状态
  getWorkingType (query) {
    return axios.get(`employees/work_state`)
  },
  // 门店员工列表
  getStoreStaffList (query) {
    let data = Object.assign({
      page: 1,
      page_size: '10',
      dept_id: '',
      sid: '',
      emp_name: '',
      emp_no: '',
      work_state: ''
    }, query)
    return axios.get(`assigned_employees/_search`, {
      params: data
    })
  },
  getStoreStaffChangeList (query) {
    return axios.get(`employees/changesList`, {
      params: query
    })
  },
  // 获取门店员工信息
  getStoreStaffInfo (id) {
    return axios.get(`employees/${id}`)
  },
  operatChange (id = '', type = '', query) {
    // {
    //   "emp_id": "string,id",
    //   "type": "string,异动类型,LZ离职、JZ降职、SZ升职、DD调动，ZG转岗，请假QJ，销假XJ",
    //   "store_code": "string,新门店编号",
    //   "store_name": "string,新门店名称",
    //   "post_code": "string,新门店职位编号",
    //   "post_name": "string,新门店职位名称",
    //   "group_id": "string,员工组id",
    //   "group_name": "string,员工组名称",
    //   "date": "string,异动开始日期",
    //   "memo": "string,备注",
    //   "dept_id": "string,部门id",
    //   "dept_name": "string,部门名称",
    //   "leave_type": "string,离职类型 本人申请:BR，待申请:DS，员工自离:ZL"
    // }
    query = Object.assign({
      emp_id: '',
      type: '',
      sid: '',
      store_name: '',
      post_code: '',
      post_name: '',
      group_id: '',
      group_name: '',
      date: '',
      memo: '',
      dept_id: '',
      dept_name: '',
      leave_type: ''
    }, query)
    query.emp_id = id
    query.type = type
    return axios.put(`employees/${id}/_operatChange`, query)
  },

  // 撤销异动
  channelChange (id = '', changeId) {
    return axios.put(`employees/${id}/changes/${changeId}/_cancel`, {}, F_CONTENT_TYPE)
  },
  // 查询异动详情
  getStaffRecode (id) {
    return axios.get(`employees/changes/${id}`)
  },
  // 查询员工异动列表
  getStaffChange (query) {
    return axios.get(`employees/changes`, {
      params: query
    })
  },
  // 修改异动记录
  putChange (id, params) {
    return axios.put(`employees/changes/${id}`, qs.stringify(params), F_CONTENT_TYPE)
  },
  // 员工申请离职
  putEmployeeQuit (params) {
    return axios.put(`employees/_dimissionByOneself`, qs.stringify(params), F_CONTENT_TYPE)
  }

}
