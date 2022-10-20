<template>
  <div>
    <el-select v-model="value" placeholder="请选择" @change="changeValue">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item">
      </el-option>
    </el-select>
    {{ value }}
    {{ values.value }}
    {{ values.label }}
  </div>
</template>

<script>
export default {
  name: "optionValue",
  data() {
    return {
      value: '',
      values: [],
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
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
    }
  },
  methods: {
    changeValue(val) {
      console.log(val)
      this.values = val
      console.log(this.values.label)
    }
  }
}
</script>

<style scoped>

</style>
