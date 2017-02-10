export default {
  name: 'welcome',
  props: {
    customText: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      msg: `Welcome to ${this.customText}`
    }
  }
}
