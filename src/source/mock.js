import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100

const imageUrl = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    sort: '@integer(1, 100)',
    title: '@ctitle(5, 120)',
    no: '@natural(10000)',
    price: '@float(22, 222, 2, 2)',
    stock: Mock.Random.integer(1, 9999),
    source: '淘宝',
    shelf_time: Mock.Random.date('yyyy-MM-dd hh:mm:ss'),
    share_times: Mock.Random.integer(50, 500),
    increase_price: '@boolean()',
    'label|1': ['猜猜看', '看看', '正品保证', '七天退换', '免运费'],
    'status|1': [1, 2, 3],
    image_url: imageUrl
  }))
}

export default {
  getList: config => {
    const { status, title, page = 1, limit = 10, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (status && item.status !== status) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      list: pageList
    }
  },
  getGoods: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createGoods: () => ({
    data: 'success'
  }),
  updateGoods: () => ({
    data: 'success'
  })
}
