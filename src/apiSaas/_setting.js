import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  /** ************服务分类/标签**************/
  // 添加服务分类
  addServeType (data = {}) {
    return axios.post(`pCates/saveOrUpdatePCates`, data)
  },
  // 获取服务分类列表
  getServeList (data = {}) {
    return axios.post(`pCates/getPCatesListByShopId`, data)
  },
  // 删除服务分类
  delServeType (id) {
    return axios.get(`pCates/deletePCates`, { params: { id: id } })
  },
  // 添加服务标签
  addServeTag (data = {}) {
    return axios.post(`pTags/saveOrUpdatePTags`, data)
  },
  // 获取服务标签列表
  getServeTag (data = {}) {
    return axios.post(`pTags/getPTagsListByShopId`, data)
  },
  // 删除服务标签
  delServeTag (id) {
    return axios.get(`pTags/deletePTags`, { params: { id: id } })
  },
  /** ************工位管理**************/
  // 查询工位列表
  getWorkPlace (data = {}) {
    return axios.post(
      `workplace/getWorkplaceListByParam`,
      Object.assign(
        {
          pageSize: 10,
          startPage: 1,
          storeId: '',
          status: ''
        },
        data
      )
    )
  },
  // 添加修改工位
  newUpdate (data = {}) {
    return axios.post(`workplace/saveWorkplace`, data)
  },
  // 查询工位详情
  getWorkPlaceInfo (id) {
    return axios.get(`workplace/getWorkplaceInfo`, { params: { id } })
  },
  // 批量删除工位
  deleteWorkPlace (data = {}) {
    return axios.post(`workplace/deleteWorkplace`, data)
  },
  // 批量释放工位
  releaseWorkPlace (data = {}) {
    return axios.post(`workplace/releaseWorkplace`, data)
  },
  // 根据传参选择性获取设置积分、成长值、全局设置
  getSysConfig (data = {}) {
    return axios.get(`sysConfig/selectSysConfig`, { params: data })
  },
  setSysConfig (data = {}) {
    return axios.post(`sysConfig/saveSysConfig`, data)
  },
  // 会员等级列表
  getLevelList () {
    return axios.get(`cLevel/getCLevelAll`)
  },
  // 添加、编辑会员等级
  addLevel (data = {}) {
    return axios.post(`cLevel/saveOrUpateCLevel`, data)
  },
  // 删除会员等级
  delLevel (id) {
    return axios.get(`cLevel/deleteCLevel`, { params: { id } })
  },
  /** 商品相关**/
  // 商品标签列表
  getGoodsTags: params => axios.get(`mall/product/tag/list`, { params }),
  // 新增编辑标签
  addGoodsTag: data => axios.post(`${data.sid ? 'mall/product/tag/updateTag' : 'mall/product/tag/saveTag'}`, data),
  // 删除
  delGoodsTag: data => axios.post(`mall/product/tag/deleteTag`, qs.stringify(data), F_CONTENT_TYPE),
  // 查询公众号服务号设置
  getWXConfig: () => axios.get('/mall/sett/getMpConfg'),

  // 查询公众号服务号设置
  setWXConfig: (data) => axios.post('/mall/sett/settMpConfig', data),
  // 解绑公众号
  delWXConfig: () => axios.get('/mall/sett/delMpConfg'),

  // 查消息设置集
  // 查询模板消息设置
  getTemplateSetting: () => axios.get('/mall/sett/listTemplateConfig'),
  // 查询站内消息设置
  getStationSetting: (data) => axios.get('/mall/sett/listInnerMsgConfig', { params: data }),
  // 查询员工消息设置
  getMsgSetting: (data) => axios.get('/mall/sett/listMsmMsgConfig', { params: data }),

  // 改  模板id
  updateTmpId: (data) => axios.post('/mall/sett/updateTemplateConfigTemplateId', data),
  // 模板消息开启推送
  tmpMsgOpen: (data) => axios.post('/mall/sett/openTemplateMsg', data),
  // 模板消息关闭推送
  tmpMsgclose: (data) => axios.post('/mall/sett/closeTemplateMsg', data),
  // 站内信开启推送
  tmpInnerMsgopen: (data) => axios.post('/mall/sett/openInnerMsg', data),
  // 站内信关闭推送
  tmpInnerMsgclose: (data) => axios.post('/mall/sett/closeInnerMsg', data),
  // 短消息开启推送
  tmpmsnMsgopen: (data) => axios.post('/mall/sett/openMsmMsg', data),
  // 短消息关闭推送
  tmpmsnMsgclose: (data) => axios.post('/mall/sett/closeMsmMsg', data),
  /** *支付设置***/
  // 支付设置列表
  getMiniPgConfiglist: () => axios.get(`/mall/api/getMiniPgConfiglist`),
  // 消息列表
  getReceivingList: (data) => axios.post(`/mall/msg/msglist`, data),
  // 消息已读
  changeReadState: (data) => axios.post(`/mall/msg/setMsgReaded`, data),
  // 消息删除
  delMsgList: (data) => axios.post(`/mall/msg/deleteMsg`, data),
  // 消息总数
  getMsgNum: () => axios.get(`/mall/msg/msgCount`)
}
