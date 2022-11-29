<template>
  <div class="m50">

    <el-table border style="margin-top: 50px;" :data="originData">
      <el-table-column label="题型" property="type" align="center">
      </el-table-column>
      <el-table-column label="数量" property="num" align="center">
      </el-table-column>
      <el-table-column label="均分" property="average" align="center">
      </el-table-column>
    </el-table>

    <!-- 转化后 -->
    <el-table border style="margin-top: 50px;" :data="transData">
      <el-table-column v-for="(item, index) in transTitle" :label="item" :key="index" align="center">
        <template slot-scope="scope">
          {{scope.row[index]}}
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // originData 为后端原始正常的数据, 此数据按正常表格展示 一行一行的数据
      // 保证数组里每一个对象中的字段顺序, 从上到下 一次对应显示表格中的从左到右
      originData: [{
        type: '选择题',
        num: '5题',
        average: '3分/题',
      },
        {
          type: '填空题',
          num: '5题',
          average: '3分/题',
        },
        {
          type: '选择题',
          num: '2题',
          average: '10分/题',
        }
      ],
      originTitle: ['题型', '数量', '均分'], // originTitle 该标题为 正常显示的标题, 数组中的顺序就是上面数据源对象中的字段标题对应的顺序
      transTitle: ['', '学生1', '学生2', '学生3'], // transTitle 该标题为转化后的标题, 注意多一列,  因为原来的标题变成了竖着显示了, 所以多一列标题, 第一个为空即可
      transData: []
    }
  },
  created() {
    // 数组按矩阵思路, 变成转置矩阵
    let matrixData = this.originData.map((row) => {
      let arr = []
      for (let key in row) {
        arr.push(row[key])
      }
      return arr
    })
    // 加入标题拼接最终的数据
    this.transData = matrixData[0].map((col, i) => {
      return [this.originTitle[i], ...matrixData.map((row) => {
        return row[i]
      })]
    })
    console.log(this.transData)
  }
}
</script>

<style scoped>
.m50 {
  margin: 50px;
}
</style>