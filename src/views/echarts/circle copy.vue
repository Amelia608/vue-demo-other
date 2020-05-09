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
		let bgColor = '#fff';
		let title = '总量';
		let color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'];
		let echartData = [{
			name: "A类",
			value: "3720"
		},
		{
			name: "B类",
			value: "2920"
		},
		{
			name: "C类",
			value: "2200"
		},
		{
			name: "D类",
			value: "1420"
		}
		];

		let formatNumber = function (num) {
			let reg = /(?=(\B)(\d{3})+$)/g;
			return num.toString().replace(reg, ',');
		}
		let total = echartData.reduce((a, b) => {
			return a + b.value * 1
		}, 0);
		const option = {
			backgroundColor: bgColor,
			color: color,
			title: [{
				text: '{name|' + title + '}\n{val|' + formatNumber(total) + '}',
				top: 'center',
				left: 'center',
				textStyle: {
					rich: {
						name: {
							fontSize: 14,
							fontWeight: 'normal',
							color: '#666666',
							padding: [10, 0]
						},
						val: {
							fontSize: 32,
							fontWeight: 'bold',
							color: '#333333',
						}
					}
				}
			}, {
				text: '单位：个',
				top: 20,
				left: 20,
				textStyle: {
					fontSize: 14,
					color: '#666666',
					fontWeight: 400
				}
			}],
			series: [{
				type: 'pie',
				radius: ['45%', '60%'],
				center: ['50%', '50%'],
				data: echartData,
				hoverAnimation: true,
				itemStyle: {
					normal: {
						borderColor: bgColor,
						borderWidth: 2
					}
				},
				labelLine: {
					normal: {
						length: 20,
						length2: 120,
						lineStyle: {
							color: '#949495'
						}
					}
				},
				label: {
					normal: {
						formatter: params => {
							return (
								params.name +
								formatNumber(params.value) 
							);
						},
						padding: [0, -100, 25, -100],
						rich: {
							icon: {
								fontSize: 16
							},
							name: {
								fontSize: 14,
								padding: [0, 10, 0, 4],
								color: '#666666'
							},
							value: {
								fontSize: 18,
								fontWeight: 'bold',
								color: '#333333'
							}
						}
					}
				},
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