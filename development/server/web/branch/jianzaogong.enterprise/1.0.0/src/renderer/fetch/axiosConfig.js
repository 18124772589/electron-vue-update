import axios from 'axios' // axios 配置 及拦截器
import Vue from 'vue'
axios.defaults.timeout = 60000
axios.defaults.withCredentials = true // 带cookie请求
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'// 请求头部

// 可全局配置请求加载的一些效果
axios.interceptors.request.use(config => {
  return config
}, error => {
  Vue.prototype.$loading.close()
  Vue.prototype.$toast('网络出差了')
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  Vue.prototype.$loading.close()
  return response
}, error => {
  Vue.prototype.$loading.close()
  Vue.prototype.$toast('网络出差了')
  return Promise.reject(error)
})
