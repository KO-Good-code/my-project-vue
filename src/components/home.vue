<template>
  <div class="page">
    <el-row class="page_row" :gutter="10" type="flex" justify="space-between" style="margin: 0;">
      <el-col :span="4">
        <el-menu :default-active="defaultActive" mode="horizontal" text-color="white" background-color="#545c64" router>
          <el-menu-item index="index"><i class="el-icon-menu"></i>首页</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="16" :sm="12" :md="11" :lg="9" :xl="6">
        <el-menu :default-active="resume" @select="selectItems" mode="horizontal" text-color="#fff" theme="dark" background-color="#545c64" router>
          <el-menu-item index="resume">个人简历</el-menu-item>
          <el-menu-item index="blog">个人博客</el-menu-item>
          <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="editBlog"><i class="el-icon-edit"></i>编辑博客</el-menu-item>
            <el-menu-item index="editResume"><i class="el-icon-edit-outline"></i>编辑简历</el-menu-item>
          </el-submenu>
          <el-menu-item index="login"><i class="el-icon-setting"></i>管理员登陆</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-col class="view-page">
      <transition name="login-fade">
        <router-view></router-view>
      </transition>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      resume: 'resume'
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    async selectItems (index) {
      this.resume = index
    }
  }
}
</script>

<style scoped>
.view-page{
  margin-top: 40px;
  height: 75%;
}
.page_row{
  /*height: 40px;*/
  background: #545c64;
  color: white;
}
.el-menu{
  background: #409EEF;
  border: none;
  color: white;
}
</style>
