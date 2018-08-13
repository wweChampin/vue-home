// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'
Vue.config.productionTip = false
FastClick.attach(document.body);
Vue.use(VueLazyLoad,{
    loading:require('common/image/default.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
