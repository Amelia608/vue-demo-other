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
		this.myChart = echarts.init(document.getElementById('echarts'))
		this.myChart.showLoading();
		this.myChart.hideLoading()
		const option = {
			// backgroundColor: '#394056',
			title: {
				text: '在线情况',
				textStyle: {
					fontWeight: 'normal',
					fontSize: 16,
					color: '#fff'
				},
				top: '5%',
				left: '6%'
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#495261'
					}
				}
			},
			color: ['#13C2C2', '#304156'],
			legend: {
				icon: 'circle',
				itemWidth: 14,
				itemHeight: 5,
				itemGap: 13,
				data: ['设备数量', '在线数量'],
				right: '4%',
				textStyle: {
					fontSize: 12,
					color: '#60687B'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				bottom: '3%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: false,
				axisLabel: {
					rotate: 45
				},
				axisLine: {
					lineStyle: {
						color: '#1F283F'
					}
				},
				data: ['供配电系统', '给排水系统', '中央空调系统', '电梯系统', '消防水系统', '消防报警系统', '供配电系统', '供配电系统', '消防水系统', '中央空调系统', '给排水系统', '供配电系统']
			}],
			yAxis: [{
				type: 'value',
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#1F283F'
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 14
					}
				},
				splitLine: {
					lineStyle: {
						color: '#1F283F'
					}
				}
			}],
			series: [{
				name: '设备数量',
				type: 'line',
        smooth: true,
         showSymbol: false,
				lineStyle: {
					normal: {
						width: 3,
            color: '#FDAE4A',
					}
				},
				// areaStyle: {
				// 	normal: {
				// 		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				// 			offset: 0,
				// 			color: 'rgba(137, 189, 27, 0.3)'
				// 		}, {
				// 			offset: 0.8,
				// 			color: 'rgba(137, 189, 27, 0)'
				// 		}], false),
				// 		shadowColor: 'rgba(0, 0, 0, 0.1)',
				// 		shadowBlur: 10
				// 	}
				// },
				itemStyle: {
					normal: {
						color: '#FDAE4A',
						background: 'red',
						with: 5,
					}
				},
				data: [96.3, 96.4, 97.5, 95.6, 98.1, 94.8, 89.6, 94.1, 80.1, 52.4, 75.8, 94.7]
			}, {
				name: '在线数量',
				type: 'line',
        smooth: true,
        showSymbol: false,
				lineStyle: {
					normal: {
						width: 0,
						color: '#1572E8'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(27, 67, 123, 0.9)'
						}, {
							offset: 0.8,
							color: 'rgba(0, 136, 212, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: '#1572E8'
					}
				},
				data: [97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4, 84.9]
			}]
		};
		this.myChart.setOption(option);
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