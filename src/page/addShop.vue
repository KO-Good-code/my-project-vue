<template>
 <el-card>
   <el-form ref="form" :model="from" label-width="80px">
     <el-form-item label="店铺名称" prop="name">
       <el-input v-model="from.name"></el-input>
     </el-form-item>
     <el-form-item label="详细地址">
       <el-input v-model="from.address"></el-input>
     </el-form-item>
     <el-form-item label="联系电话">
       <el-input v-model="from.phone"></el-input>
     </el-form-item>
     <el-form-item label="店铺简介">
       <el-input v-model="from.introduce"></el-input>
     </el-form-item>
     <el-form-item label="店铺标语">
       <el-input v-model="from.slogan"></el-input>
     </el-form-item>
     <el-form-item label="店铺分类">
       <el-cascader :options="storeOptions" v-model="defineOp" expand-trigger="hover"></el-cascader>
     </el-form-item>
     <el-form-item label="店铺特点">
       <el-switch active-text="品牌保证" v-model="from.is_brand"></el-switch>
       <el-switch active-text="蜂鸟专送" v-model="from.is_give"></el-switch>
       <el-switch active-text="新开店铺" v-model="from.is_newOpen"></el-switch>
       <el-switch active-text="外卖保" v-model="from.take_out_food"></el-switch>
       <el-switch active-text="准时达" v-model="from.on_time"></el-switch>
       <el-switch active-text="开发票" v-model="from.invoice"></el-switch>
     </el-form-item>
     <el-form-item label="配送费">
       <el-input-number v-model="from.take_out_money" :min="0" :max="20"></el-input-number>
     </el-form-item>
     <el-form-item label="起送价">
       <el-input-number v-model="from.initial_delivery_price" :min="0" :max="100"></el-input-number>
     </el-form-item>
     <el-form-item label="起送时间">
       <el-time-picker v-model="from.initial_delivery_time" placeholder="起始时间"></el-time-picker>
       <el-time-picker v-model="from.initial_delivery_time" placeholder="结束时间"></el-time-picker>
     </el-form-item>
     <el-form-item label="上传店铺头像">
       <el-upload ref="upload" action="" :limit="1" list-type="picture-card" :auto-upload="false"><i class="el-icon-plus"></i></el-upload>
     </el-form-item>
     <el-form-item label="上传餐饮服务许可证">
       <el-upload ref="upload" action="" :limit="1" list-type="picture-card" :auto-upload="false"><i class="el-icon-plus"></i></el-upload>
     </el-form-item>
     <el-form-item label="上传营业执照">
       <el-upload ref="upload" action="" :limit="1" list-type="picture-card" :auto-upload="false"><i class="el-icon-plus"></i></el-upload>
     </el-form-item>
     <el-form-item label="优惠活动">
       <el-select v-model="from.party.value">
         <el-option v-for="i in from.party.options" :key="i.value" :label="i.label" :value="i.value"></el-option>
       </el-select>
     </el-form-item>
     <el-table :data="activity" align="cneter">
       <el-table-column prop="icon_name" label="活动标题"></el-table-column>
       <el-table-column prop="name" label="活动名称"></el-table-column>
       <el-table-column prop="description" label="活动详情"></el-table-column>
       <el-table-column label="操作">
         <template slot-scope="row">
           <el-button size="mini" type="danger" @click="deletRow(row)" icon="el-icon-delete" plain>删除</el-button>
         </template>
       </el-table-column>
     </el-table>
     <el-form-item>
       <el-button type="success" @click="deletRow(row)" plain>立即创建</el-button>
     </el-form-item>
   </el-form>
 </el-card>
</template>

<script>
export default {
  data () {
    return {
      from:{
        name: null,
        address: null,
        phone: null,
        introduce: null,
        slogan: null,
        is_brand: false,
        is_give: false,
        is_newOpen: false,
        take_out_food: false,
        invoice: false,
        on_time: false,
        take_out_money: 1,
        initial_delivery_price: 20,
        initial_delivery_time: null,
        party: {
          value: null,
          options:[
            {label:'新店优惠', value:'选项1'}
          ]
        }
      },
      storeOptions: [
        {
          label: '快餐便当',
          value: '快餐便当',
          children: [
            {
              label: '简食',
              value: '简食'
            }
          ]
        }
      ],
      defineOp: ['快餐便当', '简食'],
      activity: [
        {icon_name: '减', name: '满减优惠',	description: '满30减5，满60减8'},
        {icon_name: '减', name: '满减优惠',	description: '满30减5，满60减6'},
        {icon_name: '减', name: '满减优惠',	description: '满30减5，满60减7'},
      ]
    }
  },
  components: {},
  methods: {
    deletRow (row) {
      this.activity.splice(row.$index,1)
    }
  }
}
</script>

<style lang="less" scoped>
.el-card{
  margin: 15px;
}
.el-form{
  margin: 0 auto;
  width: 600px;
}
.el-table{
  border: 1px solid #f5f5f5;
  margin-bottom: 30px
}
.el-table th{
  background: #f7f7f7
}
</style>
