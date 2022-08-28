<template>
  <div class="home-index">
    <div class="right-border">
      <div class="icon-btn"><i :class="['el-icon-caret-right',{'on':!toggle}]" @click="animFn" /></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data() {
    return {
      toggle: true
    }
  },
  methods: {
    animFn() { // 两边展开收起动画
      const _this = this
      if (this.toggle) {
        $('.home-index .right').animate({
          right: '-200px'
        }, 800)
        setTimeout(function () {
          _this.toggle = false
        }, 800)
      } else {
        $('.home-index .right').animate({
          right: '0'
        }, 800)
        setTimeout(function () {
          _this.toggle = true
        }, 800)
      }
    }
  }
}
</script>
<style scoped>
::-webkit-scrollbar {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: transparent;
}
.home-index {
  float: right;
  width: 20%;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  position: relative;
  overflow: hidden;
}

.home-index .right-border {
  width: 18px;
  height: 100vh;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 5;
}

.home-index .right-border .icon-btn {
  width: 18px;
  height: 18px;
  font-size: 24px;
}

.home-index .right-border .icon-btn i {
  cursor: pointer;
  color: #fff;
}

.home-index .right-border .icon-btn i on {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  /* IE 9 */
  -moz-transform: rotate(180deg);
  /* Firefox */
  -webkit-transform: rotate(180deg);
  /* Safari 和 Chrome */
  -o-transform: rotate(180deg);
  /* Opera */
}
</style>
