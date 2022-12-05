<template>
  <div>
    <area-cascader :level="1" type="text" placeholder="请选择地区" v-model='address' :data="pcaa"></area-cascader>
    <area-cascader v-model="address2" :data="pcaa"></area-cascader>
    <area-select type='all' :level='1' v-model="address3" :data="pcaa"></area-select>
    <el-button @click="print">打印</el-button>
    {{ value }}
    <p>------------------Cascader 级联选择器-----------------</p>
    <div class="block">
      <span class="demonstration">hover 触发子菜单</span>
      <el-cascader
          v-model="value"
          :options="deptAll"
          :props="{ expandTrigger: 'hover' }"
      ></el-cascader>
    </div>
    <p>------------------¶Tree 树形控件-----------------</p>
    <div class="block">
      <span class="demonstration">基础的树形结构展示</span>
      <el-tree
          :data="deptAll"
          node-key="id"
          :default-expanded-keys="openExpandedKeys"
          :default-checked-keys="[]"
          @node-click="handleNodeClick"
      ></el-tree>
    </div>
  </div>
</template>

<script>
import {pca, pcaa} from 'area-data'

export default {
  data() {
    return {
      openExpandedKeys: [],
      address: [],
      address2: [],
      address3: [],
      pca: pca,
      pcaa: pcaa,
      selected: [],
      value: "",
      deptAll: [],
      testOptions: [
        {value: "1101", label: '北京市局', id: "1101", pid: ''},
        {value: "110101", label: "东城分局", id: "110101", pid: '1101'},
        {value: "11010102", label: "东四派出所", id: "11010102", pid: '110101'},
        {value: "110102", label: "西城分局", id: "110102", pid: '1101'},
        {value: "11010103", label: "官园派出所", id: "11010103", pid: '110102'},
      ],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }]
        }]
      },
        {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
    }
  },
  created() {
    this.openExpandedKeys.push(this.testOptions[0].id); // 默认展开第一条数据
    this.toTree()
  },
  methods: {
    print() {
      this.value = [...this.address, ...this.address2, ...this.address3]
    },
    handleNodeClick(data) {
      let nodeId
      nodeId = data.id;  // 请求数据展开右侧table
    },
    toTree() {
      let initDataInfo = [];
      for (let i = 0; i < this.testOptions.length; i++) {
        initDataInfo.push({
          id: this.testOptions[i].id,
          value: this.testOptions[i].value,
          label: this.testOptions[i].label,
          parentId: this.testOptions[i].pid
        });
      }
      this.deptAll = [];
      initDataInfo.forEach(item => {
        delete item.children;
      });
      let map = {};
      initDataInfo.forEach(item => {
        map[item.value] = item;
      });
      initDataInfo.forEach(item => {
        let parent = map[item.parentId];
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          this.deptAll.push(item);
        }
      });
      return this.deptAll;
    }
  }
}
</script>

<style scoped>
.area-select.large {
  width: 100%;
  line-height: 20px;
}

.block {
  display: inline-block;
  text-align: center;
  width: 20vw;
}

p {
  margin-top: 10vh;
}
</style>
