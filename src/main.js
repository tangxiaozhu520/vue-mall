import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.prototype.$bus=new Vue();

import { Toast } from 'vant';

Vue.use(Toast);
import FastClick from 'fastclick';
FastClick.attach(document.body);

import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload,{
  loading:require("./assets/img/common/placeholder.png")
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
