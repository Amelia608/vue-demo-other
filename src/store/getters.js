export default {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo,
  roles: state => state.user.roles,
  companyInfo: state => state.user.companyInfo,
  mobile: state => state.user.mobile,
  breadcrumb: state => state.app.breadcrumb,
  keepAliveInclude: state => state.app.keepAliveInclude
}
