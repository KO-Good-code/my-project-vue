<template>
  <div class="textCenter">
    <el-card class="box-card">
      <div class="table">
        <el-table :data="userData.slice((currentPage-1)*10,currentPage*10)" border :default-sort = "{prop: 'time', order: 'descending'}">
          <el-table-column type="selection" width="50"></el-table-column>
          <el-table-column prop="age" sortable label="日期" width="180"></el-table-column>
          <el-table-column prop="name" sortable label="姓名" width="180"></el-table-column>
          <el-table-column prop="city" sortable label="地址"></el-table-column>
          <el-table-column sortable label="操作" fixed="right">
            <template slot-scope="scope">
              <el-button type="success" @click="levelvalidate(scope.row)" size="mini" plain>编辑</el-button>
              <el-button type="danger" @click="removeUser(scope.row)" size="mini" plain>删除</el-button>
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
import { getUserDate, upUserDate } from '../api/getData.js'
export default {
  data () {
    return {
      userData: [],
      currentPage: 1,
      index: 0,
      list: 7
    }
  },
  mounted () {
    this.count = this.userData 
    this.getUserDate()
  },
  methods: {
    async upUser (row) {
      if(this.$store.state.level === 0){
        await upUserDate(row).then(res => {
          console.log(res)
        })
      }else{
        this.$message({
          type: 'error',
          message: '你无权修改用户信息！'
        })
      }
    },
    levelvalidate () {
      if(this.$store.state.level === 0){
        console.log(1111)
      }else{
        this.$message({
          type: 'error',
          message: '你无权修改用户信息！'
        })
      }
    },
    async removeUser (row) {
      if(this.$store.state.level === 0){
        console.log(1111)
      }else{
        this.$message({
          type: 'error',
          message: '你无权删除该用户信息！'
        })
      }
    },
    sort (a, b) {
      return a.time - b.time
    },
    async currentChange (val) {
      this.currentPage = val
      if(this.currentPage*10>this.userData.length){
        await this.getUserDate()
      }
      
    },
    // 获取用户列表
    getUserDate () {
      getUserDate({params:{start:(this.currentPage-1)*10,end:this.currentPage*10}})
        .then(res => {
          console.log(res.data)
          res.data.forEach(v => {
            let data = {
              age: new Date(v.age).toLocaleDateString(),
              name: v.name,
              city: v.city+v.region+v.address,
              uuid: v.uuid
            }
            this.userData.push(data)
          })
        })
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
