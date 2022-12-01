<template>
  <div>
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
    <div style="margin-top: 200px">
      <el-select v-model="value2" multiple placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
      <el-button>{{ value2 }}</el-button>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "optionValue",
  data() {
    return {
      value: '',
      value2: [],
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
  mounted() {
    this.options.forEach(o => {
      this.value2.push(o.value)
    })
  },
  methods: {
    changeValue(val) {
      this.actionValue(val)                       // 方法1 存数据
      this.$store.dispatch("product", val); // 方法2 存数据
      // this.checked = false
      this.options.forEach(o => {
        if (o.value == val.value) {
          this.value = val.value
        }
      })
      if (this.checked = true) {
        if (val.value != this.userName.value) {
          this.checked = false
        } else {
          this.checked = true
        }
      }
    },
    ...mapActions({
      'actionValue': 'actionValue'
    }),
    valueC(val) {
      console.log(this.$store.state.user)         // 方法1 拿数据
      console.log(this.$store.getters.towUser)
      console.log(this.$store.getters.getNumber)
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
