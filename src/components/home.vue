<template>
  <div class="page">
    <el-row :gutter="20">
      <el-col :span="4">
        <el-menu default-active="activeIndex" mode="horizontal" text-color="white">
          <el-menu-item index="index"><i class="el-icon-menu"></i>小黑屋</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="11" :offset="9">
        <el-menu default-active="2" mode="horizontal" text-color="white" background-color="#545c64" router>
          <el-menu-item index="resume">个人简历</el-menu-item>
          <el-menu-item index="blog">个人博客</el-menu-item>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="blog">编辑博客</el-menu-item>
            <el-menu-item index="resume">编辑简历</el-menu-item>
          </el-submenu>
          <el-menu-item index="root"><i class="el-icon-menu"></i>管理员登陆</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      login: 'login'
    }
  }
}
</script>

<style scoped>
.el-col{

}
.el-row{
  /*height: 40px;*/
  background: #409EEF;
  color: white;
}
.el-menu{
  background: #409EEF;
  border: none;
  color: white;
}
</style>
