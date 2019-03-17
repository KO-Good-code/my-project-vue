<template>
 <el-card class="textCenter">
     <el-table :data="tableData.slice((currentPage-1)*10,currentPage*10)">
       <el-table-column type="selection" width="50"></el-table-column>
       <el-table-column type="expand">
         <template slot-scope="row">
           <el-form label-position="left" inline class="label-from">
             <el-form-item label="商品名称">
               <span>{{row.row.name}}</span>
             </el-form-item>
             <el-form-item label="所属商店">
               <span>{{row.row.shop}}</span>
             </el-form-item>
             <el-form-item label="商品 ID">
               <span>{{row.row.id}}</span>
             </el-form-item>
             <el-form-item label="店铺 ID">
               <span>{{row.row.shopid}}</span>
             </el-form-item>
             <el-form-item label="店铺地址">
               <span>{{row.row.address}}</span>
             </el-form-item>
             <el-form-item label="商品分类">
               <span>{{row.row.category}}</span>
             </el-form-item>
           </el-form>
         </template>
       </el-table-column>
       <el-table-column label="商品ID" prop="id"></el-table-column>
       <el-table-column label="商品名称" prop="name"></el-table-column>
       <el-table-column label="商品评分" prop="desc"></el-table-column>
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
          id: '001',
          category: '江浙小吃、小吃零食',
          desc: '好吃你就多吃点',
          shopid: '001',
          address: '上海市普陀区金沙江路',
          shop: '好吃店'
        }
      ],
      currentPage: 1,
      index: 0,
      list: 7
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
  width: 50%;
  color: #99a9bf;
}
.label-from .el-form-item{
  width: 45%;
}
</style>
