<template>
    <el-row class="resume_page" type="flex" justify="center" style="height: 100%;">
      <el-col :xs="24" :sm="18" class="container">
        <el-container style="height: 100%;">
          <el-aside width="200px" class="aside">
            <el-menu :default-active="defaultActive" text-color="#fff" background-color="#545c64" router>
              <el-menu-item index="manage">个人信息</el-menu-item>
              <el-menu-item index="work">工作经验</el-menu-item>
              <el-menu-item index="project">项目经验</el-menu-item>
              <el-menu-item index="education">教育背景</el-menu-item>
              <el-menu-item index="personal">个人简介</el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <transition name="login-fade">
              <router-view></router-view>
            </transition>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'resume',
  data () {
    return {
      openFlag: false
    }
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  }
}
</script>

<style scoped>
.resume_page{
  margin-top: 40px;
}
.container{
  background: gainsboro;
  border-radius: 5px;
}
.aside{
  height: 100%;
  background: #545c64;
}
.el-menu{
  background: #409EEF;
  border: none;
  color: white;
}
</style>
