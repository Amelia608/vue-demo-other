import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Layout from "@/views/layout";
const routes = [
    {
        path: "/404",
        component: () => import("@/views/404"),
    },
    {
        path: "/",
        component: () => import("@/views/layout"),
    },
    {
        path: "/",
        component: Layout,
        redirect: "/dashboard",
        meta: { onlyShowParent: true },
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: () => import("@/views/dashboard"),
                meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
            },
        ],
    },
    {
        path: "/element-ui",
        component: Layout,
        redirect: "/element-ui",
        meta: { onlyShowParent: true },
        children: [
            {
                path: "/element-ui",
                name: "elementUI",
                component: () => import("@/views/element-ui"),
                meta: { title: "elementUI" , icon: 'dashboard', affix: true }
            },
        ],
    },
    {
        path: "*",
        redirect: "/404",
        hidden: true 
    },
];
export default new VueRouter({
    mode: "history",
    scrollBehavior: "0",
    routes,
});
