
import Cookie from 'js-cookie'
import ApiRole from '@/apiSaas/role'
import storeApi from '@/apiSaas/store'
import setApi from '@/apiSaas/_setting'
const main = {
  namespaced: true,
  state: {
    breadcrumb: [],
    companyIdVuex: '', // TODO 重构
    userInfo: {},
    loginInfo: {},
    privileges: [],
    initPage: true,
    singleStoreInfo: {
      id: '',
      name: ''
    }, // 单门店信息
    shopInfo: { // 门店相关信息
      isZD: false,
      list: [],
      shop: {} // 选择的门店
    },
    storeInfo: { // 店铺相关信息

    },
    hideCustomPhone: false,
    performanceDown: false,
    isFXMangerShow: true, // 分销管理菜单是否显示
    flattenMenus: [] // 菜单列表
  },

  getters: {
    singleStoreInfo (state, getters, rootState) {
      let name = ''
      let id = ''
      if (rootState.user.userInfo) {
        let userInfo = rootState.user.userInfo
        name = userInfo.storeDetail
        if (userInfo.storeType && +userInfo.storeType === 2) {
          id = userInfo.storeIds[0]
        }
      }

      return {
        id,
        name
      }
    },
    breadcrumb (state, getters, rootState) {
      return state.breadcrumb
    },
    userInfo (state, getters, rootState) {
      return state.userInfo
    },
    loginInfo (state) {
      return state.loginInfo
    },
    flattenPrivileges (state) {
      const menus = []
      const flatten = data => {
        data.forEach(item => {
          if (item.sub_menus && item.sub_menus.length) flatten(item.sub_menus)
          menus.push(item)
        })
      }
      flatten(state.privileges)
      return menus
    },
    shopInfo (state) {
      return state.shopInfo
    },
    storeInfo (state) {
      return state.storeInfo
    },
    flattenMenus (state) {
      return state.flattenMenus
    },
    performanceDown (state) {
      return state.performanceDown
    },
    hideCustomPhone (state) {
      return state.hideCustomPhone
    },
    isFXMangerShow (state) {
      return state.isFXMangerShow
    }
  },

  mutations: {
    setBreadcrumb (state, playload) {
      if (Array.isArray(playload)) {
        state.breadcrumb = playload
      } else {
        const { index, path, title } = playload
        if (path) state.breadcrumb[index].path = path
        if (title) state.breadcrumb[index].meta.title = title
        // const breadcrumb = state.breadcrumb
        // const { index, name, path } = playload
        // if (name) breadcrumb[index].name = name
        // if (path) breadcrumb[index].path = path
        // state.breadcrumb = breadcrumb
      }
    },
    setCompanyIdVuex (state, playload) {
      state.companyIdVuex = playload
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = userInfo
    },
    setLoginInfo (state, data) {
      Cookie.set('loginInfo', JSON.stringify(data))
      state.loginInfo = data
    },
    setPrivileges (state, privileges) {
      state.privileges = privileges
    },
    setShopInfo (state, data) {
      let result = data === '' ? { isZD: false, list: [], shop: {} } : data
      // if (result.list.length === 1 && !result.shop.id) {
      //   result.shop = result.list[0]
      // }
      localStorage.setItem('shopInfo', JSON.stringify(result))
      state.shopInfo = result
    },
    setStoreInfo (state, data) {
      Cookie.set('storeInfo', JSON.stringify(data))
      state.storeInfo = data
    },
    setFlattenMenus (state, data) {
      localStorage.setItem('flattenMenus', JSON.stringify(data))
      state.flattenMenus = data
    },
    setPerformanceDown (state, data) {
      Cookie.set('performanceDown', data)
      state.performanceDown = data
    },
    setHideCustomPhone (state, data) {
      state.hideCustomPhone = data
    },
    setIsFXMangerShow (state, data) {
      Cookie.set('isFXMangerShow', data)
      state.isFXMangerShow = data
    }
  },

  actions: {
    // 获取登录信息及权限
    getLoginInfo ({ commit, state }, payload = {}) {
      if (!payload.forceUpdate && state.privileges.length) {
        return new Promise(resolve => resolve(state.privileges))
      }
      return ApiRole.getLoginUserInfo().then(({ privileges, ...userInfo }) => {
        return new Promise((resolve, reject) => {
          commit('setPrivileges', privileges)
          commit('SET_USER_INFO', userInfo)
          Cookie.set('userInfo', userInfo)
          resolve({ privileges })
        })
      })
    },
    // 查询是否是总店，及账号下所有门店列表
    getShopInfo ({ dispatch, commit, state }) {
      return storeApi.getStoreList({}).then(res => {
        let result = {
          isZD: res.data.isZD,
          list: res.data.storeList,
          shop: {
            name: '总部'
          }
        }
        if (!res.data.isZD) {
          result.shop = res.data.storeList[0]
        }
        commit('setShopInfo', result)
        state.initPage = false
        dispatch('getUserSysConfig')
      })
    },
    // 修改门店后，重新获取门店列表
    getReShopInfo ({ dispatch, commit, state }, data) {
      return dispatch('getShopInfo').then(() => {
        let result = Object.assign({}, state.shopInfo)
        result.shop = data
        commit('setShopInfo', result)
      })
    },
    // 获取业绩全局配置--业绩提成是否下放
    getSysConfig ({ dispatch, commit, state }) {
      return setApi.getSysConfig({ sysKey: 'performanceGlobalRule' }).then(res => {
        if (res.data && res.data.sysValue) {
          let result = JSON.parse(res.data.sysValue)
          commit('setPerformanceDown', result.performanceDown)
        }
      })
    },
    // 获取会员全局配置--手机号是否隐藏
    getUserSysConfig ({ dispatch, commit, state }) {
      return setApi.getSysConfig({ sysKey: 'globalRule' }).then(res => {
        if (res.data && res.data.sysValue) {
          let result = JSON.parse(res.data.sysValue).showPhoneRule === 'z4'
          Cookie.set('hideCustomPhone', result)
          commit('setHideCustomPhone', result)
        }
      })
    }
  }
}
export default main
