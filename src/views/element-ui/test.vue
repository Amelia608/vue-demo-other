<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenying
 * @Date: 2020-07-16 09:31:51
 * @LastEditors: chenying
 * @LastEditTime: 2020-07-18 10:08:52
--> 
<!-- test -->
<template>
	<div class=''>
		<canvas id="tutorial"
			width="150"
			height="150"></canvas>
		<canvas id="pie"
			width="150"
			height="150"></canvas>
		<InputSelect v-model="Selectvalue"
			keyName='alphabetic_code'
			keyValue="id"
			Url='http://business.dev.rs.com/investplat/b/centerinfo/search'></InputSelect>
		<div>
			<el-cascader :options="options"
				v-model="cas"
				:props="{ checkStrictly: true }"
				clearable />
		</div>
	</div>
</template>

<script>
import InputSelect from '@/components/inputSelect'
import DATA from './data'
export default {
	name: '',
	components: { InputSelect },
	data () {
		return {
			Selectvalue: "",
      options: DATA,
      cas:''
		};
	},
	computed: {

	},
	watch: {

	},
	created () {

	},
	mounted () {
		this.draw()
		this.drawPie()
	},
	methods: {
		draw () {
			var canvas = document.getElementById("tutorial")
			var ctx = canvas.getContext("2d");
			// ctx.fillRect(25, 25, 100, 100);
			// ctx.clearRect(45, 45, 60, 60);
			// ctx.strokeRect(50, 50, 50, 50);
			//绘制三角形
			ctx.fillStyle = "red"
			// ctx.beginPath();
			// ctx.moveTo(0, 0);
			// ctx.lineTo(0, 100);
			// ctx.lineTo(50, 50);
			// ctx.fill();
			//绘制笑脸


			/*
			arc(x, y, radius, startAngle, endAngle, anticlockwise)
			*画一个以（x,y）为圆心的以radius为半径的圆弧（圆），从startAngle开始到endAngle结束，按照anticlockwise给定的方向（默认为顺时针）来生成。
			*注意：arc()函数中表示角的单位是弧度，不是角度。角度与弧度的js表达式:
			*弧度=(Math.PI/180)*角度。
			*/
			ctx.beginPath();
			ctx.arc(75, 75, 50, 0, 2 * Math.PI, true)
			ctx.stroke();

			ctx.moveTo(110, 75);
			ctx.arc(75, 75, 35, 0, 1 * Math.PI, false)
			ctx.stroke();

			ctx.moveTo(95, 65);
			ctx.arc(90, 65, 5, 0, 2 * Math.PI, true)
			ctx.stroke();

			ctx.moveTo(65, 65);
			ctx.arc(60, 65, 5, 0, 2 * Math.PI, true)
			ctx.stroke();
		},
		drawPie () {
			var canvas = document.getElementById('pie')
			var ctx = canvas.getContext('2d')
			ctx.strokeStyle = "red"
			ctx.beginPath()
			ctx.arc(75, 75, 0, 2 * Math.PI, true)
			ctx.stroke()
		},
	},
}
</script>
<style lang='scss' scoped>
.box {
	width: 600px;
	height: 600px;
	border: 1px solid #e4e4e4;
	position: relative;
	.cell1 {
		position: absolute;
		top: 10px;
		left: 10px;
		width: 200px;
		height: 200px;
		border: 1px solid red;
	}
	.cell2 {
		position: absolute;
		left: 0;
		top: 0;
		width: 100px;
		height: 100px;
		border: 1px solid orange;
	}
}
#tutorial {
	border: 1px solid #e4e4e4;
}
</style>