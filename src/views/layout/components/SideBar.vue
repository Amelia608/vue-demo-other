<template>
    <div class="nav-bar-wrapper">
        <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
        >
             <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">imd{{route.path}}</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    computed:{
      routes(){
        const routes=[...this.$router.options.routes].filter(el=>el.meta)
        
        return routes
      }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>
<style lang="scss" scoped>
.nav-bar-wrapper {
    width: 260px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
    background: #545c64;
}
</style>
