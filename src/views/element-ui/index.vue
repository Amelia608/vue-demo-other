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
            <div slot="tip" class="el-upload__tip">
                只能上传jpg/png文件，且不超过500kb
            </div>
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
                <el-button
                    type="primary"
                    @click="submitForm('dynamicValidateForm')"
                    >提交</el-button
                >
                <el-button @click="addDomain">新增域名</el-button>
                <el-button @click="resetForm('dynamicValidateForm')"
                    >重置</el-button
                >
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
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: [],
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
    mounted() {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        removeDomain(item) {
            var index = this.dynamicValidateForm.domains.indexOf(item);
            if (index !== -1) {
                this.dynamicValidateForm.domains.splice(index, 1);
            }
        },
        addDomain() {
            this.dynamicValidateForm.domains.push({
                value: "",
                key: Date.now(),
            });
        },
        handlePreview(file) {
            console.log("preview", file);
        },
        handleRemove(file, fileList) {
            console.log("remove", file, fileList);
        },
        beforeRemove(file, fileList) {
            console.log("beforeRemove", file, fileList);
        },
        handleExceed(files, fileList) {
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
