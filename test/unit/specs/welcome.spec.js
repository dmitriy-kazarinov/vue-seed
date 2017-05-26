import Vue from 'vue'
import welcome from '../../../src/components/welcome/welcome.vue'

describe('welcome component', () => {
  const Constructor = Vue.extend(welcome)

  it('Should be an function', () => {
    expect(Constructor).to.be.an('function')
  })
})
