<template>
  <div>
    <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :limit="3"
        :auto-upload="false"
        :on-change="handleChange"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-button type="primary" plain @click="deleteImg">删除</el-button>
    <el-button type="info" plain @click="printImg">打印</el-button>
    <div>{{ priView }}</div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="300px" height="300px" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [],
      priView: []
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
      if(this.fileList.length > 2) {
        this.$message({
          type: 'warning',
          message: "最多上传3张图片"
        })
        return
      }
      this.fileList = fileList
    },
    deleteImg() {
      this.fileList.pop()
      this.priView.pop()
    },
    printImg() {
      this.priView = []
      this.fileList.map(o => {
        this.priView.push(o.url)
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.deleteImg()
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped>
/*::v-deep(.el-upload) {*/
/*  width: 200px;*/
/*  height: 200px;*/
/*}*/
</style>