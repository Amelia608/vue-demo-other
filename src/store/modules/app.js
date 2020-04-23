import Cookies from 'js-cookie'

const app = {
  state: {
    layout: 'sizes, total, prev, pager, next, jumper', // 分页相关
    pageSizes: [10, 20, 50, 100], // 分页相关
    sidebar: {
      // opened: !+Cookies.get('sidebarStatus'),
      opened: true, // 修复手机模式观看后关闭，再用电脑模式观看，菜单栏折叠的问题。
      withoutAnimation: false
    },
    device: 'desktop',
    breadcrumb: [],
    keepAliveInclude: []
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    OPEN_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 0)
      state.sidebar.opened = true
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_BREADCRUMB: (state, playload) => {
      if (Array.isArray(playload)) {
        state.breadcrumb = playload
      } else {
        const { index, path, title } = playload
        if (path) state.breadcrumb[index].path = path
        if (title) state.breadcrumb[index].meta.title = title
      }
    },
    ADD_KEEP_ALIVE_INCLUDE: (state, name) => {
      !state.keepAliveInclude.includes(name) && state.keepAliveInclude.push(name)
    },
    DEL_KEEP_ALIVE_INCLUDE: (state) => {
      state.keepAliveInclude = []
      // const index = state.keepAliveInclude.indexOf(name)
      // index > -1 && state.keepAliveInclude.splice(index, 1)
    }
  },
  actions: {
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    OpenSideBar ({ commit }, { withoutAnimation }) {
      commit('OPEN_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    AddKeepAliveInclude ({ commit }, name) {
      commit('ADD_KEEP_ALIVE_INCLUDE', name)
    },
    DelKeepAliveInclude ({ commit }, name) {
      commit('DEL_KEEP_ALIVE_INCLUDE', name || '')
    }
  }
}

export default app
