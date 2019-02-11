<template>
  <div class="work">
    <div v-for="v in work">
      <el-row type="flex" justify="left">{{v.age}}</el-row>
      <el-row type="flex" justify="left" class="job">
        <el-col>{{v.company}}</el-col>
        <el-col>{{v.job}}</el-col>
        <el-col>{{v.place}}</el-col>
      </el-row>
      <el-row type="flex" justify="left" v-for="(t,i) in v.project">{{i+1+'.'}}{{t}}</el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "work",
  data () {
    return {
      work: [
        {
          age: '2017.10 - 2019.2',
          company: '成都像素星空有限公司',
          job: '前端工程师',
          place: '成都市',
          project: [
            '负责公司产品的前端部分，配合后台与设计师完成产品，保证产品的质量。',
            '根据用户反馈，和市场需求，对公司的产品优化，更新提出改进意见。',
            '根据需求确定产品的技术要求，制作周期，分析产品不合理需求，提出修改意见。'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .work{
    text-align: left;
    line-height: 40px;
  }
  .job{
    color:#409EEF;
  }
</style>
