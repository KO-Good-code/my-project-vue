<template>
 <el-card class="box-card">
   <el-form class="form" :model="form" label-width="100px" label-position="left">
     <el-form-item label="管理员ID:">
        <el-input v-model="form.userID" disabled="false"></el-input>
     </el-form-item>
     <el-form-item label="注册时间:">
       <el-input v-model="form.time" disabled="false"></el-input>
     </el-form-item>
     <el-form-item label="管理员账号:">
       <el-input v-model="form.username" disabled="false"></el-input>
        <el-button type="primary" plain size="mini">修改</el-button>
        <el-button type="danger" plain size="mini">取消</el-button>
     </el-form-item>
     <el-form-item label="管理员密码:">
       <el-input type="password" v-model="form.password" disabled="false"></el-input>
        <el-button type="primary" plain size="mini">修改</el-button>
        <el-button type="danger" plain size="mini">取消</el-button>
     </el-form-item>
     <el-form-item label="管理员权限:">
       <el-input v-model="form.Jurisdiction" disabled="false"></el-input>
     </el-form-item>
     <el-form-item label="管理员头像:">
       <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        >
        <img v-if="form.avatar" :src="form.avatar" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
     </el-form-item>
   </el-form>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      form:{
        userID: 123,
        time: '2017-2-14',
        username: '45678',
        Jurisdiction: '管理员',
        avatar: '',
        password:'123456'
      }
    }
  },
  components: {}
}
</script>

<style lang='less'>
.form{
  width: 60%;
  margin: 0 auto;
}
.el-input{
  width: 70%
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
