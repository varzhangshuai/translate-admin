<template>
  <div class="wrap">
    <template v-if="step === 0" key="0">
      <div class="label_title">请选择要上传的字典</div>
      <el-select v-model="entry_value" class="m-2 label_item" placeholder="Select" size="large">
        <el-option
          v-for="item in entry_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button type="primary" @click="handleStep" size="large">下一步</el-button>
    </template>
    <template v-else key="1">
      <div class="progress"></div>
      <div>请选择您要导入的文件 
        <span>点击下载样例文件</span>
      </div>
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button type="primary">选择文件</el-button>
          </template>
          <el-button class="ml-3 btn_step-2" type="primary" size="large" @click="handleStep">
            下一步
          </el-button>

        </el-upload>
    </template>
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  setup() {
    const step = ref(0);
    const entry_options = [{
      label: "蒙英",
      value: 1
    },{
      label: "蒙汉",
      value: 2
    },{
      label: "蒙斯拉夫",
      value: 3
    }]
    const entry_value = ref(0);
    const uploadRef = ref()

    const submitUpload = () => {
      console.log(uploadRef, uploadRef.value)
      if(uploadRef.value) {
        uploadRef.value.submit()
      }
    }
    const handleStep = () => {
      if(step.value === 1) {
        console.log('xxxxxxxx')
        submitUpload();
        return;
      }
      step.value ++;
    }

    return {
      step,
      entry_options,
      entry_value,
      handleStep
    }
  }
});
</script>
<style lang="scss" scoped>
.wrap{
  .label_title{
    font-weight: 800;
    text-align: left;
  }
  .label_item{
    margin: 20px 0;
  }
  .btn_step-2{
    position: relative;
    top: 180px;
    left: -30px;
  }
}
</style>