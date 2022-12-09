<template>
  <div>
    <el-table
        :show-header="false"
        :data="tableData"
        border
        :cell-style="columnStyle"
        style="width: 100%; margin-top: 20px"
    >
      <el-table-column prop="name" align="center" width="300px"></el-table-column>
      <el-table-column prop="amount1" align="center"></el-table-column>
    </el-table>
    <h2>我是字</h2>
    <div class="text" v-if="isShowBtn">我是字</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      getUser: {
        button: [
          '编辑1',
          '增加1',
          '上报1',
          '统计',
          '删除',
        ]
      }
    };
  },
  computed: {
    //因为数据用到了dataform中的数据，所以写在了computed中
    tableData() {
      return [
        {
          name: "用户ID",
          amount1: "a312313sd",
        },
        {
          name: "微信昵称",
          amount1: '12313',
        },
        {
          name: "会员名称",
          amount1: 'dada',
        },
        {
          name: "用户来源",
          amount1: '',
        },
        {
          name: "会员名称",
          amount1: 'dada',
        },
        {
          name: "用户来源",
          amount1: '',
        }
      ];
    },
    isShowBtn() {
      // if(this.getUser.button) {
      //   return this.getUser.button.includes(btn)
      // }
      let isBtn = null
      isBtn = this.getUser.button.map(v => {
        switch (v) {
          case '编辑':
            return isBtn = true
          case '增加':
            return isBtn = true
          case '上报':
            return isBtn = true
          case '统计':
            return isBtn = true
          case '删除':
            return isBtn = true
          default :
            return isBtn = false
        }
      })
      console.log(isBtn)
      return isBtn[4]
    }
  },
  methods: {
    // 自定义列背景色
    columnStyle({row, column, rowIndex, columnIndex}) {
      if (columnIndex == 0) {
        return "background:#f3f6fc;";
      } else {
        return "background:#ffffff;";
      }
    },
  }
};
</script>
<style scoped>
@font-face {
  font-family: AliHeavy;
  src: url('../assets/font/AlibabaPuHuiTi-2-105-Heavy.ttf')
}

h2 {
  font-family: AliHeavy;
}

.text {
  font-family: AliHeavy;
}
</style>


