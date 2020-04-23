import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import App from './App.vue'
import router from './router'
import './permission'
import variables from '@/styles/element-variables.scss'
import store from '@/store'
// console.log(Vue.config.productionTip,process.env.NODE_ENV)
const version=require('element-ui/package.json').version
console.log(variables,version)
Vue.use(ElementUI)
Vue.config.productionTip = false
process.env.NODE_ENV==='development'?require('./mock/api'):''
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
