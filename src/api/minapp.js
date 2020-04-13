import { apiGenerate } from '@/utils/request'

export default apiGenerate({
  getInfo: { path: 'info' },
  save: { method: 'post', path: 'save' }
}, '/minapp/template/')
