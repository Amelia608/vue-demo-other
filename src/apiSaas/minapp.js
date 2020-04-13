import axios from '@/utils/saas/axios'
export default {
  // 获取小程序列表
  getList () {
    return axios.get(`mall/api/getMiniPgConfiglist`)
  },
  // 获取小程序授权链接
  getAuthLink (data) {
    return axios.get(`miniplatform/view/getAuthUrl`, { params: data })
  },
  // 获取小程序配置信息
  getDetail (id) {
    return axios.post(`mall/api/getMiniPgConfig`, id)
  },
  // 设置小程序配置信息
  updateMiniprogramConfig (data) {
    return axios.post('mall/api/saveMiniPgConfig', data)
  },
  // 获取小程序模板设置信息
  getIndexTemplateList (data) {
    return axios.post('mall/sett/getIndexTemplateList', data)
  },
  // 配置小程序模板设置信息
  saveIndexTemplateList (data) {
    return axios.post('mall/sett/saveIndexTemplate', data)
  },
  // 获取服务列表
  getService: data => axios.get(`/mall/service/getSpuListSearch`, { params: data }),
  // 查询套餐列表
  getCards: data => axios.get(`/mall/setmealCard/getListSearch`, { params: Object.assign({
    name: '',
    curPage: 1,
    pageSize: 10
  }, data) }),
  saveTemplate: data => axios.post(`/mall/sett/saveIndexTemplateMast`, data),
  getInfo: storeId => axios.get(`/mall/sett/getIndexTemplateMastList`, { params: { storeId } })
}
