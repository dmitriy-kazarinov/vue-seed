import Vue from 'vue'

import store from './store'
import router from './router'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
