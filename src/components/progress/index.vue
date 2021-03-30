<template>
  <div class="st-progress">
    <div class="total-progress">
      <div class="cur-progress" :style="{width: curPercent + '%'}"></div>
      <div class="cur-progress-bubble" :style="{left: curPercent + '%', transform: `translateX(${-curPercent}%)`}">
        <div class="inner-bubble">
          <span>12222221111</span>
          <i class="indicator"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import { defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const curPercent = 100
    return {
      curPercent
    }
  }
})
</script>

<style lang="stylus">
.st-progress
  width 100%
  height 10px
  border-radius 10px
  padding-top 30px
.total-progress
  position relative
  height 100%
  border-radius 10px
  background-color #DFDFDF
.cur-progress
  height 100%
  border-radius 10px
  background-color #48D1CC
  &-bubble
    position absolute
    top -25px
    background-color #48D1CC
    border-radius 2px
    max-width 100%
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

.inner-bubble
  position relative
  width 100%
  height 100%
.indicator
  position absolute
  left 0
  bottom 0
  display inline-block
  transform translateY(100%)
  border-top 6px solid #FF009D
  border-left 6px solid transparent
  border-right 6px solid transparent
</style>
