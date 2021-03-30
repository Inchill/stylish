<template>
  <div id="home-page">
    <st-progress></st-progress>
  </div>
</template>

<script lang="typescript">
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  components: {
    StProgress: defineAsyncComponent(() => import('@/components/progress/index.vue'))
  }
})
</script>

<style lang="stylus">
#home-page
  width 50%
  height 100%
</style>
