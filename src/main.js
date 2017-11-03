import Vue from 'vue'
import App from './App.vue'
import WeChatShare from 'vue-wechat-share'
Vue.use(WeChatShare)
new Vue({
  el: '#app',
  render: h => h(App)
})
