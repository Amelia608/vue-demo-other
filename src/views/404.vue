<template>
  <div class="page-404">
    <img :src="require('../assets/404.jpeg')" alt="">
    <div class="mt20">
      <h1>404</h1>
      <h3>UH OH! 页面丢失</h3>
      <p>您所寻找的页面不存在。你可以点击下面的按钮，返回主页</p>
      <el-button class="mt50" type="primary" round @click="$router.push({path:'/'})">返回首页</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .page-404{
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
</style>
<script>
export default {
  
}
</script>