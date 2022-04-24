<template>
  <div class="wrap">
      <iframe width="100%" height="100%" scrolling="no" :src="`/src/assets/pdf/web/viewer.html?file=${src}`"></iframe>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
export default defineComponent({
  props: {
    src: {
      type: String,
      default: "",
      required: true
    }
  },
  setup(props, ctx) {
  }
})
</script>

<style lang="scss" scoped>
  .wrap{
      width: 100%;
      height: 90%;
  }
</style>