<template>
  <div class="hello">
    <el-select v-model="value" placeholder="请选择" multiple
    collapse-tags @change="selectChange">
      <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item"></el-option>
    </el-select>
    <div ref="echarts" style="width:100%;height:600px;margin:0 auto"></div>
  </div>
</template>


<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      options: [],
      value: [],
      myChart: null,
      list: [
        {
          name: '百度',
          type: 'bar',
          barWidth: 60,
          stack: '搜索引擎',
          data: [602, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: '谷歌',
          type: 'bar',
          stack: '搜索引擎',
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: '必应',
          type: 'bar',
          stack: '搜索引擎',
          data: [60, 72, 71, 74, 190, 130, 110]
        }, {
          name: '其他',
          type: 'bar',
          barWidth: 20,
          stack: '搜索引擎',
          data: [62, 82, 91, 84, 109, 110, 120]
        }
      ],
    }
  },
  mounted () {
    this.options = this.list.map(el => el.name)
    this.drawLine()

  },
  methods: {
    drawLine () {
      let data = []
      
      if (!this.value || !this.value.length) {
        console.log(11)
        data = this.list
      } else {
        console.log(22)
        data = this.list.filter(el => this.value.includes(el.name))
      }
      var options = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {// 坐标轴指示器，坐标轴触发有效
            type: 'line'// 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['百度', '谷歌', '必应', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        color: ['#13C2C2', '#304156', '#6959CD', '#1890FF'],
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [{
          type: 'value'
        }],
        series: data
      }
      let myChart = echarts.init(this.$refs.echarts)
      // myChart.clear()
      myChart.setOption(options,true);

    },
    selectChange () {
      
      setTimeout(() => {
        this.drawLine()
      }, 100)

      // console.log(options.series)
    }
  }
}
</script>



<style scoped>
</style>