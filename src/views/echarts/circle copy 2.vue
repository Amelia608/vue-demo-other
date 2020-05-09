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
		// let bgColor = '#fff';
		// let title = '总量';
		// let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
		// let echartData = [{
		// 	name: "A类",
		// 	value: "3720"
		// },
		// {
		// 	name: "B类",
		// 	value: "2920"
		// },
		// {
		// 	name: "C类",
		// 	value: "2200"
		// },
		// {
		// 	name: "D类",
		// 	value: "1420"
		// }
		// ];

		// let formatNumber = function (num) {
		// 	let reg = /(?=(\B)(\d{3})+$)/g;
		// 	return num.toString().replace(reg, ',');
		// }
		// let total = echartData.reduce((a, b) => {
		// 	return a + b.value * 1
    // }, 0);
    var data = this.genData(50);
		const option = {
			title: {
				text: '同名数量统计',
				subtext: '纯属虚构',
				left: 'center'
			},
			tooltip: {
				trigger: 'item',
				formatter: '{a} <br/>{b} : {c} ({d}%)'
			},
			legend: {
				type: 'scroll',
				orient: 'vertical',
				right: 10,
				top: 20,
				bottom: 20,
				data: data.legendData,

				selected: data.selected
			},
			series: [
				{
					name: '姓名',
					type: 'pie',
					radius: ['45%', '60%'],
					center: ['50%', '50%'],
					data: data.seriesData,
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 1000000000000,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		};
		this.myChart.setOption(option);
	},
	methods: {
		genData (count) {
			var nameList = [
				'赵', '钱', '孙', '李', '周', '吴', '郑', '王', '冯', '陈', '褚', '卫', '蒋', '沈', '韩', '杨', '朱', '秦', '尤', '许', '何', '吕', '施', '张', '孔', '曹', '严', '华', '金', '魏', '陶', '姜', '戚', '谢', '邹', '喻', '柏', '水', '窦', '章', '云', '苏', '潘', '葛', '奚', '范', '彭', '郎', '鲁', '韦', '昌', '马', '苗', '凤', '花', '方', '俞', '任', '袁', '柳', '酆', '鲍', '史', '唐', '费', '廉', '岑', '薛', '雷', '贺', '倪', '汤', '滕', '殷', '罗', '毕', '郝', '邬', '安', '常', '乐', '于', '时', '傅', '皮', '卞', '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
			];
			var legendData = [];
			var seriesData = [];
			var selected = {};
			for (var i = 0; i < count; i++) {
				var name = Math.random() > 0.65
					? makeWord(4, 1) + '·' + makeWord(3, 0)
					: makeWord(2, 1);
				legendData.push(name);
				seriesData.push({
					name: name,
					value: Math.round(Math.random() * 100000)
				});
				selected[name] = i < 6;
			}

			return {
				legendData: legendData,
				seriesData: seriesData,
				selected: selected
			};

			function makeWord (max, min) {
				var nameLen = Math.ceil(Math.random() * max + min);
				var name = [];
				for (var i = 0; i < nameLen; i++) {
					name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
				}
				return name.join('');
			}
		}
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