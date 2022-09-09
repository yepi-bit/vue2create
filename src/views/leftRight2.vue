<template>
  <div class="module-list-wrap">
    <span>上报节点</span>
    <i class="el-icon-caret-left" @click="leftmove"></i>
    <ul class="module-list" ref="timeBar">
      <li v-for="(item, index) in itemlist" :key="index" :class="[{ on: timeActive === index }]" @click="showTimeBtn(index)">
        {{ item }}
      </li>
    </ul>
    <i class="el-icon-caret-right" @click="rightmove"></i>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: "leftRight2",
  data(){
    return {
      timeActive: -1,
      itemlist: [],
    }
  },
  mounted() {
    this.setTimeList()
  },
  methods:{
    setTimeList() {
      this.itemlist = []
      for (let i = 0; i < 24; i++) {
        let getTime = dayjs().subtract(2 * i, 'hour').format('YYYY-MM-DD HH:mm:ss')
        console.log(getTime);
        this.itemlist.push(getTime)
      }

    },
    leftmove() {
      this.$refs.timeBar.scrollLeft =this.$refs.timeBar.scrollLeft-100
    },
    rightmove() {
      this.$refs.timeBar.scrollLeft =this.$refs.timeBar.scrollLeft+100
    },
    showTimeBtn(index) {
      console.log(index)
      this.timeActive = index
    }
  }
}
</script>

<style lang="less" scoped>
.module-list-wrap {
  width: 100%;
  //overflow-x: hidden;
  overflow-x: scroll;
  /*禁止纵向滚动*/
  overflow-y: hidden;
  display: flex;
  height: 50px;
  white-space: nowrap;
  font-size: 16px;
  align-items: center;
  position: relative;
  justify-content: start;
  span {
    // flex: 2;
    font-size: 14px;
    margin-left: 21px;
  }

  &::-webkit-scrollbar {
    /*隐藏滚动条*/
    display: none;
  }

  .module-list {
    // flex: 32
    width: 89%;
    overflow: hidden;
    justify-content: space-between;
    padding: 0;
    li {
      font-style: normal;
      display: inline-block;
      font-size: 14px;
      padding: 6px 6px;

      &:hover {
        color: #305f80;
      }
    }
  }

  i {
    // flex: 1;
    color: #2a6883;
    z-index: 9999;
    cursor: pointer;
    &:hover {
      color: rgb(53,152,181);
    }
    &:last-child {
      position: absolute;
      display: inline-block;
      //float: right;
      right: 20px;

    }
  }
}
</style>
