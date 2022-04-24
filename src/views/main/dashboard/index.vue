<template>
  <div class="wrap">
    我是首页
    <Pdf src="https://www.gjtool.cn/pdfh5/git.pdf"></Pdf>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Pdf from '@/components/pdf/index.vue'

export default defineComponent({
  components: {
    Pdf
  },
})
</script>

<style lang="scss" scoped>
  .wrap {
    width: 100%;
    height: 100%;
  }
</style>