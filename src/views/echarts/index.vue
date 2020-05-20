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
import option from "./data/mapoptions"
import mapjson from "./data/mapjsonmin"
import chinajson from 'echarts/map/json/china'
import city from './data/city'
console.log(city.length)
console.log(Object.keys(mapjson).length)
let data = Object.keys(mapjson).filter(el => {
	if (!city.find(v => v.eng === el)) return el
})
console.log(data)
var myjson = {
	"type": "FeatureCollection",
	"features": []
}
echarts.registerMap('myjson', chinajson);
export default {
	name: "HelloWorld",
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
			myjson.features = []
			myjson.features.push(mapjson[obj.eng])
			echarts.registerMap('myjson', myjson);
			this.drawMap()
		})
	},
	methods: {
		drawMap () {
			this.mycharts = echarts.init(this.$refs.mapbox);
			option.series[0].data = [
				{ name: '海门', value: [121.15, 31.89, 50] },
				{ name: '鄂尔多斯', value: [109.781327, 39.608266, 120] },
				{ name: '招远', value: [120.38, 37.35, 142] },
			]
			this.mycharts.setOption(option, true);
		},
		refresh () {
			echarts.registerMap('myjson', chinajson);
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
