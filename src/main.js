import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.scss';
import App from './App.vue'
import router from './router'
console.log(Vue.config.productionTip,process.env.NODE_ENV)
Vue.use(ElementUI)
Vue.config.productionTip = false
process.env.NODE_ENV==='development'?require('./mock/api'):''
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
