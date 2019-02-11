<template>
  <div class="login_page">
      <section>
        <div>
          <p>后台管理登陆</p>
        </div>
        <el-form :model="loginForm" :rules="rules" :ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </section>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    async submitForm () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login_page{
  width: 320px;
  height: 210px;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top:-105px;
  margin-left: -160px;
}
.submit_btn{
  width: 100%;
  font-size: 16px;
}
</style>
