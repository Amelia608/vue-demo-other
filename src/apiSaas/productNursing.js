import axios from '@/utils/saas/axios'

export default {
  // / 获取护理产品列表（用于库存）
  getSkuNursing (data = {}) {
    return axios.get(`mall/nurse_product/sku/_search`, {
      params: data
    })
  },
  // 护理产品列表(spu)
  getProductNursing (data = {}) {
    return axios.get(`mall/care/products/getList`, {
      params: data
    })
  },
  // 启用禁用护理产品SPU
  enableProNursing (params) {
    return axios.post(
      `/mall/care/products/isUp`, params
    )
  },
  // 删除护理产品 /
  deleteProNursing (data) {
    return axios.delete(`mall/care/products/delete`, {
      data
    })
  },
  // 添加、编辑护理产品  / 添加/修改护理产品
  addUpdateProductNursing (data = {}) {
    return axios.post(`mall/care/products/save/update`, data)
  },
  // 查询护理产品详情
  getDetailInfo (id) {
    return axios.get(`mall/care/products/${id}/getInfo`)
  },
  // 查询sku列表
  getProNursSku (data = {}) {
    return axios.get(`/nurse_product/_searchSku`, {
      params: data
    })
  },
  // 获取护理产品消耗明细列表
  getNursingConsumes (data = {}) {
    return axios.get(`/nurse_product_consume/search`, {
      params: data
    })
  },
  // / 获取店铺护产品分类列表(全部层级)
  getClassify (data) {
    return axios.get(`mall/care/products/classify/getList`, {
      params: data
    })
  },
  // /" 删除护理产品分类
  delClassify (sid) {
    return axios.delete(`mall/care/products/classify/${sid}/delete`)
  },
  // /  添加护理产品分类
  saveClassify (data) {
    return axios.post(`mall/care/products/classify/save`, data)
  },
  // / 修改护理产品分类
  updateClassify (data) {
    return axios.post(`mall/care/products/classify/update`, data)
  }

}
