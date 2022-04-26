<template>
    <el-form :model="form" :rules="rules" ref="ruleForm" label-width="120px" style="margin:50px auto;width: 50%;">
        <el-form-item label="名称：" prop="name">
          <el-input v-model="form.name" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="数字：" prop="number">
        <el-input v-model="form.number" oninput="value=value.replace(/[^\d]/g,'')" placeholder="只能输入正整数"></el-input>
        </el-form-item>
            <el-form-item label="选择器：" prop="select">
                <el-select v-model="form.choose" placeholder="请选择" clearable>
                    <el-option v-for="item in selectData" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
            </el-form-item>
        <el-form-item label="单选框：" prop="radio">
        <el-radio-group v-model="form.radio">
            <el-radio v-for="item in radioData" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
        </el-form-item>
        <el-button type="primary" @click="submit" style="100px" size="medium">提交</el-button>
    </el-form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { add, update } from '@/api/table'
import { useRouter, useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const router = useRouter()
    const route = useRoute()
    const query = route.query
    const ruleForm= ref(null)
    let form = ref({
      name: ''
    })
    const rules = {
      name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
      number: [{ required: true, message: '请输入数字', trigger: 'blur' }],
      choose: [{ required: true, message: '请选择', trigger: 'blur' }],
      radio: [{ required: true, message: '请选择', trigger: 'blur' }]
    }
    const selectData = [
   { value: 1, label: '运动' },
      { value: 2, label: '健身' },
    { value: 3, label: '跑酷' },
  { value: 4, label: '街舞' }
]

 const radioData = [
  { value: 1,    label: '今天' },
  { value: 2, label: '明天' },
  { value: 3, label: '后天' },
]
    init()
    function init() { // 用于判断新增还是编辑功能
      if (query.id) {
        form.value = JSON.parse(JSON.stringify(query)) // 数量量少的直接使用这个转
      } else {

      }
    }
    return {
      form,
      rules,
      ruleForm,
      selectData,
      radioData
    }
  },
  methods: {
    submit() {
      if (this.ruleForm) {
        this.ruleForm.validate((valid) => {
          if (valid) {
            let params = this.form
            if (this.layer.row) {
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
  
</style>