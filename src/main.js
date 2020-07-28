import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router.js'

// 引入全局初始化样式
import '@/styles/reset.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
