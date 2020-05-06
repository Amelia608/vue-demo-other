<template>
	<div class="hello">
		<div ref="mapbox"
			style="width:100%;height:600px;margin:0 auto"></div>
	</div>
</template>


<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import jsonp from 'jsonp'
import map from './data/map.json'
import data from './data/data'
console.log(map,data)
const option = {
	title: {
		// 标题内容
		text: '平台运用于7家商场',
		x: "center",
		textStyle: {
			color: '#fff'
		},
		padding: 20,
		link: 'https://baidu.com',
		subtext: '123456',
		sublink: 'https://baidu.com'
	},
	legend: { //图例组件。
		orient: 'vertical',
		y: 'bottom',
		x: 'right',
		data: ['pm2.5'],
		textStyle: {
			color: '#fff'
		}
	},
	geo: {
		show: true,
		map: 'china',
		label: {
			// normal: {
			// 	show: false
			// },
			emphasis: {
				show: false,
			}
		},
		roam: false,
		itemStyle: {
			normal: {
				areaColor: '#01215c',
				borderWidth: 3,//设置外层边框
				borderColor: '#9ffcff',
				shadowColor: 'rgba(0,54,255, 1)',
				shadowBlur: 60
			},
			emphasis: {
				areaColor: '#d1d1d1'
			}
		}
	},
	series: [
		{
			type: 'map',
			map: 'china',
			name: '确诊人数',
			geoIndex: 1,
			aspectScale: 0.75, //长宽比
			showLegendSymbol: false, // 存在legend时显示
			label: {
				normal: {
					show: false,
				},
				emphasis: {
					show: false,
					textStyle: {
						color: '#fff'
					}
				}
			},
			roam: false,
			itemStyle: {
				normal: {
					areaColor: '#01215c',
					borderColor: '#01215c',
					borderWidth: 1
				},
				emphasis: {
					areaColor: '#01215c'
				}
			},
		}],
	visualMap: [{
		// 区域显示颜色
		type: 'piecewise',
		show: true,
		pieces: [
			{ min: 10000 },
			{ min: 1000, max: 9999 },
			{ min: 100, max: 999 },
			{ min: 10, max: 99 },
			{ min: 1, max: 9 },
			{ max: 0 }
		],
		inRange: {
			// // 区域图标样式
			symbol: 'rect',
			color: "#000033"
		}
	}],
	tooltip: {
		// 鼠标放上去显示内容
		trigger: 'item'
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		left: 'right',
		top: 'top',
		feature: {
			dataView: { readyOnly: false },
			restore: {},
			saveAsImage: {}
		}
	}
}



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
          let list = data.data.list.map(item => ({ name: item.name, value: item.value }))
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
.hello {
	background: #000033;
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