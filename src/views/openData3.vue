<template>
  <div class="home">
    <el-table
        :data="tableData"
        border
        :span-method="spanMethod"
        style="width: 100%">
      <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="province"
          label="省份"
          width="120">
      </el-table-column>
      <el-table-column
          prop="city"
          label="市区"
          width="120">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          width="300">
      </el-table-column>
      <el-table-column
          prop="zip"
          label="邮编"
          width="120">
      </el-table-column>
      <el-table-column
          label="操作">
        <template slot-scope="scope">
<!--          <el-popover-->
<!--              placement="right"-->
<!--              title="相关文件"-->
<!--              width="200"-->
<!--              v-model="tableData[scope.$index].isShow"-->
<!--              trigger="hover"-->
<!--              :content=scope.row.zip>-->
<!--            <el-button slot="reference">{{ scope.row.zip}}</el-button>-->
<!--          </el-popover>-->
          <el-popover
              placement="top-start"
              title="相关文件"
              width="200"
              trigger="hover"
              :content=scope.row.zip>
            <el-button slot="reference">{{ scope.row.zip}}</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        isShow: false
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: [
            'httpLxxxxxxxxxxxxx',
            'httpLxxxxxxxxxxxx2x'
        ]
      }]
    }
  },
  methods: {
    spanMethod(row, column, rowIndex, columnIndex) {
      if (columnIndex === 0) {
        if( this.tableData.length ){
          for( let i in this.tableData ){
            let item = this.tableData[i];
            if( rowIndex == item.index ){
              return {
                rowspan: item.count,
                colspan: 1
              };
            }
          }
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  }
};
</script>
