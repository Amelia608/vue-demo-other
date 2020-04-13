import axios from '@/utils/saas/axios'
// import qs from 'qs'

export default {
  // 获取原因列表
  getReason (data) {
    return axios.get(`cause/get/causeList`, { params: data })
  },
  // 保存原因
  newUpdateReason (data) {
    return axios.post('cause/add/cause', data)
  },
  // 删除原因
  deleteReason (data) {
    return axios.delete(`cause/delete/${data}/causeByid`)
  },
  // 获取banner列表
  getBannerList (data) {
    return axios.get('hairdressing/applet/set/banner/info')
  },
  // 保存banner
  newUpdateBanner (data) {
    return axios.post('hairdressing/applet/set/banner', data)
  },
  // 获取取号服务项列表
  getHairdressingServer (data) {
    return axios.post(`hairdressingServer/list`, data)
  },
  // 保存修改服务项
  newUpdateServer (data) {
    let pth = data.sid ? 'hairdressingServer/updateHairSer' : 'hairdressingServer/saveHairSer'
    return axios.post(pth, data)
  },
  // 删除服务
  deleteServe (data) {
    return axios.get(`hairdressingServer/deleteHairSer`, { params: data })
  }
}
