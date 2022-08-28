<template>
  <div class="m-slidebar">
    //按钮区域
    <span class="m-closeBtn" id='m-closeBtn' @click="dianji"><Icon color="white"
                                                                   icon="ant-design:right-circle-outlined"></Icon></span>
    <div>内容区域</div>
  </div>

</template>

<script>
import $ from 'jquery'
export default {
  name: "openData2",
  methods: {
    dianji() {
      //获取dom元素
      var sideBar = document.getElementsByClassName('m-slidebar')[0];
      //我的逻辑上是先判断没有这个class，没有的话就添加，这个添加动作会触发宽度加长的过渡效果
      console.log(sideBar.classList);
      if (!sideBar.classList.contains('addWidth')) {
        console.log(sideBar.classList.contains('addWidth'));
        sideBar.classList.add("addWidth")

      } else {
        sideBar.classList.remove("addWidth");
      }
    }
      //     $("#m-closeBtn").click(function () {
      //   var sideBar = $(".m-slidebar");
      //   //我的逻辑上是先判断没有这个class，没有的话就添加，这个添加动作会触发宽度加长的过渡效果
      //   if (!sideBar.hasClass("addWidth")) {
      //     $(".m-slidebar").addClass("addWidth");
      //   }
      //   //同理，展开之后要切换，移除这个class来触发减小宽度的过渡效果
      //   else {
      //     $(".m-slidebar").removeClass("addWidth");
      //   }
      // })
  }
}
</script>


<style scoped>
.addWidth {
  height: 100vh !important;
  right: 0px !important;
  width: 580px !important;
  min-width: 580px !important;
  position: absolute;
  z-index: 11 !important;
  top: 0px !important;
  bottom: 0px !important;
}

.m-slidebar {
  height: 100vh !important;
  transition: width 1s;
  right: -580px; /* 侧边栏有多宽，就-多少，相当于先藏在视窗外边（从左边打开的话就换成left）,我这个侧边栏在右边 */
  width: 580px;
  min-width: 580px;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
  height: calc(100vh - 2.5rem);
  background: white;
  box-shadow: 0px 5px 5px rgba(11, 2, 5, 0.1);
  top: 0px;
  bottom: 0px;
}

.m-slidebar .m-closeBtn {
  position: absolute;
  width: 30px;
  height: 40px;
  left: -30px;
  background-image: linear-gradient(135deg, #5e60eb 3%, #4282fa 100%), linear-gradient(#edf2fc, #edf2fc);
  box-shadow: 0px 5px 5px rgba(11, 2, 5, 0.1);
  border-radius: 6px 0px 0px 6px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
</style>

