import welcome from 'components/welcome/welcome.vue'

export default {
  name: 'about',
  data: function () {
    return {
      text: 'about page'
    }
  },
  components: {
    welcome
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
