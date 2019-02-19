<template>
 <div class="header_container">
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{path:'/manage'}">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(v, i) in $route.meta" :key="i">{{v}}</el-breadcrumb-item>
  </el-breadcrumb>
  <el-dropdown  @command="choiceCommand" type="primary" style="margin-right:15px">
    <img src="../assets/logo.png" class="headImg">
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="home">首页</el-dropdown-item>
      <el-dropdown-item command="signOut">退出</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
 </div>
</template>

<script>
export default {
  name: 'headTop',
  data () {
    return {}
  },
  methods: {
    async choiceCommand (command) {
      if (command === 'home') {
        this.$router.push('/manage')
      } else if (command === 'signOut') {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/style';
.header_container{
  background-color: #EFF2F7;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.headImg{
  .wh(36px,36px);
  border-radius: 50%;
}
.el-dropdown-menu__item{
  text-align: center;
  width: 50px
}
</style>
