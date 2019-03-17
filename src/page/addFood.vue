<template>
 <el-card>
   <el-form ref="form" :model="from" label-width="80px">
     <el-row class="categoryForm_row">
       <el-form-item label="食品种类" prop="name">
        <el-select style="width:100%" v-model="from.name" placeholder="">
          <el-option v-for="(v,i) in activity "
            :key="i"
            :label="v.name"
            :value="v.name"
          ></el-option>
       </el-select>
     </el-form-item>
      <el-row class="add_category_Form" :class="showAddCategory ? 'showEdit':''">
        <el-form-item label="食品种类" prop="name">
          <el-input v-model="categoryForm.name"></el-input>
        </el-form-item>
        <el-form-item label="种类描述" prop="description">
          <el-input v-model="categoryForm.description"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitcategoryForm('categoryForm')">提交</el-button>
        </el-form-item>
      </el-row>
      <div class="add_category_button" @click="showAddCategory = !showAddCategory">
        <i class="el-icon-caret-top edit_icon" v-if="showAddCategory"></i>
        <i class="el-icon-caret-bottom edit_icon" v-else slot="icon"></i>
        <span>添加食品种类</span>
      </div>
     </el-row>
     <el-form-item label="食品名称">
       <el-input v-model="from.address"></el-input>
     </el-form-item>
     <el-form-item label="食品活动">
       <el-input v-model="from.phone"></el-input>
     </el-form-item>
     <el-form-item label="食品详情">
       <el-input v-model="from.introduce"></el-input>
     </el-form-item>
     <el-form-item label="食品特点">
       <el-select v-model="from.name" placeholder="">
         <el-option v-for="(v,i) in activity "
            :key="i"
            :label="v.name"
            :value="v.name"
          ></el-option>
       </el-select>
     </el-form-item>
     <el-form-item label="上传食品图片">
       <el-upload ref="upload" action="" :limit="1" list-type="picture-card" :auto-upload="false"><i class="el-icon-plus"></i></el-upload>
     </el-form-item>
     <el-form-item label="优惠活动">
       <template>
        <el-radio v-model="radio" label="1">单规格</el-radio>
        <el-radio v-model="radio" label="2">多规格</el-radio>
      </template>
     </el-form-item>
     <el-row v-if="radio === '1'">
       <el-form-item label="包装费">
        <el-input-number v-model="from.take_out_money" :min="0" :max="20"></el-input-number>
        </el-form-item>
      <el-form-item label="价格">
        <el-input-number v-model="from.initial_delivery_price" :min="0" :max="100"></el-input-number>
      </el-form-item>
     </el-row>
     <el-row v-if="radio === '2'" class="textCenter">
       <el-button type="primary" @click="addVisible = true">添加规格</el-button>
       <el-table :data="activity" align="cneter">
        <el-table-column prop="icon_name" label="规格"></el-table-column>
        <el-table-column prop="name" label="包装费"></el-table-column>
        <el-table-column prop="description" label="价格"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="row">
            <el-button size="mini" type="danger" @click="deletRow(row)" icon="el-icon-delete" plain>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
     </el-row>
     <el-form-item>
       <el-button type="primary" @click="deletRow(row)" plain>确定添加食品</el-button>
     </el-form-item>
   </el-form>
   <el-dialog title="添加规格" :visible.sync="addVisible" width="50%" >
      <el-form>
        <el-form-item label="规格" label-width="100px">
          <el-input ></el-input>
        </el-form-item>
        <el-form-item label="包装费" label-width="100px">
          <el-input-number v-model="from.take_out_money" :min="0" :max="20"></el-input-number>
        </el-form-item>
        <el-form-item label="价格" label-width="100px">
          <el-input-number v-model="from.initial_delivery_price" :min="0" :max="100"></el-input-number>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
   </el-dialog>
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
      radio: '1',
      addVisible: false,
      showAddCategory: false,
      categoryForm: {
        name:'',
        description: ''
      },
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
    },
    submitcategoryForm () {

    }
  }
}
</script>

<style lang="less" scope>
.el-card{
  margin: 15px;
}
.el-form{
  margin: 0 auto;
  width: 600px;
}
.el-table{
  border: 1px solid #f6f6f6;
  margin-bottom: 30px
}
.el-table th{
  background: #f7f7f7
}
.add_category_button{
		text-align: center;
		line-height: 40px;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		
		border-top: none;
		transition: all 400ms;
		&:hover{
			background: #f9fafc;
			span, .edit_icon{
				color: #20a0ff;
			}
		}
		span{
			transition: all 400ms;
		}
		.edit_icon{
			color: #ccc;
			transition: all 400ms;
		}
  }
.add_category_Form{
  height: 0;
  overflow: hidden;
  transition: all 400ms;
  background: #f9fafc;
}
.showEdit{
  height: 175px;
}
.categoryForm_row{
  margin-bottom: 15px;
  border: 1px solid #eaeefb;
  border-radius: 6px;
  .el-form-item{
    margin: 10px
  }
}
</style>
