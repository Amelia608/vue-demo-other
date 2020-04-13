import api from '@/apiSaas/_customer'
function isArrayFn (value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}
const openingOrder = {
  namespaced: true,
  state: {
    chooseProductList: [], // 选择的产品
    totalPrice: 0,
    payUser: {
      id: '', // 会员id
      custHeader: '', // 会员头像
      custStatus: '', // 会员状态
      phone: '',
      name: '',
      levelName: '',
      cardList: []
    },
    deleteProductFlag: 1,
    rechargePrice: 0,
    storeId: ''
  },

  getters: {
    totalPrice (state) {
      let sum = 0
      state.chooseProductList.map(item => {
        if (item.cardOrServe !== 'Card') {
          if (!isNaN(Number(item.salePrice))) {
            sum += item.salePrice * item.num
          }
        }
      })
      return sum.toFixed(2)
    },
    payUser (state) {
      return state.payUser
    },
    chooseProductList (state) {
      return state.chooseProductList
    },
    deleteProductFlag (state) {
      return state.deleteProductFlag
    },
    rechargePrice (state) {
      return state.rechargePrice
    },
    storeId (state) {
      return state.storeId
    }
  },

  mutations: {
    /**
     * setPayUser 存储开单的客户信息
     * setProductData 设置已选产品
     * clearProduct 清空已选择的服务或卡项
     * deleteProduct 删除单个已选择的服务或卡项
     * deleteCardProduct 删除已选择的已购套餐
     */
    setPayUser (state, data) {
      state.payUser = Object.assign({
        cardList: []
      }, data)
    },
    setchooseProductData (state, data) {
      if (isArrayFn(data)) {
        state.chooseProductList = data
      } else {
        state.chooseProductList.push(data)
      }
    },
    clearProduct (state) {
      state.chooseProductList = []
      state.deleteProductFlag++
    },
    deleteProduct (state, data) {
      let p = state.chooseProductList.filter(item => item.id !== data.id)
      state.chooseProductList = p
      state.deleteProductFlag++
    },
    deleteCardProduct (state) {
      let filters = state.chooseProductList.filter(item => item.cardOrServe !== 'Card')
      state.chooseProductList = filters
    },
    /**
     * setRechargePrice 记录充值金额
     * storeId 设置当前选择的门店id
     * setdeleteProductFlag 改变deleteProductFlag的值，用于标记服务是否被点击
     */
    setRechargePrice (state, data) {
      state.rechargePrice = data
    },
    setStoreId (state, data) {
      state.storeId = data
    },
    setdeleteProductFlag (state) {
      state.deleteProductFlag++
    }
  },
  actions: {
    // setUser 获取消费的客户详情
    setUser ({ dispatch, commit, state }, data) {
      if (data && data.id) {
        return api.getCustomerInfo(data.id).then(res => {
          if (res.data) {
            if (data.appointmentId) {
              res.data.appointmentId = data.appointmentId
            }
            if (data.pageName === 'order') {
              dispatch('getCSetmealCardListByCid', res.data)
            } else if (data.pageName === 'recharge') {
              dispatch('getCustomerBalanceInfo', res.data)
            } else {
              commit('setPayUser', data)
            }

            // commit('setStoreId', res.data.storeId)
          } else {
            commit('setPayUser', data)
          }
          // if (state.chooseProductList.length !== 0 && !state.chooseProductList[0].ratesListValue) {
          //   commit('clearProduct')
          // }
        })
      } else {
        return new Promise((resolve, reject) => {
          commit('setPayUser', data)
          // if (state.chooseProductList.length !== 0 && !state.chooseProductList[0].ratesListValue) {
          //   commit('clearProduct')
          // }
          resolve()
        })
      }
    },
    // getCSetmealCardListByCid 获取客户下的套餐列表
    getCSetmealCardListByCid ({ commit, state }, data) {
      return api.getCSetmealCardListByCid(data.id).then(res => {
        commit('setPayUser', Object.assign({}, data, {
          cardList: res.data
        }))
      })
    },
    // 获取用户下余额及储值卡信息
    getCustomerBalanceInfo ({ commit, state }, data) {
      return api.getCustomerBalanceInfo(data.id).then(res => {
        let list = []
        list.push({
          name: '账户余额',
          value: res.data.accountBalance
        })
        res.data.valueCardBalances && res.data.valueCardBalances.map(item => {
          list.push({
            id: item.cValueCardId,
            storeCardId: item.valueCardId,
            name: item.valueCardName,
            usableGiftAmount: item.usableGiftAmount,
            giftAmount: item.giftAmount,
            denomination: item.denomination,
            value: item.valueCardbalance,
            stoCardRechargeSpeList: item.stoCardRechargeSpeList || []
          })
          // "stoCardRechargeSpeList": [
        //   {
        //     "id": "id",
        //     "stoCardId": "储值卡id",
        //     "rechargeAmount": "充值金额",
        //     "giftAmount": "赠送金额"
        //   }
        // ]
        })
        commit('setPayUser', Object.assign({}, data, {
          storeCardBalance: list
        }))
        commit('setRechargePrice', {})
      })
    }
  }
}
export default openingOrder
