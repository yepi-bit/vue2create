<template>
  <div>
    <p>组件库</p>
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
    <p>自定义</p>
    <el-row>
      <el-col :span="12">
        <el-upload
            class="avatar-uploader"
            action="#"
            :limit="3"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="uploadImg"
            :on-remove="handleRemove">
          <img
              v-if="zImg"
              :src="zImg"
              class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"/>
        </el-upload>
        <el-button type="primary" plain @click="zPrintImg">打印</el-button>
      </el-col>
      <el-col :span="12">
        <div>
          <p>自定义图片数组</p>
          <div v-for="(item,index) in zImgList" :key="index"
               style="position: relative;display: inline-block;border: 1px solid darkblue;margin-left: 6px">
            <img
                width="196px"
                height="234px"
                :src="item"
            />
            <span class="closeBtn" @click="closeBtn(index)"><i class="el-icon-close"/></span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [],
      priView: [],
      zImg: '',
      zImgList: []
    };
  },
  methods: {
    handleChange(file, fileList) {
      console.log(file, fileList);
      if (this.fileList.length > 2) {
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
    },
    // 文件上传相关
    uploadImg(file, fileList) {
      this.getBase64(file.raw).then((res) => {
        this.zImg = res
        this.zImgList.push(res)
      });
    },
    getBase64(file) {
      return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
          imgResult = reader.result;
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.onloadend = function () {
          resolve(imgResult);
        };
      });
    },
    closeBtn(i) {
      this.zImgList.splice(i, 1)
    },
    zPrintImg() {
      console.log(this.zImgList)
    }
  }
}
</script>

<style scoped lang="less">
/*::v-deep(.el-upload) {*/
/*  width: 200px;*/
/*  height: 200px;*/
/*}*/
.avatar-uploader {
  text-align: center;

  img {
    width: 194px;
    height: 236px;
  }
}

.avatar-uploader ::v-deep .el-upload {
  border: 1px solid #1e3851;
  background-color: #12223a;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader ::v-deep .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 36px;
  color: #37475a;
  font-weight: bold;
  width: 194px;
  height: 236px;
  line-height: 194px;
  text-align: center;
}

.closeBtn {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  font-size: 21px;
  color: black;
}
</style>