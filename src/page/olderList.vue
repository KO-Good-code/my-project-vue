<template>
 <el-card>
     <el-table v-loading="loading" :data="tableData.slice((currentPage-1)*10,currentPage*10)">
       <el-table-column type="selection" width="50"></el-table-column>
       <el-table-column type="expand">
         <template slot-scope="row">
           <el-form label-position="left" inline class="label-from">
             <el-form-item label="店铺名称">
               <span>{{row.row.name}}</span>
             </el-form-item>
             <el-form-item label="用户名">
               <span>{{row.row.address}}</span>
             </el-form-item>
             <el-form-item label="收货地址">
               <span>{{row.row.desc}}</span>
             </el-form-item>
             <el-form-item label="店铺 ID">
               <span>{{row.row.shopid}}</span>
             </el-form-item>
             <el-form-item label="店铺名称">
               <span>{{row.row.phone}}</span>
             </el-form-item>
           </el-form>
         </template>
       </el-table-column>
       <el-table-column label="订单ID" prop="name" width="250"></el-table-column>
       <el-table-column label="总价格" prop="address" width="250"></el-table-column>
       <el-table-column label="订单状态" prop="desc" width="250"></el-table-column>
       <el-table-column label="操作" fixed="right" width="300">
          <template slot-scope="scope">
            <el-button type="success" @click="ss(scope.row)" icon="el-icon-edit" size="mini" round plain>编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" round plain>删除</el-button>
          </template>
        </el-table-column>
     </el-table>
     <el-pagination @current-change="currentChange" :pager-count="list" layout="prev,pager,next" :total="tableData.length" :page-size="10" :current-page="currentPage"></el-pagination>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        {
          name: '好吃你就多吃点',
          phone: '001',
          category: '江浙小吃、小吃零食',
          desc: '好吃你就多吃点',
          shopid: '001',
          address: '上海市普陀区金沙江路',
          shop: '好吃店'
        }
      ],
      currentPage: 1,
      index: 0,
      list: 7,
      loading: false
    }
  },
  methods: {
    currentChange (val) {
      this.currentPage = val
    }
  }
}
</script>

<style lang="less" scope>
.el-card{
  margin: 15px;
}
.label-from label{
  width: 20%;
  color: #99a9bf;
}
.label-from .el-form-item{
  width: 45%;
}
</style>
