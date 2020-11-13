<template>
	<div>
		<countTo class="countto"
			:startVal='startVal'
			:endVal='endVal'
			:duration='3000'
			prefix="$" />
		<p class="mt20">发表时间:{{date | convertDate}}</p>
		<p class="mt20">formateDate:{{formatDate||'--'}}</p>
		<hr class="mt20 mb20">
		<div>
			<span class="mr10"
				href="MM"
				id="msg">{{msg}}</span>
			<el-button type="primary"
				@click="updateMsg">更新MSG</el-button>
		</div>
		<hr class="mt20 mb20">
		<div class="img-box">
			<img src="url"	alt="">
		</div>
    <div>
        <ul>
            <items v-for="(model, index) in list" :model="model" :key="index"></items>
        </ul>
    </div>
	</div>
</template>
<script>
import Items from './components/item'
export default {
  components:{Items},
	data () {
		return {
			msg: '未更新',
			startVal: 0,
			endVal: 1000,
			date: new Date(),
			formatDate: '',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1588149115879&di=3b607c40d7b7798b72dab517828604e8&imgtype=0&src=http%3A%2F%2Fuploads.5068.com%2Fallimg%2F1712%2F151-1G2060U603.jpg',
      list: [
              {
                  "id": "1",
                  "menuName": "项目管理",
                  "childTree": [{
                      "menuName": "项目进度",
                      "childTree": [{
                          "menuName": "项目一",
                          "childTree": [{ "menuName": "详细信息" }]
                      }]
                  }, {
                      "menuName": "任务安排"
                  }]
              }, 
              {
                  "id": "2",
                  "menuName": "数据统计"
              }, 
              {
                  "id": "3",
                  "menuName": "人员管理"
              }]
		}
	},
	mounted () {
		this.formatDate = this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
	},
	methods: {
		updateMsg () {
			this.msg = '更改数据'
			let msgDom = document.getElementById('msg')
			console.log(msgDom.textContent)
			this.$nextTick().then(() => {
				console.log(msgDom.textContent)
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.countto {
	font-size: 20px;
	color: $--color-primary;
}
.img-box {
	width: 100px;
	height: 100px;
  border: 1px solid #f4f4f4;
  border-radius: 3px;
	position: relative;
	img {
    max-width: 100%;
    max-height: 100%;
		&::after {
      font-family: "iconfont" !important;
			content: "\ec0d";
      position: absolute;
      font-size: 40px;
      color: #ccc;
			width: 100%;
			height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
		}
	}
}
</style>