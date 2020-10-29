import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant"
import "vant/lib/index.css"
import axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(Vant)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

import APP from './apl/index'
Vue.prototype.$APP = APP;

//rem
import './config/rem.js';
//解决全局路由导航切换
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')