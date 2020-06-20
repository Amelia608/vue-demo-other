<template>
  <div>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="limit"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic mt20"
    >
      <el-form-item label="邮箱">
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
                    required: true,
                    message: '域名不能为空',
                    trigger: 'blur',
                }"
      >
        <el-input v-model="domain.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-row class="mb20">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
     <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <el-table :data="tableData" style="width: 100%" class="mt20">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import eventBus from "@/utils/event-bus"
export default {
  data () {
    return {
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      fileList: [],
      list: [],
      limit: 1,
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
    };
  },
  beforeCreate () {
    console.log('B页面 beforeCreate')
  },
  created () {
    eventBus.$on('mockdata', this.getmock)
    console.log('B页面 created')
  },
  beforeMount () {
    console.log('B页面 beforeMount')
  },
  mounted () {
    console.log('B页面 mounted')
  },
  beforeUpdate () {
    console.log('B页面 beforeUpdate')
  },
  updated () {
    console.log('B页面 updated')
  },
  beforeDestroy () {
    console.log('B页面 beforeDestroy')
    eventBus.$off('mockdata')
  },
  destroyed () {
    console.log('B页面 destroyed')
  },
  methods: {
    getmock (val) {
      console.log('mock', val)
      this.list = val
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain (item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain () {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    handlePreview (file) {
      console.log("preview", file);
    },
    handleRemove (file, fileList) {
      console.log("remove", file, fileList);
    },
    beforeRemove (file, fileList) {
      console.log("beforeRemove", file, fileList);
    },
    handleExceed (files, fileList) {
      this.$message({
        type: "warning",
        message: `当前限制选择${this.limit}个文件，本次选择了${
          files.length
          }个文件，共选择了${files.length + fileList.length}`,
      });
    },
  },
};
</script>
