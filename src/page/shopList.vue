<template>
 <div>
   <head-top></head-top>
   <div>
     <el-table :data="tableData" border>
       <el-table-column type="expand">
         <el-form inline label-position="left">
           
         </el-form>
       </el-table-column>
     </el-table>
   </div>
 </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  data () {
    return {
      tableData: []
    }
  },
  components: {
    headTop
  }
}
</script>

<style>
</style>
