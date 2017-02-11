import Welcome from 'components/welcome/welcome.vue'
import ProjectsList from 'components/projectsList/projectsList.vue'

export default {
  name: 'projects',
  data: function () {
    return {
      text: 'Projects'
    }
  },
  components: {
    Welcome,
    ProjectsList
  },
  mounted: function () {
    this.$store.dispatch('LOAD_PROJECT_LIST')
  }
}
