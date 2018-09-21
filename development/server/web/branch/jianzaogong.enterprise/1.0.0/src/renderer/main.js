import Vue from 'vue'
import App from './App'
import store from './store'
import axios from 'axios'

import './assets/css/base.less' // 样式初始化
// import './assets/font/iconfont.css' // 引入字体图标
import './fetch/axiosConfig.js' // aixos配置
import router from './router' // 路由及配置
import './router/config.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    console.log(process.env.NODE_ENV + '环境');
  }
})
