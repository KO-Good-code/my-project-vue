<template>
  <div class="manage">
    <el-row v-for="(v, t) in manage" type="flex" justify="left">
      <el-col :span="3">{{t}}：</el-col>
      <el-col :span="15">{{v}}</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      manage: {
        '姓名': '陈锐',
        '年龄': '24岁',
        '出生日期': '1995.2.16',
        '性格': '开朗， 外向，稳重',
        '学历': '本科',
        '专业': '电子信息技术',
        '身高': '170cm',
        '体重': '51kg',
        '电话': '13008170842',
        '微信': 'cr1314520484',
        '邮箱': '734064248@qq.com',
        '地址': '广东省惠州市惠阳区淡水镇'
      }
    }
  }
}
</script>

<style scoped>
.manage{
  text-align: left;
  line-height: 40px;
}
</style>
