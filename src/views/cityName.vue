<template>
  <div>
    <area-cascader :level="1" type="text" placeholder="请选择地区" v-model='address' :data="pcaa"></area-cascader>
    <area-cascader v-model="address2" :data="pcaa"></area-cascader>
    <area-select type='all' :level='1' v-model="address3" :data="pcaa"></area-select>
    <el-button @click="print">打印</el-button>
    {{ value }}
  </div>
</template>

<script>
import {pca, pcaa} from 'area-data'

export default {
  data() {
    return {
      address: [],
      address2: [],
      address3: [],
      pca: pca,
      pcaa: pcaa,
      selected: [],
      value: ""
    }
  },
  methods: {
    print() {
      this.value = [...this.address, ...this.address2, ...this.address3]
    }
  }
}
</script>

<style scoped>
.area-select.large {
  width: 100%;
  line-height: 20px;
}
</style>
