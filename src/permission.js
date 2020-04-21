import router from "./router";
// import store from "./store";
// import { Message } from "element-ui";
import NProgress from "nprogress";
import getPageTitle from "@/utils/get-page-title";
NProgress.configure({ showSpinner: false });
// const whiteList = ["/login"];
router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = getPageTitle(to.meta.title);
    next()
});
router.afterEach(() => {
    NProgress.done();
});
