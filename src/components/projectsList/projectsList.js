import { mapState } from 'vuex'

export default {
  name: 'projectList',
  methods: {
    goToProject: function (id) {
      this.$router.push({name: 'project', params: { id: id }})
    }
  },
  computed: {
    ...mapState([
      'projects'
    ])
  }
}
