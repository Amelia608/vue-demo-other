import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Layout from '@/views/layout'
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
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      meta: { onlyShowParent: true },
      children: [{
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard'),
        meta: { title: '首页'}
      }]
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
