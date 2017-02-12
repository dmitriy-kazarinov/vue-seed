import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'conteiners/home/home.vue'
import About from 'conteiners/about/about.vue'
import Projects from 'conteiners/projects/projects.vue'
import NotFound from 'conteiners/notFound/notFound.vue'

// application routes
const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: Projects },
  {path: '*', name: 'NotFound', component: NotFound}
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
