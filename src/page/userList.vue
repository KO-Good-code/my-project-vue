<template>
  <div>
    <head-top></head-top>
    <div class="table">
      <el-table :data="userData" border>
        <el-table-column prop="time" label="日期" width="180"></el-table-column>
        <el-table-column prop="username" label="姓名" width="180"></el-table-column>
        <el-table-column prop="city" label="地址"></el-table-column>
      </el-table>
    </div>
    <div>
      <el-pagination layout="prev,pager,next" :total="count" :page-size="10" :current-page="currentPage"></el-pagination>
    </div>
  </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  data () {
    return {
      userData: [
        {
          time: '2015-3-23',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-23',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-23',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-23',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        }
      ],
      count: 2,
      currentPage: 1,
      index: 0,
      list: 10
    }
  },
  components: {
    headTop
  },
  methods: {
    ss () {
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="less" scoped>
  .table{
    margin: 20px
  }
</style>
