<template>
  <div>
    <div class="header">
      <div class="header-left">
        <h3>
          <span class="re">相 约 自 贸 港 <b class="ab-middle">·</b> <span class="m-l15">共 享 新 机 遇</span></span>
          <span>{{ date }} {{ time }}</span>
        </h3>
      </div>
      <div class="header-center"><h2>Yepi-bit平台</h2></div>
      <div class="header-right">
        <ul class="menu">
          <li
              :class="[{'on':$route.path === '/'}]"
              @mouseenter="showQjts = true"
              @mouseleave="showQjts = false"
          >
            全局态势 <i :class="showQjts === false ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"/>
            <span/>
            <el-collapse-transition>
              <div v-show="showQjts" class="select-box">
                <div class="option" @click="$router.push('/')">全局态势</div>
                <!-- <div class="option" @click="$router.push('/crowdHome')">人群态势</div> -->
                <div class="option" @click="$router.push('/optionValue')">选项值</div>
              </div>
            </el-collapse-transition>
          </li>
          <li :class="[{'on':$route.path === '/openData3'}]"
              @mouseenter="showYjfx = true"
              @mouseleave="showYjfx = false">
            预警研判 <i :class="showYjfx === false ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"/>
            <span/>
            <el-collapse-transition>
              <div v-show="showYjfx" class="select-box">
                <!--<div class="option" @click="$router.push('/earlyWarnAnalysis')">预警分析</div>-->
                <div class="option" @click="$router.push('/openData3')">重点人研判</div>
              </div>
            </el-collapse-transition>
          </li>
          <li
              :class="[{'on':$route.path === '/vertical'}]"
              @mouseenter="showZhdd = true"
              @mouseleave="showZhdd = false"
          >
            指挥调度 <i :class="showZhdd === false ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"/>
            <span/>
            <el-collapse-transition>
              <div v-show="showZhdd" class="select-box">
                <div class="option" @click="$router.push('/vertical')">安保态势</div>
                <div class="option" @click="$router.push('/vertical2')">安保部署图</div>
                <div class="option" @click="$router.push('/vertical3')">场馆展区图</div>
                <div class="option" @click="$router.push('/vertical2')">安保方案管理</div>
                <div class="option" @click="$router.push('/vertical3')">应急预案管理</div>
              </div>
            </el-collapse-transition>
          </li>
          <li @click="$router.push({path:'/vertical'})">主题分析<span/></li>
          <li @click="$router.push({path:'/vertical2'})">数据中心<span/></li>
        </ul>
      </div>
    </div>
    <div style="position: absolute;z-index: 9;top: 15vh">
      <div class="title-up">
        <h5>活动基本情况</h5>
        <el-button size="mini" plain round @click="basicsUp">{{ tagName }} <i class="el-icon-arrow-down"></i>
        </el-button>
      </div>
      <div class="main-box" id="basicsUp">
        <p>我是：Yepi</p>
      </div>
    </div>
    <div style="position: absolute;z-index: 9;top: 30vh">
      <h3><i class="el-icon-s-help"></i>场馆方案</h3>
      <div class="change-venue">
        <span>111111111111</span>
      </div>
      <div class="change-box" element-loading-text="附件上传中...">
        <div class="box-list">
          2222222222222222222222
        </div>
      </div>
    </div>
    <div style="position: absolute;z-index: 9;top: 50vh">
      <el-form :inline="true" ref="formSearch" :model="formSearch">
        <el-form-item label="抓拍时间">
          <el-date-picker
              v-model="formSearch.time"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
          ></el-date-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import $ from 'jquery'

export default {
  data() {
    return {
      time: '00:00:00',
      date: '0000/00/00',
      setIn: null,
      showQjts: false,
      showYjfx: false,
      showZhdd: false,
      "$route.path": '/',
      tagName: '收起',
      formSearch: {},
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              const end = new Date();
              picker.$emit("pick", [
                new Date(dayjs(end).format("YYYY-MM-DD 00:00:00")),
                end
              ]);
            }
          },
          {
            text: "本周",
            onClick(picker) {
              const end = new Date();
              let week = end.getDay(); //星期
              if (week === 0) {
                week = 7
              }
              const start = new Date(end - week * 86400000);
              picker.$emit("pick", [
                new Date(dayjs(start).format("YYYY-MM-DD 00:00:00")),
                end
              ]);
            }
          },
          {
            text: "本月",
            onClick(picker) {
              const end = new Date();
              const start = dayjs(end).format("YYYY-MM-01 00:00:00");
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      },
    }
  },
  mounted() {
    $(".change-venue").on("click", "span", function () {
      _this.index = $(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      $(".change-box .box-list").eq(_this.index).show().siblings().hide();
    })

    const _this = this
    this.date = dayjs().format('YYYY-MM-DD')
    this.setIn = setInterval(function () {
      _this.time = dayjs().format('HH:mm:ss')
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.setIn)
  },
  methods: {
    basicsUp() {
      const dsp = $('#basicsUp').css('display')
      if (dsp === 'block') {
        this.tagName = '展开'
      } else {
        this.tagName = '收起'
      }
      $('#basicsUp').slideToggle();
    },
  }
}
</script>

<style scoped>
.main-box {
  padding: 10px;
  line-height: 24px;
  background: #00c7e6;
}

.main-box p {
  font-size: 14px;
  color: #666;
}

.header {
  width: 100%;
  height: 7vh;
  position: absolute;
  top: 8vh;
  left: 0;
  background-image: linear-gradient(to right, red, yellow);
  border-bottom: rgba(210, 227, 255, .1) 1px solid;
  /*background-position: center,center;*/
  /*background-size: 100% 100%;*/
  z-index: 6;
  display: flex;
  justify-content: space-between;
}

.header .header-left {
  width: 40%;
  height: 100%;
  padding-left: 2vh;
  line-height: 3vh;
}

.header .header-left h3 {
  display: inline-block;
  font-size: .9vw;
  color: #ecf0f2;
  line-height: 3vh;
  margin-top: 2vh;
  font-weight: normal;
}

.header .header-left h3 span {
  margin-right: .5vw;
}

.header .header-left h5 {
  display: inline-block;
  font-size: .9vw;
  color: #ecf0f2;
}

.header .header-center {
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 3vh;
}

.header .header-center h2 {
  font-size: 1.2vw;
  color: #ecf0f2;
  letter-spacing: .1vw
}

.header .header-right {
  width: 40%;
  height: 100%;
  padding-left: 2vw;
}

.header .header-right .menu {
  padding-left: 1.5vw;
  line-height: 3vh;
  padding-top: .1vh;
  float: left;
}

.header .header-right .menu li {
  display: inline-block;
  width: 6vw;
  font-size: .8vw;
  color: #ecf0f2;
  margin: 0 1.3vh;
  cursor: pointer;
  position: relative;
}

.header .header-right .menu li:hover {
  height: 5.2vh;
  border-bottom: 2px solid #fb4c3b;
}

.header .header-right .menu li span {
  border-radius: .1vh;
  background-color: #00c7e6;
  position: absolute;
  bottom: 0;
  left: 33%;
  display: none;
}

.header .header-right .menu li .on {
  color: #00c7e6;
  height: 5.2vh;
  border-bottom: 2px solid red;
}

.header .header-right .menu li.on span {
  display: block;
}

.header .header-right .menu li:hover {
  color: #00c7e6;
  /* font-weight: bold */
}

.header .header-right .menu li:hover span {
  display: block;
}

.header .header-right .menu li .select-box {
  background: rgba(0, 0, 0, 0.4);
  border-radius: 0 0 3px 3px;
  position: absolute;
  width: 100%;
  padding: 10px 0;
  top: 5.3vh;
  left: 0;
}

.header .header-right .menu li .select-box .option {
  display: inline-block;
  font-size: .8vw;
  color: black;
  margin-right: .6vw;
}

.header .header-right .menu li .select-box .option:hover {
  color: #00c7e6;
}

.header-left b {
  font-size: 1.5vw;
  left: 47%;
  top: 44%;
}

</style>
