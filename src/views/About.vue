<template>
  <div class="warp-txt">
    <ul>
      <li v-for="(item,index) in showList" :key="index"
          :class="{hiddenline: index === showList.length - 2 || index === showList.length - 1}">
        <router-link to="/">{{ item }}</router-link>
        <span class="line" :class="{hidden1: index % 3 === 2}"></span>
      </li>
      <li class="none-line">
        <span @click="showAll = !showAll" class="show-more">
            <b>{{ word }}</b>
        </span>
      </li>
    </ul>

  </div>
</template>
<script>
export default {
  data() {
    return {
      literarys: ["中国先当代随笔", "名家作品", "文集", '纪实文学', "中国古诗词", "中国现当代诗歌",
        "外国诗歌", "中国古代随笔", "外国随笔", "民家文学", "戏剧", "文学评论与鉴赏", "文学理论"],
      showAll: false,
    }
  },
  computed: {
    showList () {
      if (this.showAll === false) {
        let showList = []
        if (this.literarys.length > 5) {
          for (var i = 0; i < 5; i++) {
            showList.push(this.literarys[i]); //将数组的前5条存放到showList数组中
          }
        } else {
          showList = this.literarys  //个数足够显示，不需要在截取
        }
        return showList;
      } else {  //显示全部数据
        return this.literarys;
      }
    },
    word: function () { //点击显示部分
      if (this.showAll === false) {
        return '展开'
      } else {
        return '收起'
      }
    }
  },


}
</script>
<style lang="less" scoped>
.warp-txt {
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 2%;
    box-sizing: border-box;
    position: relative;

  li {
    width: 33.33%;
    text-align: center;
    display: flex;
    height: 44px;
    position: relative;
    border-bottom: 1px solid #e1e1e1;

    a {
      text-decoration: none;
      color: #4D525D;
      font-size: 0.8rem;
      margin: auto;
    }

  }
  .hiddenline {
    border-bottom: 0px;
  }

  .line {
    content: "";
    height: 14px;
    width: 1px;
    background-color: red;
    position: absolute;
    top: 35%;
    right: 0%;
  }

  .hidden1 {
    width: 0px;
  }

    .none-line {
      border-bottom: 0px;

    .show-more {
      color: #BABABA;
      font-size: 0.5rem;
      border-bottom: 0px;
      margin: auto;
    }

    }

  }
}

</style>
