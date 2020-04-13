import Cookies from 'js-cookie'
import { login, logout, getSysUser } from '@/api/login'
import { getToken, setToken, getAvatar, setAvatar, setUsername, removeToken, removeUsername } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: getAvatar(),
    roles: [],
    companyInfo: false,
    mobile: '',
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_COMPANYINFO: (state, companyInfo) => {
      state.companyInfo = companyInfo
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 登录
    Login ({ commit, dispatch }, userInfo) {
      userInfo.username = userInfo.username.trim()
      const { username } = userInfo

      return new Promise((resolve, reject) => {
        if (userInfo.password) {
          login(userInfo).then(({ data }) => {
            let thumb = ''
            if (data.logoUrl) {
              thumb = `${data.logoUrl}?imageView2/3/w/120/h/120`
            }
            setUsername(username)
            setToken(data.token)
            setAvatar(thumb)
            Cookies.set('tenantId', data.tenantId)
            // 返回的 permCodes 不应是空数组
            if (data.permCodes && data.permCodes.length > 0) {
              // const sp3002Index = data.permCodes.indexOf('SP3002')
              const SP3001Index = data.permCodes.indexOf('SP3001')
              // const xcx2001Index = data.permCodes.indexOf('XCX2001')
              // if (data.storeType <= 0 && sp3002Index > -1) {
              //   data.permCodes.splice(sp3002Index, 1)
              // }
              // 商品列表宋fan让去掉前台控制
              if (data.storeType >= 2 && SP3001Index > -1) {
                data.permCodes.splice(SP3001Index, 1)
              }
              // if (data.storeType <= 0 && xcx2001Index > -1) {
              //   data.permCodes.splice(xcx2001Index, 1)
              // }

              // 分销相关的菜单，总部才有权限。
              const FX13000Index = data.permCodes.indexOf('FX13000')
              if (data.storeType !== 0 && FX13000Index > -1) {
                data.permCodes.splice(FX13000Index, 1)
              }
              const SZ10009Index = data.permCodes.indexOf('SZ10009')
              if (data.storeType !== 0 && SZ10009Index > -1) {
                data.permCodes.splice(SZ10009Index, 1)
              }

              // 风火活动
              if (~[100, 101, 508].indexOf(data.tenantId)) {
                data.permCodes.push('FH10000')
              }
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            commit('SET_MOBILE', data.mobile)
            commit('SET_AVATAR', thumb)
            commit('SET_TOKEN', data.token)
            commit('SET_ROLES', data.permCodes)
            // data.isSaveCompanyInfo = true
            commit('SET_COMPANYINFO', data.isSaveCompanyInfo)
            commit('SET_USERINFO', data)
            dispatch('main/getUserSysConfig')
            resolve()
          }).catch(error => reject(error))
        }
      })
    },

    // 获取用户信息
    GetInfo ({ commit, dispatch, state }) {
      return new Promise((resolve, reject) => {
        getSysUser({ token: state.token }).then(response => {
          const data = response.data
          // 返回的 permCodes 不应是空数组
          // XCX2001
          if (data.permCodes && data.permCodes.length > 0) {
            // const sp3002Index = data.permCodes.indexOf('SP3002')
            const SP3001Index = data.permCodes.indexOf('SP3001')
            // const xcx2001Index = data.permCodes.indexOf('XCX2001')
            // if (data.storeType <= 0 && sp3002Index > -1) {
            //   data.permCodes.splice(sp3002Index, 1)
            // }
            if (data.storeType >= 2 && SP3001Index > -1) {
              data.permCodes.splice(SP3001Index, 1)
            }
            // if (data.storeType <= 0 && xcx2001Index > -1) {
            //   data.permCodes.splice(xcx2001Index, 1)
            // }

            // 分销相关的菜单，总部才有权限。
            const FX13000Index = data.permCodes.indexOf('FX13000')
            if (data.storeType !== 0 && FX13000Index > -1) {
              data.permCodes.splice(FX13000Index, 1)
            }
            const SZ10009Index = data.permCodes.indexOf('SZ10009')
            if (data.storeType !== 0 && SZ10009Index > -1) {
              data.permCodes.splice(SZ10009Index, 1)
            }

            // 风火活动
            if (~[100, 101, 508].indexOf(data.tenantId)) {
              data.permCodes.push('FH10000')
            }

            commit('SET_ROLES', data.permCodes)
          } else {
            reject(new Error('getInfo: roles must be a non-null array !'))
          }

          let thumb = ''
          if (data.logoUrl) {
            thumb = `${data.logoUrl}?imageView2/3/w/120/h/120`
          }
          // data.isSaveCompanyInfo = true
          commit('SET_COMPANYINFO', data.isSaveCompanyInfo)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', thumb)
          commit('SET_MOBILE', data.mobile)
          commit('SET_USERINFO', data)
          dispatch('main/getUserSysConfig')
          resolve(response)
        }).catch(error => reject(error))
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => reject(error))
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        removeUsername()
        window.location.reload()
        resolve()
      })
    }
  }
}

export default user
