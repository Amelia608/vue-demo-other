<template>
    <div>
        <h1>mock数据查询</h1>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="页码">
                <el-input
                    v-model="formInline.page"
                    placeholder="请输入"
                ></el-input>
            </el-form-item>
            <el-form-item label="数量">
                <el-input
                    v-model="formInline.count"
                    placeholder="请输入"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="getList">查询</el-button>
            </el-form-item>
        </el-form>
        <pre v-html="JSON.stringify(list, null, 2)"></pre>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            formInline: {
                page: 1,
                count: 10,
            },
            list: [],
        };
    },
    watch: {},
    mounted(){
      this.getList()
    },
    methods: {
        getList() {
            axios
                .get("http://your.domain.com/test", {
                    params: {
                        page: this.formInline.page,
                        count: this.formInline.count,
                    },
                })
                .then(({data}) => {
                    this.list = data.data;
                });
        },
    },
};
</script>
