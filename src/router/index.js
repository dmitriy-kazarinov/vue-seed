import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'conteiners/home/home.vue'
import About from 'conteiners/about/about.vue'

// application routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
