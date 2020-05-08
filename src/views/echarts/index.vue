<template>
	<div class="hello">
		<div ref="mapbox"
			style="width:100%;height:600px;margin:0 auto"></div>
	</div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";
import mapData from "./data/map";
import data from "./data/data";

//网络零售当期分布
var option = {
	tooltip: {
		trigger: "item",
		formatter: function (params) {
			const text = `
            <div class="echarts-map_tool-tip-box">
              <b class="tooltip-t">上海金桥商场(${params.name})</b>
              <span class="tooltip-rank">NO.1</span>
              <p class="cnt-row">
                <span>得分：100</span>
                <span>当前报警：20个</span>
              </p>
              <p class="cnt-row">
                <span>已解决：15个</span>
                <span>累计待解决：10个</span>
              </p>
            </div>`
			return text
		},
		backgroundColor: 'rgba(0,0,0,.8)',
		borderColor: "#000",
		borderWidth: 0,
		borderRadius: 5,
		padding: 10,
		shadowBlur: 300,
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
			name: "Top",
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
	visualMap: [
		{
			// 区域显示颜色
			type: "piecewise",
			show: true,
			textGap: 10, //两端文字主体之间的距离，单位为px
			showLabel: false, //是否显示每项的文本标签
			pieces: [
				{ min: 101, max: 1000 },
				{ value: 99, label: "123（自定义特殊颜色）", color: "grey" },
				{ max: 100 },
			],
			itemSymbol: "roundRect",
			hoverLink: true, //鼠标悬浮到 visualMap 组件上时，鼠标位置对应的数值 在 图表中对应的图形元素，会高亮
			borderColor: "#ccc", //边框颜色
			borderWidth: 1, //边框线宽
			inRange: {
				// 区域图标样式
				// symbol: 'circle',
				symbolSize: [5, 10],
				color: ["#f75749", "red"],
			},
		},
	],
};

export default {
	name: "HelloWorld",
	data () {
		return {
			geoCoordMap: {},
		};
	},
	mounted () {
		mapData.map((info) => {
			var city = info.children;
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
		this.mycharts = echarts.init(this.$refs.mapbox);
		option.series[0].data = this.convertData(
			data.sort(function (a, b) {
				return b.value - a.value;
			})
		);
		this.mycharts.setOption(option);
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
		},
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
  .cnt-row{
    span{
      display: inline-block;
      width: 110px;
      text-align: left;
      font-size: 10px;
      font-weight: normal;
      color: #6E7482;
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
