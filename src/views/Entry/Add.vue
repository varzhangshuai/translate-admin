<template>
  <div>
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin-right:30px;">
      <el-form-item label="词头" prop="old">
        <el-input v-model="form.title" placeholder="请输入原密码" show-password></el-input>
      </el-form-item>
			<el-form-item label="词条释文" prop="new">
			</el-form-item>
    </el-form>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    let form = ref({
      title: '',
      content: ''
    })
    const rules = {
      old: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
      new: [{ required: true, message: '请输入新密码', trigger: 'blur' }],
    }
    return {
      form,
      rules
    }
  }
});
</script>