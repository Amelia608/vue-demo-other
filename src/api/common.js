import request from '@/utils/request'

export const getQiniuToken = (params = {}) => request({ url: '/qiniu/uptoken', params })
