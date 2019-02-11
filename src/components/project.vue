<template>
<div>
  <div v-for="v in project">
    <el-row type="flex" justify="left">{{v.age}}</el-row>
    <el-row type="flex" justify="left" class="job">
      <el-col>{{v.name}}</el-col>
      <el-col>{{v.content}}</el-col>
    </el-row>
    <el-row type="flex" justify="left" v-for="(t,i) in v.project">{{i+1+'.'}}{{t}}</el-row>
  </div>
</div>
</template>

<script>
export default {
  name: 'project',
  data () {
    return {
      project: [
        {
          age: '2018.1 - 2018.3',
          name: '动态条漫新引擎重制作',
          content: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
