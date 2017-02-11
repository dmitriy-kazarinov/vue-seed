import { mapState } from 'vuex'

export default {
  name: 'projectList',
  computed: mapState([
    'projects'
  ])
}
