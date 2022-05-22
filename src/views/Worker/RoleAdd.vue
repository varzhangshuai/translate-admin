<template>
  <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin:50px auto;width: 50%;">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="description">
      <el-input v-model="form.description" type="textarea" placeholder="只能输入备注"></el-input>
    </el-form-item>
    <el-button type="primary" @click="submit" style="100px" size="medium">提交</el-button>
  </el-form>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import { add, update } from '@/api/role'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const query = route.query
    const ruleForm = ref(null)
    let form = reactive({
      name: '',
      description: '',
      menuIds: []
    })
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      description: [{ required: true, message: '请输入备注', trigger: 'blur' }]
    }
    init()
    function init() { // 用于判断新增还是编辑功能
      if (query.id && query.id !== '0') {
        form = JSON.parse(JSON.stringify(query)) // 数量量少的直接使用这个转
      }
    }
    return {
      form,
      rules,
      ruleForm
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.form.id) {
              this.updateForm(params)
            } else {
              this.addForm(params)
            }
          } else {
            return false;
          }
        });
      }
    },
    // 新增提交事件
    addForm(params) {
      add(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$emit('getTableData', true)
        })
    },
    // 编辑提交事件
    updateForm(params) {
      update(params)
        .then(res => {
          this.$message({
            type: 'success',
            message: '编辑成功'
          })
          this.$emit('getTableData', false)
        })
    }
  }
})
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
}
</style>