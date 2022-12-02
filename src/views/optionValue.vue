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
    <div style="margin-top: 150px">
      <div v-for="(item,index) in dataLength" :key="index">
        <el-input style="width: 20vw" v-model="input[index]" placeholder="请选择"/>
        <el-button @click="add"><i class="el-icon-plus"/></el-button>
        <el-button v-if="index > 0" @click="deleteAdd(index)"><i class="el-icon-minus"/></el-button>
      </div>
      dataLength:{{ dataLength }}
      <div>
        <el-button @click="print">打印</el-button>
        inputList:{{ inputList }}
        <p>
          input:<el-button>{{ input }}</el-button>
        </p>
        <p>addressList:{{ addressList }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "optionValue",
  data() {
    return {
      dataLength: [0],
      input: [],
      inputList: [],
      addressList: [],
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
    add() {
      this.dataLength.push(this.dataLength.length)
    },
    deleteAdd(i) {
      this.dataLength.splice(i, 1);
      this.input.splice(i, 1);
    },
    print() {
      this.inputList = []
      this.dataLength.forEach((e) => {
        this.inputList.push(this.input[e]);
      });

      this.addressList = []
      this.dataLength.forEach((e, index) => {
        if (this.input[index]) {
          this.addressList.push({
            provinceName: this.input[index],
            address: e,
          });
        }
      });
    },
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
