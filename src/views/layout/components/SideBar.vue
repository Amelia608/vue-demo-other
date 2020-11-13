<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenying
 * @Date: 2020-04-16 14:08:12
 * @LastEditors: chenying
 * @LastEditTime: 2020-07-16 09:37:12
--> 
<template>
  <div class="nav-bar-wrapper" :style="{background:'#304156'}">
    <el-menu :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b"
      router>
      <!-- <el-menu-item v-for="route in routes" :key="route.path" :index="route.path">{{route.title}}</el-menu-item> -->
      <sidebar-item v-for="route in routes"
        :key="route.path"
        :index="route.path"
        :item="route"
        :base-path="route.path" />
    </el-menu>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  data () {
    return {};
  },
  computed: {
    routes () {
      const routes = [...this.$router.options.routes]
      return routes
    },
    theme(){
      return this.$store.state.settings.theme
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
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
}
</style>
