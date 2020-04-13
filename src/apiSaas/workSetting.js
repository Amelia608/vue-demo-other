import axios from '@/utils/saas/axios'

export default {
  // 查询所有班次
  getShiftAll (storeId) {
    return axios.get(`shifts/getShiftsAll`, { params: { storeId } })
  },
  // 新增或修改班次
  saveShifts (data) {
    return axios.post('shifts/saveShifts', data)
  },
  // 删除班次
  deleteShifts (data) {
    return axios.post('shifts/deleteShifts', data)
  },
  // 查询所有小组
  getGroupAll (storeId) {
    return axios.get('group/getGroupAll', { params: { storeId } })
  },
  // 删除小组
  deleteGroup (data) {
    return axios.get('group/deleteGroup', { params: data })
  },
  // 查询未分组的成员
  queryEmployeeNoDistribution (data) {
    return axios.post('employee/queryEmployeeNoDistribution', data)
  },
  // 删除成员
  removeGroup (data) {
    return axios.post('group/removeGroup', data)
  },
  // 设置小组成员类型
  setGroupEmployeeType (id) {
    return axios.get('group/setGroupEmployeeType', { params: id })
  },
  // 保存小组信息
  saveGroup (data) {
    return axios.post('group/saveGroup', data)
  },
  // 根据小组id查询成员信息
  selectGroupById (data) {
    return axios.get('group/selectGroupById', { params: data })
  }
}
