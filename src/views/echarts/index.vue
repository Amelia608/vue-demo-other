<template>
	<div class="hello">
		<div ref="mapbox"
			style="width:100%;height:600px;margin:0 auto"></div>
	</div>
</template>


<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
import mapData from './data/map'
import data from './data/data'

//网络零售当期分布
var option = {
	tooltip: {
		trigger: "item",
	},
	geo: {
		map: "china",
		label: {
			emphasis: {
				show: false,
			},
		},
		roam: false,
		itemStyle: {
			normal: {
				areaColor: "#d1d1d1",
				borderColor: "#111",
			},
			emphasis: {
				areaColor: "#d1d1d1",
			},
		},
	},

	series: [
		{
			name: "Top 5",
			type: "effectScatter",
			coordinateSystem: "geo",
			symbolSize: function (val) {
				return val[2] / 10;
			},
			showEffectOn: "render",
			rippleEffect: {
				brushType: "stroke",
			},
			hoverAnimation: true,
			itemStyle: {
				normal: {
					color: "#f75749",
					shadowBlur: 10,
					shadowColor: "#333",
				},
			},
			zlevel: 1,
		},
	],
};




export default {
	name: 'HelloWorld',
	data () {
		return {
			geoCoordMap: {}
		}
	},
	mounted () {
		mapData.map(info => {
      var city = info.children;
      console.log(city)
			for (var i = 0; i < city.length; i++) {
				var citydetail = [];
				var name = city[i].name;
				this.geoCoordMap[name] = citydetail;
				var lat = parseFloat(city[i].lat);
				var log = parseFloat(city[i].log);
				citydetail.push(log);
				citydetail.push(lat);
			}
		});
		this.mycharts = echarts.init(this.$refs.mapbox)
		option.series[0].data = this.convertData(
			data.sort(function (a, b) {
				return b.value - a.value;
			})
		)
		this.mycharts.setOption(option)
	},
	methods: {
		convertData (data) {
			var res = [];
			for (var i = 0; i < data.length; i++) {
				var geoCoord = this.geoCoordMap[data[i].name];
				if (geoCoord) {
					res.push({
						name: data[i].name,
						value: geoCoord.concat(data[i].value),
					});
				}
			}
			return res;
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