import axios from '@/utils/saas/axios'
// 库存---产品
export default {
  // 库存选择护理产品
  getNurseProducts: params =>
    axios.get(`/mall/stock/inout/stockSelectCareProductSearch`, { params }),
  // 库存选择商品
  getGoodsProducts: params => axios.get(`/mall/stock/inout/stockSelectProductSearch`, { params })
}
