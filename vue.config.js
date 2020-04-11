module.exports={
  //基本路径
  publicPath:'/',
  //构建时的输出目录
  outputDir:'dists',
  css: {
    loaderOptions: {
      // 向所有 Sass 样式传入共享的全局变量、mixins
      sass: {
        prependData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_variables-element.scss";
          @import "@/styles/_mixins.scss";
        `
      }
    }
  },
  //放置静态资源
  assetsDir:'static',
  indexPath:'index.html'
}