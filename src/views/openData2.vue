<template>
  <div>
    <div>
      <h1>节流</h1>
      <el-input type="primary" style="width: 300px" v-model="value" placeholder="按钮节流"/>
      <el-button @click="clickValue">查询</el-button>
    </div>
    <div>
      <h1>防抖</h1>
      <el-input
          v-model="serves"
          placeholder="输入框防抖"
          style="width: 300px"
      ></el-input>
    </div>
    <div class="wave-content ">
      <div class="wave wave1 "></div>
      <div class="wave wave2 "></div>
      <div class="wave wave3 "></div>
      <div class="wave wave4"></div>
    </div>
  </div>
</template>

<script>
import throttle from "../utils/throttle.js"
import debounce from "../utils/debounce.js"

export default {
  name: "openData2",
  data() {
    return {
      value: '',
      serves: ''
    }
  },
  watch: {
    serves(news) {
      this.changeValue();
    },
  },
  methods: {
    isFun() {
      console.log(12)
    },
    changeValue: debounce(function () {
      console.log("防抖：", this.serves);
    }, 500),
    clickValue: throttle(function () {
      this.isFun()
      console.log('节流', this.value)
    }, 800),
  }
}
</script>


<style scoped>
.wave-content {
  height: 666px;
  width: 666px;
  left: 255px;
  top: 139px;
  position: relative;
}

.wave {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform-origin: center center;
  background-color: transparent;
  border: 2px solid #979797;
  animation-duration: 7s;
  animation-name: wv;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  border-radius: 50%;
  opacity: 0;
}

.wave1 {
  animation-delay: 0s;
}

.wave2 {
  animation-delay: 1.5s;
}

.wave3 {
  animation-delay: 3s;
}

.wave4 {
  animation-delay: 4.5s;
}

@keyframes wv {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }

  30% {
    opacity: 0.7;
    transform: scale(0.65);
  }

  70% {
    opacity: 0.1;
    transform: scale(0.85);
  }

  100% {
    opacity: 0.3;
    transform: scale(1);
  }
}
</style>

