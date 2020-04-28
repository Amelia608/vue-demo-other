
<template>
	<div>
		<countTo class="countto"
			:startVal='startVal'
			:endVal='endVal'
			:duration='3000'
			prefix="$" />
		<p class="mt20">发表时间:{{date | convertDate}}</p>
    <p class="mt20">formateDate:{{formatDate||'--'}}</p>
	</div>
</template>
<script>
export default {
	data () {
		return {
			startVal: 0,
			endVal: 1000,
      date: new Date(),
      formatDate:''
		}
	},
	mounted () {
    this.formatDate=this.$moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
	}
}
</script>
<style lang="scss" scoped>
.countto {
	font-size: 20px;
	color: $--color-primary;
}
</style>