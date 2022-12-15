<template>
  <div>
    <div class="list-filter-panel">
      <transition name="slide-fade">
        <div v-show="isOpen">
          <inputAndTab>
            <slot></slot>
          </inputAndTab>
        </div>
      </transition>
      <el-button type="primary" style="margin-left:13px;" @click="foldHandle">{{ fText }}</el-button>
    </div>
    <div style="margin-top: 20vh">
      <el-select v-model="value2" placeholder="请选择" clearable>
        <el-option
            v-for="item in cities"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          <span style="float: left">{{ item.label }}</span>
          <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择" clearable>
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import inputAndTab from "@/components/inputAndTab.vue";

export default {
  components: {
    inputAndTab
  },
  name: "openData4",
  data() {
    return {
      isOpen: false,
      fText: '更多搜索',
      isObj: {
        a: 1,
        b: 2
      },
      options: [],
      options1: [{
        value: '选项1',
        label: '东城区'
      }, {
        value: '选项2',
        label: '西城区'
      }],
      options2: [{
        value: '选项1',
        label: '徐汇区'
      }, {
        value: '选项2',
        label: '杨浦区'
      }, {
        value: '选项3',
        label: '黄浦区'
      }],
      options3: [{
        value: '选项1',
        label: '天河区'
      }, {
        value: '选项2',
        label: '白云区'
      }, {
        value: '选项3',
        label: '番禺区'
      }],
      value: '',
      cities: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      value2: '',
    }
  },
  watch: {
    //普通的watch监听
    value(newName, oldName) {
      console.log(newName + ' ' + oldName)
    },
    // 2
    'isObj.a': {
      handler(newVal, oldVal) {
        console.log(newVal, oldVal)
      },
      deep: true,
      immediate: true
    },
    // 3
    value2: {
      // 第一个handler：其值是一个回调函数。即监听到变化时应该执行的函数
      handler(newV, oldV) {
        if (this.value2 === 'Beijing') {
          this.options = this.options1
          this.value = this.options1[0].value
        } else if (this.value2 === 'Shanghai') {
          this.options = this.options2
          this.value = this.options2[0].value
        } else if (this.value2 === 'Guangzhou') {
          this.options = this.options3
          this.value = this.options3[0].value
        } else if (this.value2 === '') {
          this.options = []
          this.value = ''
        }
      },
      // 代表在watch里声明了cities这个方法之后立即先去执行handler方法，确认是否以当前的初始值执行handler的函数。
      immediate: true,
      // 监听obj里的属性a的值, 一般监听时是不能监听到对象属性值的变化的，数组的变化可以听到
      // deep: true
    },
  },
  methods: {
    foldHandle() {
      this.isOpen = !this.isOpen;
      this.fText = this.isOpen ? '收起' : '更多搜索'
    }
  },
}
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(5px);
  opacity: 0;
}

.list-filter-panel {
  padding-bottom: 10px;
  margin-top: -10px;
}
</style>