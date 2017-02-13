import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from 'conteiners/home/home.vue'
import About from 'conteiners/about/about.vue'
import Projects from 'conteiners/projects/projects.vue'
import Project from 'conteiners/project/project.vue'
import NotFound from 'conteiners/notFound/notFound.vue'

// application routes
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/projects/:id', name: 'project', component: Project },
  { path: '*', name: 'notFound', component: NotFound }
]

// export router instance
export default new Router({
  mode: 'history',
  routes,
  linkActiveClass: 'is-active'
})
