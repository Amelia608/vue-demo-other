import request from '@/utils/request'

export function companyList () {
  return request({ url: '/orderexpress/express_company_list' }).then(res => res)
}
