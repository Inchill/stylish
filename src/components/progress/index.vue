<template>
  <div class="progress">
    <div class="total-progress">
      <div class="cur-progress" :style="{width: curPercent + '%'}"></div>
      <div class="bubble" :style="{left: curPercent + '%', transform: `translateX(${-curPercent}%)`}">
        <div class="inner-bubble">
          <span class="text">12222221111</span>
          <i class="indicator" :style="{left: indLeft + '%'}"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import { defineComponent, computed } from 'vue'
export default defineComponent({
  setup () {
    const curPercent = 10
    const indLeft = computed(() => {
      // 左右两侧留 5% 比例，保持指示器位置在提示气泡内部
      if (curPercent > 5 && curPercent < 95) return curPercent
      else {
        if (curPercent <= 5) return 5
        return 95
      }
    })
    return {
      curPercent,
      indLeft
    }
  }
})
</script>

<style lang="stylus">
.progress
  width 100%
  height 10px
  border-radius 10px
  padding-top 30px
.total-progress
  position relative
  width 100%;
  height 100%
  border-radius 10px
  background-color #DFDFDF
.cur-progress
  height 100%
  border-radius 10px
  background-color cadetblue
.bubble
  position absolute
  bottom 20px
  background-color cadetblue
  color white
  padding 0 5px
  border-radius 2px
.text
  // 坑，本来是不想文字溢出，结果指示器也给隐藏了
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
.inner-bubble
  position relative
  width 100%
  height 100%
.indicator
  position absolute
  bottom 0
  transform translateY(100%)
  display inline-block
  border-top 6px solid darkcyan
  border-left 4px solid transparent
  border-right 4px solid transparent
</style>
