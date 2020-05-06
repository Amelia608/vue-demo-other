<template>
  <div class="hello">
    <div ref="mapbox" style="width:800px;height:600px;margin:0 auto"></div>
  </div>
</template>


<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import jsonp from 'jsonp'
import optionmap from './data'

const option = optionmap



export default {
  name: 'HelloWorld',
  mounted () {
    this.getData()
    this.mycharts = echarts.init(this.$refs.mapbox)
    // 初始化echarts
    this.mycharts.setOption(option)
  },
  methods: {
    getData () {
      jsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.jsonp?_=1580892522427', {}, (err, data) => {
        if (!err) {
          console.log(data)
          let list = data.data.list.map(item => ({name: item.name, value: item.value}))
          option.series[0].data = list
          this.mycharts.setOption(option)
          // echarts初始化的前提是dom渲染完成
        }
      })
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>