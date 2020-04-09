import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const routes = [
    {
      path:'/404',
      component:()=>import('@/views/404'),
    },
    {
        path: "/",
        component: () => import("@/views/layout"),
    },
    {
      path:'*',
      redirect:'/404'
    }
];
export default new VueRouter({
    mode: "history",
    scrollBehavior: "0",
    routes,
});
