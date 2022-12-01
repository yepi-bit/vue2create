<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="选择开通" prop="open">
        <span v-for="(item,index) in openValue" :class="[{ on: clickValue === index }]" @click="handleClick(index)"
              :key="index">{{ item.value }}
          <div :class="[{ tag: clickValue === index }]">√</div>
        </span>
      </el-form-item>
      <el-form-item label="自定等级" prop="grade">
        V
        <el-input-number v-model="form.num" @change="handleChange" :min="1" :max="999" label="描述文字"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "buyCount",
  data() {
    return {
      form: {
        num:1
      },
      clickValue: 0,
      openValue: [
        {value: 'V1守护', num: 1},
        {value: 'V12守护', num: 12},
        {value: 'V99守护', num: 99},
        {value: 'V520守护', num: 520}
      ]
    }
  },
  watch: {
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    handleClick(index) {
      console.log(index)
      this.clickValue = index
      if(this.clickValue == 0) {
        this.form.num = 1
      }else if(this.clickValue == 1){
        this.form.num = 12
      }else if(this.clickValue == 2){
        this.form.num = 99
      }else {
        this.form.num = 520
      }
    }
  }
}
</script>
<style scoped>
span {
  position: relative;
  display: inline-block;
  width: 10vw;
  height: 5vh;
  align-items: center;
  margin-right: 1vw;
  color: #ecf5ff;
  background-color: #4D525D;
}

.on {
  border: 2px solid orange;
}
.tag {
  position: absolute;
  z-index: 9;
  button: 0;
  right: 0;
  height: 2vh;
  line-height: 2vh;
  padding: 0 3px;
  background: rgba(51,51,51,.8);
  font-size: 10px;
  color: #fff;
}
</style>


