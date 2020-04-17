<template>
    <div class="component-nav">
        <h1>后台管理系统</h1>
        <div>
            <el-dropdown szie="mini">
                <el-button type="default" szie="mini">
                    <i class="el-icon-setting el-icon--left"></i>设置<i
                        class="el-icon-arrow-down el-icon--right"
                    ></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item icon="el-icon-plus">New File</el-dropdown-item>
                    <el-dropdown-item icon="el-icon-circle-plus">Files Left</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<style lang="scss" scoped>
  .component-nav{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding:0 20px;
    border-bottom: 1px solid #f4f4f4;
  }
</style>