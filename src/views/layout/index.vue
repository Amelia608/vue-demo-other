<template>
    <div class="app-page-wrapper">
        <side-bar />
        <div class="app-main-wrap">
            <nav-bar />
        </div>
        <div class="app-content-wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
export default {
    components: { NavBar, SideBar },
    data() {
        return {};
    },
    watch: {},
    methods: {},
};
</script>
<style lang="scss" scoped>
.app-page-wrapper {
    position: relative;
    padding-left: 260px;
}
.app-content-wrapper {
    padding: 20px;
}
</style>
