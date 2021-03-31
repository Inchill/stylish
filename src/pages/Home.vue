<template>
  <div id="home-page">
    <!-- <div class="component-item">
      <st-progress></st-progress>
    </div> -->
    <div class="component-item">
      <popup></popup>
    </div>
  </div>
</template>

<script lang="typescript">
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  components: {
    StProgress: defineAsyncComponent(() => import('@/components/progress/index.vue')),
    Popup: defineAsyncComponent(() => import('@/components/popup/index.vue'))
  },
  setup () {
    return {}
  }
})
</script>

<style lang="stylus">
#home-page
  width 50%
  height 100%
.component-item
  width 100%
  height 100px
  margin 10px 0
</style>
