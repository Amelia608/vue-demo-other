<template>
	<div class="hello">
		<el-button @click="refresh">刷新</el-button>
		<div ref="mapbox"
			style="width:100%;height:600px;margin:0 auto"></div>
	</div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import "echarts/map/js/province/zhejiang"
import city from './data/city'
var option = {
	tooltip: {
		show: false,
		trigger: "item"
	},
	series: [
		{
			name: '浙江',
			map: 'china',
			type: 'map',
			roam: true,
			label: {
				normal: {
					show: true,
					textStyle: {
						fontWeight: 500
					}
				},
				emphasis: {
					show: true
				},

			},
			itemStyle: {
				shadowColor: 'rgba(0, 0, 0, 0.5)',
				shadowBlur: 10
			},
			markPoint: {//图形
				animation: true,
				animationEasing: 'cubicOut',
				symbolSize: 10,
				label: {
					normal: {
						show: false,
						formatter: '{c}%'
					},
					emphasis: {
						show: true,
						formatter: '{c}%'
					}
				},
				itemStyle: {
					normal: {
						areaColor: 'red',
						color: ['rgba(127, 255, 0, 0.7)']
					},
					emphasis: {
						color: ['rgb(127, 255, 0)']
					}
				},
				markArea: {
					itemStyle: {
						normal: {
							color: ['red']
						}
					}
				},
				data: [
					{ name: '杭州市', value: 10.2, coord: [120.153576, 30.287459], symbol: 'circle' },
					{ name: '金华市', value: 20, coord: [119.649506, 29.089524], symbol: 'circle' },
					{ name: '嘉兴市', value: 100, coord: [120.750865, 30.762653], symbol: 'circle' }
				]
			}
		}],
	visualMap: [
		{
			// 区域显示颜色
			type: "piecewise",
			show: true,
			textGap: 10, //两端文字主体之间的距离，单位为px
			showLabel: true, //是否显示每项的文本标签
			pieces: [
				{ min: 121, max: 300, label: "正常" },
				{ min: 101, max: 120, label: "处理种" },
				{ min: 1, max: 100, label: "超时未处理" },
				// { value: 99, label: "123（自定义特殊颜色）", color: "grey" },
			],
			left: "right", //组件离容器左侧的距离,'left', 'center', 'right','20%'
			top: "bottom", //组件离容器上侧的距离,'top', 'middle', 'bottom','20%'
			right: "auto", //组件离容器右侧的距离,'20%'
			bottom: "auto",
			orient: "horizontal",
			hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
			inRange: {
				// 区域图标样式
				symbol: "circle",
				symbolSize: 10,
				color: ["#F25961", "#FFAD46", "#40ECFB"],
			},
		},
	],
};
export default {
	name: "echartsMap",
	data () {
		return {
			geoCoordMap: {},
		};
	},
	mounted () {
		this.drawMap()
		this.mycharts.on("click", params => {
			console.log(params)
			let obj = city.find(el => el.chin === params.name)
			if (!obj) return
			this.drawMap()
		})

	},
	methods: {
		drawMap () {
			this.mycharts = echarts.init(this.$refs.mapbox);
			this.mycharts.setOption(option, true);
		},
		refresh () {
			this.drawMap()
		}
	},
};
</script>
<style lang="scss">
.echarts-map_tool-tip-box {
	.tooltip-t {
		color: #fff;
		font-size: 14px;
	}
	.tooltip-rank {
		color: #f2a443;
		margin-left: 15px;
		display: inline-block;
		margin-bottom: 10px;
	}
	.cnt-row {
		span {
			display: inline-block;
			width: 110px;
			text-align: left;
			font-size: 10px;
			font-weight: normal;
			color: #6e7482;
		}
	}
}
</style>
<style lang="scss" scoped>
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
