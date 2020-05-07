/*
 * @Descripttion: 
 * @version: 
 * @Author: chenying
 * @Date: 2020-04-16 14:08:12
 * @LastEditors: chenying
 * @LastEditTime: 2020-05-06 15:46:16
 */
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Layout from "@/views/layout";
const routes = [
  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard"),
        name: "Dashboard",
        meta: { title: "Dashboard", icon: "s-home" },
      },
    ],
  },
  {
    path: "/element-ui",
    component: Layout,
    redirect: "/element-ui",
    children: [
      {
        path: "index",
        name: "elementUI",
        component: () => import("@/views/element-ui"),
        meta: { title: "ElementUI", icon: "platform-eleme" },
      },
    ],
  },
  {
    path: "/mock",
    component: Layout,
    redirect: "/mock",
    children: [
      {
        path: "index",
        name: "Mock",
        component: () => import("@/views/mock"),
        meta: { title: "Mock数据", icon: "s-tools" },
      },
    ],
  },
  {
    path:"/echarts",
    component:Layout,
    redirect:"/echarts",
    name: 'echarts',
    meta: {
      title: 'Echarts',
      icon: 's-marketing'
    },
    children:[
      {
        path:"index",
        name:"Echarts-index",
        component:()=>import("@/views/echarts"),
        meta:{title:"Echarts图表",icon:"s-marketing"}
      },
      {
        path:"column",
        name:"Echarts-Column",
        component:()=>import("@/views/echarts/column"),
        meta:{title:"柱状图",icon:"s-marketing"}
      }
    ]
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];
export default new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
