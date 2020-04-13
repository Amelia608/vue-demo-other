// 请求头
export const F_CONTENT_TYPE = {
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
}
// 图片路径
export const QINIU_DOMAIN_NAME = 'http://dwsaas.wowkai.cn/'

// 日期类型
export const CALENDAR_TYPE_OPTS = [
  { value: '1', label: '公历' },
  { value: '2', label: '农历' }
]

// 性别
export const SEXUAL_OPTS = [
  { value: '2', label: '女' },
  { value: '1', label: '男' }
]

// 在职状态
export const WORKING_STATE = [
  { value: '1', label: '在职' },
  { value: '2', label: '离职' },
  { value: '3', label: '休假中' }
]

// 员工组
export const EMP_GROUP = [
  { id: '7', code: 'CM', name: '客户经理组' },
  { id: '8', code: 'MR', name: '美容师组' },
  { id: '9', code: 'MJ', name: '美甲师组' },
  { id: '10', code: 'XN', name: '虚拟组' },
  { id: '11', code: 'CJ', name: '长假组' }
]

// 添加成功
export const ADD_SUCCESS_MSG = '添加成功!'

// 编辑成功
export const EDIT_SUCCESS_MSG = '编辑成功!'

// 分页选项
export const PAGE_SIZE_OPT = [10, 15, 20, 30]

// 备注最大长度
export const TEXTAREA_MAXLENGTH = 64

// 上架方式
export const ON_WAY = [
  { id: '1', name: '仅线下门店' },
  { id: '2', name: '仅线上商城' },
  { id: '3', name: '线下线上' },
  { id: '4', name: '不单卖' }
]
// 业务类型
export const BUSINESS_TYPE = [
  {
    code: '1',
    name: '生活美容'
  },
  {
    code: '2',
    name: '医疗美容'
  },
  {
    code: '3',
    name: '生美+医美'
  }
]

// 开票方式
export const INVOICE_WAY = [
  {
    code: '1',
    name: '正常开'
  },
  {
    code: '2',
    name: '月底开'
  },
  {
    code: '3',
    name: '不开'
  }
]
// 合作方式
export const COOPERATION_WAY = [
  {
    name: '代销',
    text: '无库存三方发货',
    value: '1'
  },
  {
    name: '寄销',
    text: '销售、录单不管库存',
    value: '2'
  },
  {
    name: '直销',
    text: '管库存',
    value: '3'
  }
]
// 上架状态
export const ON_WAY_STATE = [
  { id: '', name: '全部' },
  { id: '1', name: '上架' },
  { id: '2', name: '下架' }
]

// cookie keys
export const COOKIES_KEYS = [
  'token',
  'storeId',
  'storeName',
  'deptId',
  'loginIn',
  'loginId',
  'loginName',
  'roleName',
  'avatar',
  'areaId',
  'userInfo',
  'canDirectJoinCashiersSystem',
  'positionName',
  'hideCustomPhone',
  'performanceDown',
  'loginInfo', // 登录信息
  'account', // 登录的账号
  'isFXMangerShow', // 是否显示分销
  'storeInfo' // 选择的店铺信息
]
// vuescroll setting
export const vuescrollOps = {
  vuescroll: {
    mode: 'native',
    sizeStrategy: 'percent',
    detectResize: true
  },
  bar: {
    size: '5px',
    keepShow: true,
    background: '#ECECEC'
  }
}
// 商品类型
export const GOODS_TYPE = {
  1: '普通商品',
  2: '赠品',
  3: '活动商品'
}
