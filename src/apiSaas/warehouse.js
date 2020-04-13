import axios from '@/utils/saas/axios'
import qs from 'qs'

const F_CONTENT_TYPE = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
export default {
  // 出入库管理列表
  getStockInOutList: params => axios.post('/mall/stock/inout/managerSearch', params),
  // 查询 出入库类型常量 列表
  getStockInOutChangeTypeList: params =>
    axios.get('/mall/stock/inout/_getStockInOutChangeTypeList', { params }),
  // 出入库详情
  getStockInOutInfo: stockInOutId =>
    axios.get('/mall/stock/inout/_getStockInOutInfo', {
      params: { stockInOutId }
    }),
  // 出入库确认
  affirmStockInOu: stockInOutId =>
    axios.post('/mall/stock/inout/_affirmStockInOut', qs.stringify({ stockInOutId }), F_CONTENT_TYPE),
  // 新增出入库
  addOutInStock: (type, data) => axios.post(`${type === 'IN' ? '/mall/stock/inout/_addInStock' : '/mall/stock/inout/_addOutStock'}`, data),
  // 库存管理列表中操作 -出入库记录
  getStockInOutRecord: params =>
    axios.get('/mall/stock/inout/_getStockInOutRecord', { params }),
  // 补货单列表
  getReplenishments: params =>
    axios.get('/mall/stock/replenishments/_search', { params }),
  // 添加补货单
  addPutReplenishment: (data, id) =>
    axios[id ? 'put' : 'post'](
      `mall/stock/replenishments${id ? `/${id}` : ''}`,
      data
    ),
  // 删除补货单
  delReplenishment: id => axios.delete(`/mall/stock/replenishments/${id}`),
  // 补货单详情
  getReplenishmentDetail: id => axios.get(`/mall/stock/replenishments/${id}`),
  // 补货单调拨
  replenishmentAllocation: id =>
    axios.put(`/mall/stock/replenishments/${id}/_allocation`),
  // 补货单审批
  replenishmentApproval: (id, opt) =>
    axios.put(
      `/mall/stock/replenishments/${id}/_approval`,
      qs.stringify(opt),
      F_CONTENT_TYPE
    ),
  // 补货单撤销
  cancelReplenishment: id => axios.put(`/mall/stock/replenishments/${id}/_revoke`),
  // 根据门店获取补货单产品
  getReplenishmentProducts: (storeId, id) => axios.get(`/mall/store/replenishments/${id}`, { params: { storeId } }),
  // 调拨单列表
  getAllocationLIst: params => axios.get('/mall/stock/allocates/_search', { params }),
  // 添加调拨单
  getAllocationAdd: (data, id) =>
    axios[id ? 'put' : 'post'](`/mall/stock/allocates${id ? `/${id}` : ''}`, data),
  // 调拨单详情
  getAllocationDetail: id => axios.get(`/mall/stock/allocates/${id}`),
  // 撤回调拨单
  revokeAllocation: id => axios.put(`/mall/stock/allocates/${id}/_revoke`),
  // 拒绝收货
  notAcceptAllocation: id => axios.put(`/mall/stock/allocates/${id}/_notAccept`),
  // 确定出库
  confirmOutAllocation: id => axios.put(`/mall/stock/allocates/${id}/_confirmOut`),
  // 确定入库
  confirmInAllocation: (id, opt) =>
    axios.put(`mall/stock/allocates/${id}/_confirmIn`, opt),
  // 审批调拨单
  approvalAllocation: (id, opt, remark) =>
    axios.put(
      `mall/stock/allocates/${id}/_approval`,
      qs.stringify({
        opt, remark
      }),
      F_CONTENT_TYPE
    ),
  // 删除调拨单
  delAllocation: id => axios.delete(`mall/stock/allocates/${id}`),
  // 盘点列表
  getStockTakeList: params => axios.get('mall/stock/checks/_search', { params }),
  //  添加修改盘点
  AddStockTake: (data, id) =>
    axios[id ? 'put' : 'post'](`mall/stock/checks${id ? `/${id}` : ''}`, data),
  // 交接盘点
  handoverStockTake: id => axios.put(`mall/stock/checks/${id}/_handover`),
  // 审批盘点
  approvalStockTake: (id, opt, remark) =>
    axios.put(
      `mall/stock/checks/${id}/_approval`,
      qs.stringify({
        opt, remark
      }),
      F_CONTENT_TYPE
    ),
  // 删除撤回盘点
  delStockTake: id => axios.delete(`mall/stock/checks/${id}`),
  // 盘点单详情
  seeStockTake: id => axios.get(`mall/stock/checks/${id}`),
  // 入库管理
  getStocks: params => axios.post('mall/stock/stock/managerSearch', params),
  // 库存导出结果
  exprotStock: params => axios.get('mall/stock/_export', params),
  // 交接人
  // getStoreStaffList (data = {}) {
  //   // GET /v1/employees/technicians
  //   return axios.post(`employee/queryEmployee`, data)
  // },
  // 交接人
  getStoreStaffList: params => axios.get('mall/employee/getInfo', { params }),
  // 补货确认入库,出库
  replenishmentsConfimOutIn: (type, data) => axios.post(`${type === 'OUT' ? '/mall/stock/replenishments/confimOut' : '/mall/stock/replenishments/confimIn'}`, data),
  replenishmentRefuse: data => axios.post('mall/stock/replenishments/refuseToReceiveProduct', data)
}
