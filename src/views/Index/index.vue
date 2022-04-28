<template>
  <div class="wrap">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">当前共有待审核：</div>
        
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
    </el-row>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<style lang="scss" scoped>
  .wrap {
    max-width: 100%;
    height: 100%;
    padding: 20px;
    
  }
  .el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  padding: 16px 0;
}
.bg-purple{
  background: rgba(192,132,252, 1);
}
</style>