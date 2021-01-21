import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './rem/rem.js'

// 引入axios组件
import axios from "./utils/request"

Vue.prototype.$axios = axios;

// 配置vant
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//二维码的生成
import VueQriously from 'vue-qriously'
Vue.use(VueQriously)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
