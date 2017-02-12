import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as types from './types'

Vue.use(Vuex)

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

// get test data
const PROJECTS_DATA = 'https://jsonplaceholder.typicode.com/todos'

const options = {
  state: {
    projects: []
  },
  mutations: {
    [types.SET_PROJECT_LIST]: (state, { list }) => {
      state.projects = list
    }
  },
  getters: {
    completedProjects: state => {
      return state.projects.filter(project => project.completed).length
    },
    projectCount: state => {
      return state.projects.length
    }
  },
  actions: {
    [types.LOAD_PROJECT_LIST]: function ({ commit }) {
      axios.get(PROJECTS_DATA).then((response) => {
        commit(types.SET_PROJECT_LIST, { list: response.data })
      }, (err) => {
        console.log(err)
      })
    }
  }
}

const store = new Vuex.Store({ ...options })

export default store
