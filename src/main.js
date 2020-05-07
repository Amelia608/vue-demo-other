import Vue from "vue";
import ElementUI from "element-ui";
import countTo from "vue-count-to";
import moment from "moment";
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.scss";
import App from "./App.vue";
import router from "./router";
import "./permission";
import variables from "@/styles/_variables-element.scss";
import store from "@/store";
import SidebarItem from "@/views/layout/components/SidebarItem"
Vue.component('SidebarItem', SidebarItem)
// console.log(Vue.config.productionTip,process.env.NODE_ENV)
const version = require("element-ui/package.json").version;
console.log(variables, version);
Object.defineProperty(Vue.prototype, "$moment", { value: moment });
Vue.component("countTo", countTo);
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.filter('convertDate',function(value){
	return moment(value).format('YYYY-MM-DD');
});
process.env.NODE_ENV === "development" ? require("./mock/api") : "";
new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
