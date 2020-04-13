import Mock from 'mockjs'

const Random = Mock.Random
Random.extend({
  weekday: function (date) {
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return this.pick(weekdays)
  },
  sex: function (date) {
    var sexes = ['男', '女', '中性', '未知']
    return this.pick(sexes)
  },
  cf: function (date) {
    var cfs = ['是', '否']
    return this.pick(cfs)
  },
  shop: function (date) {
    var shops = ['门店A', '门店B', '门店C', '门店D', '门店E', '门店F', '门店G', '门店H']
    return this.pick(shops)
  },
  affiliation: function (date) {
    var affiliations = ['员工组', '门店', '公司']
    return this.pick(affiliations)
  },
  changeType: function (date) {
    var changeTypes = ['离职', '入职', '晋升']
    return this.pick(changeTypes)
  },
  lifecycle: function (date) {
    var lives = ['未进店', '体验客', '休眠客']
    return this.pick(lives)
  },
  pos: function (data) {
    var pos = ['美容助理', '美容师', '高级美容师']
    return this.pick(pos)
  },
  approve: function (value) {
    var approves = ['待审核', '已完成', '审核中']
    return this.pick(approves)
  }
})

const customerListData = Mock.mock({
  'resultList|1-20': [{
    'id|0-1000000': 0,
    'no|100000000-999999999': 356136368,
    'name': '@cname',
    'memberNo': Random.cf(),
    'phone': /^1[385][1-9]\d{8}/,
    'memberType': Random.cf(),
    'level|0-12': 0,
    'balance|0-100000': 8900,
    'belong': Random.affiliation(),
    'storeName': Random.shop(),
    'technicianName': '@cname',
    'groupName': '@cname',
    'firstEntryDate': Random.date(),
    'lastEntryDate': Random.date(),
    'lifecycleState': Random.lifecycle()
  }]
})

const personnelData = Mock.mock({
  'resList|1-10': [{
    'id|0-1000000': 0,
    'name': '@cname',
    'no|100000000-999999999': 356136368,
    'changeTpe': Random.changeType(),
    'changeDate': Random.date(),
    'beforestore': Random.shop(),
    'beforegroup': Random.affiliation(),
    'beforepos': Random.pos(),
    'afterstore': Random.shop(),
    'aftergroup': Random.affiliation(),
    'afterpos': Random.pos(),
    'approve1': Random.approve(),
    'approve2': Random.approve(),
    'approve': Random.approve(),
    'status': '已生效',
    'create_date': Random.date()
  }]
})

const STAFFTURNPVERDATA = Mock.mock({
  'resList|1-10': [{
    'id|0-1000000': 0,
    'changeTpe': Random.changeType(),
    'beforestore': Random.shop(),
    'beforegroup': Random.affiliation(),
    'beforepos': Random.pos(),
    'afterstore': Random.shop(),
    'aftergroup': Random.affiliation(),
    'afterpos': Random.pos(),
    'time_st': Random.date(),
    'time_end': Random.date()
  }]
})

export default {
  customerListData,
  personnelData,
  STAFFTURNPVERDATA
}
