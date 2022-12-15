<template>
  <div class="fold">
    <h2>1.文本展开/收起</h2>
    <div class="text">
      <span
          :style="{ 'max-height': textOpenFlag ? textHeight : '' }"
          :class="{ unfoldText: textOpenFlag }"
          class="titleText"
          ref="desc"
      >
        {{ name }}
      </span>
      <span
          v-if="showBtnFlag"
          @click="textOpenFlag = !textOpenFlag"
          class="btn"
      >{{ textOpenFlag ? "展开" : "收起" }}</span
      >
    </div>
    <h2>2.根据选项数量动态展开/收起</h2>
    <div
        class="list"
        ref="list"
        :style="{ 'max-height': listOpenFlag ? listHeight : '' }"
    >
      <li
          v-for="item in list"
          :key="'list_' + item.id"
          :class="listId == item.id ? 'active' : ''"
          :label="item.id"
          @click="handleChange('list', item)"
      >
        <template> {{ item.name }}</template>
      </li>
      <li
          v-if="showListBtnFlag"
          @click="listOpenFlag = !listOpenFlag"
          class="btn"
      >
        {{ listOpenFlag ? "展开" : "收起" }}
      </li>
    </div>
    <div
        class="subList"
        ref="subList"
        :style="{ 'max-height': subListOpenFlag ? subListHeight : '' }"
    >
      <li
          v-for="item in subList"
          :key="'subList_' + item.id"
          :class="subListId == item.id ? 'active' : ''"
          :label="item.id"
          @click="handleChange('subList', item)"
      >
        <template> {{ item.name }}</template>
      </li>
      <li
          v-if="showSubListBtnFlag"
          @click="subListOpenFlag = !subListOpenFlag"
          class="btn"
      >
        {{ subListOpenFlag ? "展开" : "收起" }}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:
          "这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子这是一个测试的标题的例子，这是一个测试的标题的例子，这是一个测试的标题的例子",
      textHeight: null,
      textOpenFlag: false,
      showBtnFlag: false,
      list: [], //列表数据
      listId: "", //当前选择的id
      listHeight: null, //列表区域的显示高度
      listOpenFlag: false, //为true时，展开；为false时，收起
      showListBtnFlag: false, //为true时，出现展开-收起；为false,不出行展开-收起
      subList: [],
      AllSubList: [],
      subListId: "",
      subListHeight: null,
      subListOpenFlag: false,
      showSubListBtnFlag: false
    };
  },
  created() {
    this.getList();
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.calculateText();
        this.calculateList();
        this.calculateSubList();
      }, 10);
    });
  },
  methods: {
    getList() {
      var list = [
        {
          id: 1,
          name: "水果",
          childrenList: [
            { id: 1, name: "苹果" },
            { id: 2, name: "香蕉" },
            { id: 3, name: "橘子" },
            { id: 4, name: "西瓜" },
            { id: 5, name: "菠萝" },
            { id: 6, name: "榴莲" },
            { id: 7, name: "龙眼" },
            { id: 8, name: "菠萝蜜" },
            { id: 9, name: "荔枝" },
            { id: 10, name: "山竹" },
            { id: 11, name: "葡萄" },
            { id: 12, name: "提子" },
            { id: 13, name: "猕猴桃" },
            { id: 14, name: "圣女果" },
            { id: 15, name: "水蜜桃" },
            { id: 16, name: "柿子" },
            { id: 17, name: "李子" },
            { id: 18, name: "鸭梨" }
          ]
        },
        {
          id: 2,
          name: "动物",
          childrenList: [
            { id: 19, name: "猴子" },
            { id: 20, name: "大象" },
            { id: 21, name: "小猪" },
            { id: 22, name: "熊猫" },
            { id: 23, name: "金毛" },
            { id: 24, name: "猫咪" },
            { id: 25, name: "狮子" },
            { id: 26, name: "老虎" },
            { id: 27, name: "长颈鹿" }
          ]
        },
        {
          id: 3,
          name: "交通工具",
          childrenList: [
            { id: 38, name: "汽车" },
            { id: 39, name: "自行车" },
            { id: 40, name: "卡车" },
            { id: 41, name: "摩托车" },
            { id: 42, name: "火车" },
            { id: 43, name: "动车" },
            { id: 44, name: "高铁" },
            { id: 45, name: "轿车" }
          ]
        }
      ];
      this.list = [{ name: "全部", id: "" }].concat(list);
      let subList = [{ name: "全部", id: "" }];
      list.forEach(item => {
        if (item.childrenList) {
          subList = subList.concat(item.childrenList);
        }
      });
      this.subList = subList;
      this.AllSubList = subList;
    },
    handleChange(type, item) {
      if (type == "list") {
        if (this.listId != item.id) {
          //this.listId != item.id防止多次点击同一个选项，出现重复执行以下代码
          this.listId = item.id;
          if (item.id == "") {
            this.subList = this.AllSubList;
          }
          if (item.childrenList) {
            this.subList = [{ name: "全部", id: "" }].concat(item.childrenList);
          }
          this.$nextTick(() => {
            this.calculateSubList();
          });
        }
      } else {
        this.subListId = item.id;
      }
    },
    calculateText() {
      // 这是默认两行数据的高度，一行的高度可以自定义 可以*3 *4达到三行或者四行显示展示和收起的效果
      let twoHeight = 26;
      this.textHeight = `${twoHeight}px`;
      let curHeight = this.$refs.desc.offsetHeight;
      if (curHeight > twoHeight) {
        this.textOpenFlag = true;
        this.showBtnFlag = true;
      } else {
        this.textOpenFlag = false;
        this.showBtnFlag = false;
      }
    },
    calculateList() {
      // 这是默认2行数据的高度
      let oneHeight = 49 * 2;
      this.listHeight = `${oneHeight}px`;
      let curHeight = this.$refs.list.offsetHeight;
      if (curHeight > oneHeight) {
        this.listOpenFlag = true;
        this.showListBtnFlag = true;
      } else {
        this.listOpenFlag = false;
        this.showListBtnFlag = false;
      }
    },
    calculateSubList() {
      // 这是默认1行数据的高度
      let twoHeight = 48 * 1;
      this.subListHeight = `${twoHeight}px`;
      let curHeight = this.$refs.subList.offsetHeight;
      if (curHeight > twoHeight) {
        this.subListOpenFlag = true;
        this.showSubListBtnFlag = true;
      } else {
        this.subListOpenFlag = false;
        this.showSubListBtnFlag = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@mainColor: #5864ff;
.fold {
  padding: 22px;
  margin: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  // 1.文字收缩
  .text {
    position: relative;
    margin-bottom: 20px;
    .titleText {
      font-size: 18px;
    }
    .unfoldText {
      overflow: hidden;
      display: block;
    }
    .unfoldText:after {
      z-index: 3;
      content: "...";
      position: absolute;
      bottom: -20px;
      right: 30px;
    }
  }
  .btn {
    font-size: 14px;
    color: @mainColor;
    position: absolute;
    right: 0;
    bottom: -20px;
    background-color: #fff;
    &:hover {
      color: orange;
    }
  }
  .list   {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    margin-top: 10px;
    li {
      background-color: #f5f6fa;
      padding: 8px 10px;
      margin-bottom: 15px;
      list-style: none;
      margin-right: 10px;
      white-space: nowrap;
      &:hover {
        background-color: @mainColor;
        color: #fff;
      }
    }
    .active {
      background-color: @mainColor;
      color: #fff;
    }
    .btn {
      font-size: 14px;
      position: absolute;
      right: -10px;
      background-color: #fff;
      bottom: 0;
      &:hover {
        color: orange;
        background-color: #fff;
      }
    }
  }

  .subList {
    background-color: #f5f6fa;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    overflow: hidden;
    li {
      margin: 15px;
      list-style: none;
      white-space: nowrap;
      &:hover {
        color: @mainColor;
      }
    }
    .active {
      color: @mainColor;
    }
    .btn {
      background-color: #f5f6fa;
      position: absolute;
      right: 0;
      bottom: -2px;
      width: 80px;
      &:hover {
        color: orange;
      }
    }
  }
}
</style>