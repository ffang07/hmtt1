import Vue from 'vue'
import App from './App.vue'
import router from '@/routers/index.js'
import {Toast} from 'vant'

// 引入全局初始化样式
import '@/styles/reset.less'

Vue.use(Toast);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
