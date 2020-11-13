<!--
 * @Descripttion: 
 * @version: 
 * @Author: chenying
 * @Date: 2020-07-18 09:01:12
 * @LastEditors: chenying
 * @LastEditTime: 2020-07-18 09:49:41
--> 
<!-- element-select 下拉加载更多 -->
<template>
	<div>
		<el-select v-model="currentValue"
			placeholder="请选择"
			filterable
			remote
			reserve-keyword
			clearable
			:remote-method="remoteMethod"
			:loading="loading"
			@change="changeValue"
			v-loadmore='load'
			@focus="focusEvent">
			<el-option v-for="item in list"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			</el-option>
		</el-select>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: '',
	props: {
		value: {
			type: String,
			default: ''
		},
		keyName: {
			type: String,
			default: ''
		},
		Url: {
			type: String,
			default: ''
		},
		keyValue: {
			type: String,
			default: ''
		}
	},
	components: {},
	data () {
		return {
			list: [],
			loading: false,
			currentValue: this.value,
			currentPage: 1,
			per_page: 10,
			queryword: '',
			canmore: true,
		};
	},
	computed: {

	},
	watch: {

	},
	created () {

	},
	mounted () {

	},
	directives: {
		loadmore: {
			inserted: function (el, binding) {
				// 获取element-ui定义好的scroll盒子
				const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap');

				SELECTWRAP_DOM.addEventListener('scroll', function () {
					/*
					* scrollHeight 获取元素内容高度(只读)
					* scrollTop 获取或者设置元素的偏移值,常用于, 计算滚动条的位置, 当一个元素的容器没有产生垂直方向的滚动条, 那它的scrollTop的值默认为0.
					* clientHeight 读取元素的可见高度(只读)
					* 如果元素滚动到底, 下面等式返回true, 没有则返回false:
					* ele.scrollHeight - ele.scrollTop === ele.clientHeight;
					*/
					const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight;

					if (CONDITION) {
						binding.value();
					}
				})
			}
		}
	},
	methods: {
		focusEvent () {
			this.queryword = '';
			this.canmore = true;
			this.currentPage = 1;
			this.loading = true;
			// let data = {
			// 	page: this.currentPage,
			// 	per_page: this.per_page,

			// }
			// axios.post(this.Url, {
			// 	params: {
			// 		...data
			// 	},
			// }).then(res => {
			// 	this.list = res.data.data;
			// 	this.loading = false;
			// })
			axios({
				method: "POST",
				url: `http://business.dev.rs.com/investplat/b/centerinfo/search`,
				data: { deptType: 215, parentCode: "", deptName: "", pageNo: 1, pageSize: 20, deptIdList: null },
				headers: {
					'wcToken': 'f527af47d3ade4e7f8c3b9abdc9509b2'
				}
			}).then(function (res) {
				console.log(res);
				// this.loading = false;
			});
		},
		remoteMethod (query) {
			this.queryword = query;
			this.currentPage = 1;
			if (query !== '') {
				this.loading = true;
				// 请求数据
				let data = {
					page: this.currentPage,
					per_page: this.per_page,
				}
				data[this.keyName] = query;
				axios.get(this.Url, {
					params: {
						...data
					},
				}).then(res => {
					this.list = res.data.data;
					this.loading = false;
				})
			}
		},
		changeValue (val) {
			this.$emit('input', val);
		},
		load () {
			if (!this.canmore) {
				return
			}
			this.currentPage++;
			// 请求数据
			let data = {
				page: this.currentPage,
				per_page: this.per_page,
			}
			data[this.keyName] = this.queryword;
			axios.get(this.Url, {
				params: {
					...data
				},
			}).then(res => {
				if (res.data.data.length > 0) {
					this.list = this.list.concat(res.data.data);
				} else {
					this.canmore = false;
				}

			})

		}
	},
}
</script>
<style lang='scss' scoped>
</style>