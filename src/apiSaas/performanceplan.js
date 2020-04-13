import axios from '@/utils/saas/axios'

export default {
  // 根据门店分组(职位)查询雇员
  getEmpByStoreIdGroupPost (storeId) {
    return axios.get('employee/getEmpByStoreIdGroupPost', { params: { storeId } })
  },
  // 获取门店提成规则列表
  showStoreRuleList (planId) {
    return axios.get('performancePlan/showStoreRuleList', { params: { planId } })
  },
  // 获取充值提成规则列表
  showRechargeList (planId) {
    return axios.get('performancePlan/showRechargeList', { params: { planId } })
  },
  // 获取服务分类提成规则列表
  showCateList (data) {
    return axios.post('performancePlan/showCateList', data)
  },
  // 获取服务sku提成规则列表
  showSkuList (data) {
    return axios.post('performancePlan/showSkuList', data)
  },
  // 获取商品分类提成规则列表
  showShoppingTypeList (sid) {
    return axios.get('mall/product/getProductCommissionWithTypeList/' + sid)
  },
  // 获取套餐分类提成规则列表
  showSetmealCardTypeList (data) {
    return axios.post('performancePlan/showSetmealCardTypeList', data)
  },
  // 获取套餐提成规则列表
  showSetmealCardList (data) {
    return axios.post('performancePlan/showSetmealCardList', data)
  },
  // 获取综合提成规则列表
  showSynthesisRuleList (data) {
    return axios.get('performancePlan/showSynthesisRuleList', { params: data })
  },
  // 获取综合提成里选择产品的数量(综合)
  getSelectedProductCnt (data) {
    return axios.get('performancePlan/getSelectedProductCnt', { params: data })
  },
  // 查询业绩方案
  queryPlan (data) {
    return axios.post('performancePlan/queryPlan', data)
  },
  // 查询业绩方案--商品
  queryPlanShop (data) {
    return axios.get('mall/product/getCommissionPlanListWithSearch', { params: data })
  },
  // 查询业绩方案详情
  getPlanEmpInfo (planId) {
    return axios.get('performancePlan/getPlanEmpInfo', { params: { planId } })
  },
  // 查询业绩方案详情--商品
  getPlanEmpShopInfo (planId) {
    return axios.get('mall/product/getCommissionEmpList/' + planId)
  },
  // 添加业绩方案
  savePerformancePlan (data) {
    if (data.type === '6') {
      let storeId = data.storeId || ''
      return axios.post('mall/product/saveCommissionPlan?cmpName=' + data.name + '&storeId=' + storeId)
    }
    return axios.post('performancePlan/savePerformancePlan', data)
  },
  // 修改业绩方案--门店
  saveStoreRule (data) {
    return axios.post('performancePlan/saveStoreRule', data)
  },
  // 修改业绩方案--充值
  saveRechargeRule (data) {
    return axios.post('performancePlan/saveRechargeRule', data)
  },
  // 修改业绩方案--商品分类规则
  saveShoppingRule (data) {
    return axios.post('mall/product/updateCommissionWithType', data)
  },
  // 修改业绩方案---商品sku规则
  saveShoppingSkuRule (data) {
    return axios.post('mall/product/updateCommissionWithSku', data)
  },
  // 修改业绩方案--sku
  saveSkuRule (data) {
    return axios.post('performancePlan/saveSkuRule', data)
  },
  // 修改业绩方案--服务分类
  saveProductCatesRule (data) {
    return axios.post('performancePlan/saveProductCatesRule', data)
  },
  // 修改业绩方案--套餐分类
  saveSetmealCardTypeRule (data) {
    return axios.post('performancePlan/saveSetmealCardTypeRule', data)
  },
  // 修改业绩方案--套餐
  saveSetmealCardRule (data) {
    return axios.post('performancePlan/saveSetmealCardRule', data)
  },
  // 修改业绩方案--综合
  saveSynthesisRule (data) {
    return axios.post('performancePlan/saveSynthesisRule', data)
  },
  // 删除业绩方案
  delPlan (planId) {
    return axios.get('performancePlan/delPlan', { params: { planId } })
  },
  // 删除业绩方案--商品
  delPlanShop (planId) {
    return axios.post('mall/product/delProductCommission/' + planId)
  },
  // 获取适用服务分类列表(综合)
  showApplicationServiceCate (data) {
    return axios.post('performancePlan/showApplicationServiceCate', data)
  },
  // 获取销售提成套餐分类列表(综合)
  showApplicationSetmealType (planId) {
    return axios.get('performancePlan/showApplicationSetmealType', { params: { planId } })
  },
  // 获取商品提成分类sku列表
  showShoppingSkuList (data) {
    return axios.get('mall/product/getProductCommissionWithSkuList', { params: data })
  },
  // 劳动提成新增适用服务--综合
  saveApplicationService (data) {
    return axios.post('performancePlan/saveApplicationService', data)
  },
  // 销售提成新增适用服务--综合
  saveApplicationCommodity (data) {
    return axios.post('performancePlan/saveApplicationCommodity', data)
  },
  // 修改业绩（点击修改业绩、新增人员、点客、非点客）
  calculateDeduct (data) {
    return axios.post('performancePlan/calculateDeduct', data)
  },
  // 保存业绩
  saveDeduct (data) {
    return axios.post('performancePlan/saveDeduct', data)
  }
}
