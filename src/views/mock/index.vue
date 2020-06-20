<!--
 * @Descripttion: 
 * @version: 
 * @Author: june chen
 * @Date: 2020-05-07 22:11:03
 * @LastEditors: june chen
 * @LastEditTime: 2020-06-20 10:53:20
--> 
<template>
  <div>
    <el-button type="primary"
      @click="sendData">传递数据</el-button>
    <hr>
    <h1 class="f20 mb20">mock数据查询</h1>
   
    <el-form :inline="true"
      :model="formInline"
      class="demo-form-inline">
      <el-form-item label="页码">
        <el-input v-model="formInline.page"
          placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="数量">
        <el-input v-model="formInline.count"
          placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          @click="getList">查询</el-button>
      </el-form-item>
    </el-form>
    <pre v-html="JSON.stringify(list, null, 2)"></pre>
  </div>
</template>
<script>
import axios from "axios"
import eventBus from "@/utils/event-bus"
export default {
  data () {
    return {
      formInline: {
        page: 1,
        count: 10,
      },
      list: [],
    };
  },
  watch: {},
  beforeCreate () {
    console.log('A页面 beforeCreate')
  },
  created () {
    console.log('A页面 created')
  },
  beforeMount () {
    console.log('A页面 beforeMount')
  },
  mounted () {
    this.getList();
    console.log('A页面 mounted')
  },
  beforeUpdate () {
    console.log('A页面 beforeUpdate')
  },
  updated () {
    console.log('A页面 updated')
  },
  beforeDestroy () {
    console.log('A页面 beforeDestroy')
  },
  destroyed () {
    console.log('A页面 destroyed')
    eventBus.$emit('mockdata', this.list); 
  },
  methods: {
    sendData () {
       
      // eventBus.$emit('mockdata',this.list)
      this.$router.push({ name: 'elementUI', path: '/element-ui' })
    },
    getList () {
      axios
        .get("http://your.domain.com/test", {
          params: {
            page: this.formInline.page,
            count: this.formInline.count,
          },
        })
        .then(({ data }) => {
          this.list = data.data;
        });
    },
  },
};
</script>
