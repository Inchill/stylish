<template>
  <div class="popup">
    <div class="popup-mask"></div>
    <div class="popup-container">
      <h1 class="title">{{ title }}</h1>
      <div class="content"></div>
      <div class="close">
        <i class="close-icon"></i>
      </div>
    </div>
  </div>
</template>

<script lang="typescript">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
})
</script>

<style lang="stylus">
.popup-mask
  position fixed
  left 0
  top 0
  width 100%
  min-height 100vh
  background-color rgba(0, 0, 0, .7)
.popup-container
  position fixed
  left 50%
  top 50%
  transform translate(-50%, -50%)
  z-index 1
  background-color #fff
  width 300px
  height 400px
  border-radius 5%
  display flex
  flex-direction column
.title
  flex 0 0 auto
.content
  flex 1 0 auto
.close
  flex 0 0 auto
  width 100%
  height 40px
  display flex
  justify-content center
  align-items center
  transform translateY(100%)
.close-icon
  display inline-block
  width 20px
  height 20px
  background-image url('./images/close.svg')
  background-size cover
</style>
