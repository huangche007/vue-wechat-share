import Vue from 'vue'
import App from './App.vue'
import WeChatShare from './lib/wechatSocialShare'
Vue.use(WeChatShare)
new Vue({
  el: '#app',
  render: h => h(App)
})
