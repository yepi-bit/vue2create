<template>
  <div>
    <el-table :data="tableData" border :cell-style="cellStyle">
      <el-table-column prop="fgsCode" label="机构"></el-table-column>
      <el-table-column :width="250" prop="content" label="问题">
        <template slot-scope="scope">
          <!-- popover弹出框显示时可通过contentDetail()调接口获取questionForm数据 -->
          <!-- 触发方式为click，将popover的箭头显示或隐藏通过设置visible-arrow实现 -->
          <el-popover @show="contentDetail(scope.row.id)" trigger="hover" visible-arrow="false">
            <div slot="reference">
              <!-- 问题列显示文本 即触发Popover显示的HTML元素 -->
              <p class="text">{{ scope.row.content }}</p>
            </div>
            <!-- popover弹出框开始 -->
            <div class="questionDetail">
              <p v-for="(item,index) in scope.row.link" :key="index">
                <el-link style="color: royalblue">{{ item }}</el-link>
              </p>
              <h4 class="questionList title">
                <span class="left">问题:</span>
                <span>{{ scope.row.content }}</span>
              </h4>
              <!-- questionForm可以调接口获取，这里把数据写死了 -->
              <!-- 循环遍历questionForm中的数据并显示在popover弹出框中 -->
              <div :data="questionForm" v-for="(item,index) in questionForm" :key="index" class="questionList">
                <div class="left"><span class="right">日期:</span>{{ item.handleDate }}</div>
                <div class="left">{{ item.handlePeople }}:<span style="font-size:14px; color:#dcdfe6">回复</span></div>
                <div class="left"><span class="right">内容:</span>{{ item.content }}</div>
                <div class="fgsPosition"><span class="right">机构:</span>{{ item.fgsCode }}</div>
              </div>
              <!-- 回复表单 -->
              <el-form :model="replyForm" ref="replyForm" style="padding:10px 0 0 10px;width:450px;">
                <el-form-item required='required' prop="" label=" ">
                  <el-input ref="reply" v-model="replyForm.reply" type="textarea" style="width:400px;"></el-input>
                </el-form-item>
                <el-form-item>
                  <!-- 通过id标志是哪条数据实现回复功能 -->
                  <el-button type="primary" @click="replyContent(scope.row.id,'replyForm')" style="margin-left:20px;">回
                    复
                  </el-button>
                </el-form-item>
              </el-form>
            </div>
            <!-- popover弹出框结束 -->
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
      <el-table-column prop="handlePeople" label="处理人"></el-table-column>
      <el-table-column prop="handleDate" label="日期"></el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      //表格数据
      tableData: [
        {
          fgsCode: "大连分公司",
          content: "大连分公司获取数据不全的问题，请尽快查明原因。",
          handlePeople: "李明",
          handleDate: "2019-02-13",
          status: "01",
          link: [
            'https://blog.csdn.net/qq_37143673/article/details/89556449',
            'https://blog.csdn.net/qq_37143673/article/details/89556449'
          ]
        },
        {
          fgsCode: "青海分公司",
          content: "青海分公司内容",
          handlePeople: "张晓",
          handleDate: "2019-02-13",
          status: "02",
          link: 'https://blog.csdn.net/qq_37143673/article/details/89556449'
        }
      ],
      //问题列表数据
      questionForm: [
        {
          id: 1,
          handlePeople: "张晓",
          handleDate: "2019-02-13",
          content: "反馈内容已解决",
          fgsCode: "总公司"
        },
        {
          id: 2,
          handlePeople: "李明",
          handleDate: "2019-02-13",
          content: "反馈内容已解决",
          fgsCode: "总公司"
        }
      ],
      replyForm: {reply: ""},
    }
  },
  created() {
  },
  methods: {
    // 回复按钮
    replyContent(id, formName) {
      //可以调接口，添加回复
    },
    //显示问题详情列表
    contentDetail(id, content) {
      //可以通过调接口获取questionForm数据
    },
    //表格第二列文本颜色
    cellStyle({columnIndex}) {
      if (columnIndex == 1) {
        return 'color:#409EFF;'
      }
    }
  }
}
</script>

<style>
/* 全局样式 需要把style标签中的scoped="scoped"去掉 */
.el-table {
  margin: 130px 100px 0 120px;
}

/* 全局样式 */
.el-popover {
  left: 25%;
  width: 50%;
  height: 400px;
  overflow: auto;
}

.institutionName {
  margin-top: 10px;
  text-align: right;
}

.text {
  width: 200px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.questionDetail .questionList {
  padding: 10px;
  border-bottom: 1px dotted #dcdfe6;
}

.questionDetail span {
  display: inline-block;
}

.left {
  padding: 5px
}

.right {
  margin-right: 10px;
}

.fgsPosition {
  text-align: right;
}

.title {
  font-size: 16px;
  font-weight: normal;
}
</style>

