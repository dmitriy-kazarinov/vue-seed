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
      msg: `Welcome on a ${this.customText} page`
    }
  }
}
