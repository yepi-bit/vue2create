<template>
  <div>
    <el-select v-model="value" placeholder="请选择" clearable @change="changeValue">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    {{ value }}
    <div>
      <el-checkbox v-model="checked" @change="valueC">只看自己</el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "optionValue",
  data() {
    return {
      value: '',
      checked: false,
      userName: {
        value: "1101",
        label: "管理员"
      },
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: "1101",
        label: "管理员"
      },],
    }
  },
  methods: {
    changeValue(val) {
      // this.checked = false
      this.options.forEach(o => {
        if (o.value == val.value) {
          this.value = val.value
        }
      })
      if(this.checked = true) {
        if(val.value != this.userName.value) {
          this.checked = false
        }else {
          this.checked = true
        }
      }
    },
    valueC(val) {
      if (val == true) {
        this.changeValue(this.userName)
      } else {
        this.value = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
