import welcome from 'components/welcome/welcome.vue'

export default {
  name: 'home',
  data: function () {
    return {
      text: 'Your App',
      message: 'Home',
      show: true
    }
  },
  methods: {
    messageHome: function () {
      alert(this.customMessage)
    }
  },
  components: {
    welcome
  },
  computed: {
    customMessage: function () {
      return `This is ${this.message}`
    }
  }
}
