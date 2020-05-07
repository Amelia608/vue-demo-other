<template>
	<div class="hello">
		<div id="echarts"
			style="width:100%;height:600px;margin:0 auto"></div>
	</div>
</template>


<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'


export default {
	name: 'HelloWorld',
	mounted () {
		var UName = ['张晨威', '李锋锐', '谢海青'];
		var WeiNum = [41, 42, 35];
		var WuNum = [77, 74, 112];
		var DaiNum = [2, 1, 3];
		var CNum = [0, 3, 0];
		var BNum = [0, 0, 0];
		var ANum = [0, 0, 0];
		var JiNum = [0, 0, 0];
		var totalNum = [120, 120, 150];
		this.myChart = echarts.init(document.getElementById('echarts'))
		this.myChart.setOption({
			tooltip: {
				trigger: 'axis',
				axisPointer: {            // 坐标轴指示器，坐标轴触发有效
					type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				}
			},
			legend: {
				data: ['未接', '无意向', '待定', '意向C', '意向B', '意向A']

			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: {
				type: 'category',
				data: UName
			},
			yAxis: {
				type: 'value'
			},
			series: [
				{
					name: '总和',
					type: 'bar',
					barGap: '-100%',
					label: {
						normal: {
							textStyle: {
								color: '#682d19'
							},
							position: 'left',
							show: false,
							formatter: '{b}'
						}
					},
					itemStyle: {
						normal: {
							color: '#E5F9FB',
							borderWidth: 2,
							borderColor: '#1FBCD2'

						}
					},
					data: totalNum
				},
				{
					name: '无意向',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}

					},
					data: WuNum
				},
				{
					name: '未接',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: WeiNum
				},
				{
					name: '待定',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: DaiNum
				},
				{
					name: '意向C',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: CNum
				},
				{
					name: '意向B',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: BNum
				},
				{
					name: '意向A',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: ANum
				},
				{
					name: '即将成交',
					type: 'bar',
					stack: '总量',
					label: {
						normal: {
							show: true,
							position: 'insideRight'
						}
					},
					data: JiNum
				}
			]
		});
	},
	methods: {

	}
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
	/* background: #000033; */
	padding: 30px;
}
h1,
h2 {
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