/*
 * @Descripttion:
 * @version:
 * @Author: chenying
 * @Date: 2020-04-16 14:08:12
 * @LastEditors: chenying
 * @LastEditTime: 2020-07-16 09:37:58
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
    name: "element-ui",
    meta: {
      title: "element-ui",
      icon: "s-marketing",
    },
    children: [
      {
        path: "index",
        name: "elementUI",
        component: () => import("@/views/element-ui"),
        meta: { title: "ElementUI", icon: "platform-eleme" },
      },
      {
        path: "test",
        name: "test",
        component: () => import("@/views/element-ui/test"),
        meta: { title: "ElementUI-Test", icon: "platform-eleme" },
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
    path: "/echarts",
    component: Layout,
    redirect: "/echarts",
    name: "echarts",
    meta: {
      title: "Echarts",
      icon: "s-marketing",
    },
    children: [
      {
        path: "index",
        name: "Echarts-index",
        component: () => import("@/views/echarts"),
        meta: { title: "Echarts图表", icon: "s-marketing" },
      },
      {
        path: "echartsMap",
        name: "Echarts-Map",
        component: () => import("@/views/echarts/map"),
        meta: { title: "EchartsMap", icon: "s-marketing" },
      },
      {
        path: "echartsMap-v2",
        name: "Echarts-地图",
        component: () => import("@/views/echarts/map-v2"),
        meta: { title: "地图", icon: "s-marketing" },
      },
      {
        path: "column",
        name: "Echarts-Column",
        component: () => import("@/views/echarts/column"),
        meta: { title: "柱状图", icon: "s-marketing" },
      },
      {
        path: "circle",
        name: "Echarts-Circle",
        component: () => import("@/views/echarts/circle"),
        meta: { title: "环形图", icon: "s-marketing" },
      },
      {
        path: "line",
        name: "Echarts-Line",
        component: () => import("@/views/echarts/line"),
        meta: { title: "折线图", icon: "s-marketing" },
      },
    ],
  },
  {
    path: "/nested",
    comments: Layout,
    redirect: "/nested",
    name:'路由嵌套',
    meta: {
      title: "路由嵌套",
      icon: "s-marketing",
    },
    children: [
      {
        path: "",
        name: "router-nested",
        component: () => import("@/views/router-nested"),
        meta: { title: "路由嵌套", icon: "s-tools" },
        children: [
          {
            path: "profile",
            name: "nested1",
            component: () => import("@/views/router-nested/profile"),
            meta: { title: "路由嵌套", icon: "s-tools" },
          },
          {
            path: "posts",
            name: "nested2",
            component: () => import("@/views/router-nested/posts"),
            meta: { title: "路由嵌套", icon: "s-tools" },
          },
        ],
      },
    ],
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
