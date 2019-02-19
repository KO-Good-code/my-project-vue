<template>
 <div>
   <head-top></head-top>
   <section class="section_data">
     <header class="section_title">数据统计</header>
     <el-row :gutter="20" style="margin:0 0 20px 0">
       <el-col :span="4"><div class="data_list today_head"><span class="data_num head"></span>当日数据：</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{userCount}}</span>新增用户</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{orderCount}}</span>新增订单</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{adminCount}}</span>新增管理员</div></el-col>
     </el-row>
     <el-row :gutter="20" style="margin:0">
       <el-col :span="4"><div class="data_list all_head"><span class="data_num head"></span>总数据：</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{allUser}}</span>注册用户</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrder}}</span>订单</div></el-col>
       <el-col :span="4"><div class="data_list"><span class="data_num">{{allMin}}</span>管理员</div></el-col>
     </el-row>
   </section>
   <exhibition :sevenDay="sevenDay" :sevenDate="sevenDate"></exhibition>
 </div>
</template>

<script>
import headTop from '../components/headTop'
import exhibition from '../components/exhibition'

export default {
  data () {
    return {
      userCount: 222,
      orderCount: 156,
      adminCount: 456,
      allUser: 654,
      allOrder: 963,
      allMin: 789,
      sevenDay: ['2014-7-1', '2015-7-1', '2016-7-1'],
      sevenDate: [[114,22,33], [27,33,25], [83,55,95]]
    }
  },
  components: {
    headTop,
    exhibition
  },
  mounted () {

  }
}
</script>

<style lang='less' scoped>
.section_data{
  margin-top: 40px;
  margin-left: 40px;
  text-align: center;
  .section_title{
    font-size: 30px;
    margin-bottom: 15px;
  }
  .data_list{
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #E5E9F2;
    .data_num{
      color: #333;
      font-size: 26px;
    }
    .head{
      border-radius: 6px;
      font-size: 22px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head{
    background: #FF9800;
  }
  .all_head{
    background: #20A0FF;
  }
}
</style>
