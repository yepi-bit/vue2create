<template>
  <div>
    <div class="list-filter-panel">
      <transition name="slide-fade">
        <div v-show="isOpen">
          <inputAndTab>
            <slot></slot>
          </inputAndTab>
        </div>
      </transition>
      <el-button type="primary" style="margin-left:13px;" @click="foldHandle">{{ fText }}</el-button>
    </div>
  </div>
</template>

<script>
import inputAndTab from "@/components/inputAndTab";
export default {
  components:{
    inputAndTab
  },
  name: "openData4",
  data() {
    return {
      isOpen: false,
      fText: '更多搜索'
    }
  },
  methods: {
    foldHandle() {
      this.isOpen = !this.isOpen;
      this.fText = this.isOpen ? '收起' : '更多搜索'
    }
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}

.list-filter-panel {
  padding-bottom: 10px;
  margin-top: -10px;
}
</style>