<template>
  <div>
    <!--这个表示有子菜单的情况下，才会显示-->
    <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
      <template slot="title">
        <i class="icon iconfont" :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </template>
      <template v-for="(routePath,index) in item.children">
    <!--注意**这个表示判断子菜单下面是否还有三级和四级菜单-->
        <menuItem :item="routePath" :key="index" v-if="routePath.children && routePath.children.length>0"></menuItem>
        <el-menu-item v-else :index="item.path+'/'+routePath.path" :key="index">
          <i class="icon iconfont" :class="routePath.icon"></i>
          <span slot="title">{{routePath.name}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
    <!--表示一级菜单-->
    <el-menu-item v-else :index="item.path">
      <i class="icon iconfont" :class="item.icon"></i>
      <span slot="title">{{item.name}}</span>
    </el-menu-item>

  </div>
</template>