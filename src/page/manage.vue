<template>
  <div class="page">
    <el-row class="canter" style="margin:0" :gutter="10" type="flex" justify="space-between">
      <el-col :span="4" class="page_row">
        <el-menu :default-active="defaultActive" theme="dark" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
          <el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="shopList">商家列表</el-menu-item>
            <el-menu-item index="foodList">食品列表</el-menu-item>
            <el-menu-item index="orderList">订单列表</el-menu-item>
            <el-menu-item index="adminList">管理员列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>添加数据</template>
            <el-menu-item index="addShop">添加商铺</el-menu-item>
            <el-menu-item index="addFoods">添加商品</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-star-on"></i>图表</template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
            <el-menu-item index="newMember">用户数据</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-edit"></i>编辑</template>
            <el-menu-item index="upImg">上传图片</el-menu-item>
            <el-menu-item index="txtVim">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-setting"></i>设置</template>
            <el-menu-item index="adminSet">管理员设置</el-menu-item>
            <el-menu-item index="sendMessage">发送通知</el-menu-item>
          </el-submenu>
          <el-menu-item index="explain"><i class="el-icon-warning"></i>说明</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;padding: 0;background:#fff">
        <head-top></head-top>
        <transition name="login-fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('/', '')
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="less" scoped>
.view-page{
  margin-top: 40px;
  height: 75%;
}
.page_row{
  background: #545c64;
  color: white;
  overflow: auto;
}
.el-menu{
  background: #409EEF;
  border: none;
  color: white;
}
.el-menu-item{
  min-width: 100px;
}
</style>
