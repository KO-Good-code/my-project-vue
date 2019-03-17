<template>
  <div class="textCenter">
    <el-card class="box-card">
      <div class="table">
        <el-table :data="userData.slice((currentPage-1)*10,currentPage*10)" border :default-sort = "{prop: 'time', order: 'descending'}">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column prop="time" sortable label="日期" width="180"></el-table-column>
          <el-table-column prop="username" sortable label="姓名" width="180"></el-table-column>
          <el-table-column prop="city" sortable label="地址"></el-table-column>
          <el-table-column sortable label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="success" @click="ss(scope.row)" size="mini" plain>编辑</el-button>
              <el-button type="danger" size="mini" plain>删除</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <div>
      <el-pagination @current-change="currentChange" :pager-count="list" layout="prev,pager,next" :total="userData.length" :page-size="10" :current-page="currentPage"></el-pagination>
    </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userData: [
        {
          time: '2015-3-1',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-3',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-23',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
        {
          time: '2015-3-2',
          username: '完整',
          city: '上海市普陀区金沙江路 1518 号'
        },
      ],
      currentPage: 1,
      index: 0,
      list: 7
    }
  },
  mounted () {
    this.count = this.userData 
  },
  methods: {
    ss (row) {
      console.log(row)
    },
    sort (a, b) {
      return a.time - b.time
    },
    currentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<style lang="less" scoped>
  .table{
    margin: 20px
  }
  .box-card{
    margin: 15px;
  }
</style>
