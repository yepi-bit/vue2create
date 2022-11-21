import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAreaLinkage from 'vue-area-linkage'

// 全局引用样式
import 'vue-area-linkage/dist/index.css'
Vue.use(VueAreaLinkage)

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
