<template>
  <div>
    <el-table
        ref="multiTable"
        :data="tableData.slice((this.page - 1) * this.size, (this.page - 1) * this.size + this.size)"
        style="width: 100%"
        :row-key="getRowKeys"
        @selection-change="handleSelectionChange"
        @select-all="cli"
    >
      <el-table-column
          type="selection"
          :reserve-selection="true"
          width="55">
      </el-table-column>
      <el-table-column
          label="日期"
          width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
          layout="total,prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="5"
          :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectData",
  data() {
    return {
      total:7,
      page:1,
      size:5,
      currentPage:1,
      allCheck:false,
      multipleSelection:[],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      tableAllData: [],  //后台返回的所有数据
    }
  },
  watch: {
    // 分页全选-监听数据变化
    tableData: {
      handler(value) {
        if (this.allCheck) {
          this.tableData.forEach(row => {
            if (row) {
              this.$refs.multiTable.toggleRowSelection(row, true)
              console.log('watch')
            }
          });
        }
      },
      deep: true
    },
  },
  methods: {
// 修改页大小
    handleSizeChange(val) {
      this.size = val;
    },
// 修改页码
    handleCurrentChange(val) {
      this.page = val;
    },
    getRowKeys(row) {
      return row.data
    },
    //全选事件
    cli(rows) {
      let _this = this;
      if (!_this.allCheck) {
        // 全选选中时当前页所有数据选中,使用后台所有数据进行遍历.
        _this.tableData.forEach(row => {
          if (row) {
            _this.$refs.multiTable.toggleRowSelection(row, true);
          }
        });
        _this.allCheck = true
      } else {
        _this.$refs.multiTable.clearSelection();
        _this.allCheck = false
      }
    },
    //列表勾选发生变化触发事件
    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(this.multipleSelection,'------------------->')
    },
  }

}
</script>

<style scoped>

</style>
