import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  // *********************************************************************************************** new api
  // 添加卡项 修改
  add_servers (data = {}) {
    return axios.post(`servers`, data)
  },
  // 创建，修改服务
  addUpdate (id, data) {
    const post = id ? 'put' : 'post'
    return axios[post](`servers${id ? `/${id}` : ''}`, data)
  },
  qinfo (id) {
    return axios.get(`servers/${id}`)
  },
  // 列表
  list_servers (data = {}) {
    return axios.get(`server_spus/_search`, { params: data })
  },
  // 服务批量上下架
  servers_shelf (data) {
    return axios.put(`servers/_shelf`, qs.stringify(data), F_CONTENT_TYPE)
  },
  // 服务批量删除
  servers_delete (data) {
    return axios.delete(`servers/_delete`, { params: data })
  },
  // 获取sku列表
  getSkuList (data) {
    return axios.get(`server_skus/_search`, { params: data })
  },
  // *********************************************************************************************** old api
  // 增基本信息
  Newservers (data) {
    return axios.post(`servers`, data)
  },
  // 获取服务基本信息
  getservers (id, data = {}) {
    return axios.get(`servers/${id}`, { params: data })
  },
  // 改基本信息
  updateservers (id, data) {
    return axios.put(`servers/${id}`, data)
  },
  // 获取服务上架信息
  getshelf_info (id, data = {}) {
    return axios.get(`servers/${id}/shelf_info`, { params: data })
  },
  // 设置服务上架信息
  setshelf_info (id, data = {}) {
    return axios.post(`servers/${id}/shelf_info`, data)
  },
  // 获取服务标签
  get_tags (id) {
    return axios.get(`servers/${id}/tags`)
  },
  // 设置服务标签
  set_tags (id, data = {}) {
    return axios.put(`servers/${id}/tags`, data)
  },
  // 获取服务构成设置
  getconsist_info (id, data = {}) {
    return axios.get(`servers/${id}/consist_info`, { params: data })
  },
  // 设置服务构成设置
  setconsist_info (id, data = {}) {
    return axios.post(`servers/${id}/consist_info`, data)
  },
  // 获取服务展示设置
  getshow_info (id, data = {}) {
    return axios.get(`servers/${id}/show_info`, { params: data })
  },
  // 增展示设置
  Newshow_info (id, data) {
    return axios.post(`servers/${id}/show_info`, data)
  },
  // 设置服务展示设置
  setshow_info (id, data = {}) {
    return axios.put(`servers/${id}/show_info`, data)
  },
  // 获取服务合作信息
  getpartners (id, data = {}) {
    return axios.get(`servers/${id}/partners`, { params: data })
  },
  // 增合作信息
  Newpartners (id, data) {
    return axios.post(`servers/${id}/partners`, data)
  },
  // 设置服务合作信息
  setpartners (id, data = {}) {
    return axios.put(`servers/${id}/partners`, data)
  },
  delpartners (id) {
    return axios.delete(`servers/${id}/partners`)
  }
}
