import Vue from 'vue'
import projectList from '../../../src/components/projectsList/projectsList.vue'

describe('projectList component', () => {
  it('Should be an function', () => {
    const Constructor = Vue.extend(projectList)
    expect(Constructor).to.be.an('function')
  })
})
