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
  </div>
</template>
<script>
export default {
  data() {
    return {};
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


