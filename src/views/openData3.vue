<template>
  <div class="home">
    <div :class="[isOpen?'x':'y']">
      this is sider
      <p class="c-layout-sider-open-icon" @click="setWidth"></p>
    </div>
    <div :class="[isOpen?'x':'y']">
      <div style="height:2000px">this is page content</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "openData3",
  data() {
    return {
      isOpen: true,
    }
  },
  mounted() {
    console.log(window.innerWidth)
    this.resize()
    window.addEventListener('resize', this.resize, true)
  },
  methods: {
    setWidth() {
      this.isOpen = !this.isOpen
    },
    resize() {
      let w_width = window.innerWidth
      if(w_width<= 1430) {
        this.isOpen = false
      }else {
        this.isOpen = true
      }
    },
  },
}
</script>

<style scoped>

</style>
