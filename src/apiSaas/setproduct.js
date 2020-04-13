import axios from '@/utils/saas/axios'
import { F_CONTENT_TYPE } from '@/utils/saas/consts'
import qs from 'qs'

export default {
  /** *****产品标签*******/
  // 产品标签列表
  list_tag (data = {}) {
    return axios.get(`products/tags`, {
      params: data
    })
  },
  // //产品标签获取
  // getproduct(id, data = {}) {
  //   return axios.get(`product/tag/${id}`, { params: data })
  // },
  // 添加、修改产品标签
  saveProduct (data) {
    const id = data.id
    return axios[id ? 'put' : 'post'](
      `products/tags/${id ? `/${id}` : ''}`,
      data
    )
  },

  // 产品标签删除
  delpartners (id) {
    return axios.delete(`products/tags/${id}`)
  },
  /** *****护理部位*******/
  // 获取全部护理部位
  list_care_part (data = {}) {
    return axios.get(`products/nurse_part/_search`, {
      params: Object.assign(
        {
          keyword: '',
          page: 1,
          valid: 'Y',
          page_size: 10,
          viuld: ''
        },
        data
      )
    })
  },
  // 获取启用护理部位列表
  care_part () {
    return axios.get(`products/nurse_part/_list`)
  },
  // 护理部位获取详情
  getcare_part (id) {
    return axios.get(`products/nurse_part/${id}`)
  },

  // 添加、修改护理部位
  savePart (data) {
    return axios[data.id ? 'put' : 'post'](`products/nurse_part`, data)
  },
  // 护理部位删除
  delPart (id) {
    return axios.delete(`products/nurse_part?id=${id}`)
  },
  // 启用禁用部位
  partChangeState (data) {
    return axios.put(
      `products/nurse_part/valid`,
      qs.stringify(data),
      F_CONTENT_TYPE
    )
  },
  /** ****配料****** */
  // 查询配料列表
  list_material (data) {
    return axios.get(`products/material/_search`, {
      params: data
    })
  },
  // 添加、修改配料
  saveMaterial (data) {
    return axios[data.id ? 'put' : 'post'](`products/material`, data)
  },
  // 查询配料详情
  materialDetail (id) {
    return axios.get(`products/material`, {
      params: {
        id: id
      }
    })
  },
  // 删除配料信息
  del_materical (id) {
    return axios.delete(`material/${id}`)
  },
  // 禁用启用配料
  changeMatericalSt (data) {
    return axios.put(`products/material/valid`, data)
  },
  /** **配料类型** */
  // 配料类型列表
  list_materialType (data) {
    return axios.get(`products/material_type/_search`, {
      params: data
    })
  },
  // 添加、更新配料类型
  saveMatericalType (data) {
    const id = data.id || ''
    return axios[id ? 'put' : 'post'](
      `products/material_type${id ? `/${id}` : ''}`,
      data
    )
  },
  // 查询配料类型详情
  materialTypeDetail (id) {
    return axios.get(`products/material_type/${id}`)
  },
  // 删除配料类型信息
  del_matericalType (id) {
    return axios.delete(`material_type/${id}`)
  },
  // 获取启用的配料类型列表id,name
  getMatericalType () {
    return axios.get(`products/material_type/list`)
  },
  // 禁用启用配料类型
  changeMTypeSt (data) {
    return axios.put(
      `products/material_type/valid`,
      qs.stringify(data),
      F_CONTENT_TYPE
    )
  },
  /** *****护理步骤*******/
  // 护理步骤列表
  list_care_process (data = {}) {
    return axios.get(`products/nurse_step/list`, {
      params: Object.assign(
        {
          keyword: '',
          part_id: '',
          valid: '',
          page: 1,
          page_size: 10
        },
        data
      )
    })
  },
  // 护理步骤获取
  getcare_process (id) {
    return axios.get(`products/nurse_step/${id}`)
  },
  // 护理步骤增
  Newcare_process (data) {
    return axios.post(`products/nurse_step`, data)
  },
  // 护理步骤改
  updatecare_process (id, data) {
    return axios.put(`products/nurse_step/${id}`, data)
  },
  // 护理部位删除
  delcare_process (id) {
    return axios.delete(`care_process/${id}`)
  },
  // 开启启用禁用
  nursingProChange (data) {
    return axios.put(
      `products/nurse_step/valid`,
      qs.stringify(data),
      F_CONTENT_TYPE
    )
  }
}
