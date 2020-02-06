import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.baseURL = 'http://localhost:3000/'

export default new Vuex.Store({
  state: {
    authentricated: false,
    current_user: {},
    profile: {},
    errors: {},
    users: []
  },
  mutations: {
    profile (profile) {
      this.profile = profile
    },
    userAthenticate (state, current_user) {
      state.current_user = current_user
    },
    errors_log (state, error) {
      state.errors = error
    },
    getUsers (state, data) {
      state.users = data
    }
  },
  actions: {
    authenticate (context, user) {
      // alert(user.username + user.password)
      axios.post('/sessions', {
        body: {
          'username': user.username,
          'password': user.password
        }
      })
      .then(response => {
        alert(response.data)
      })
      .catch(error => {
        context.commit('errors_log', error)
      })
    },
    getUsers (context) {
      axios.get('/auth/users')
      .then(result => {
        context.commit('getUsers', result)
      })
      .then( errors => {
        context.commit('errors_log', errors)

      })
    }
  },
  modules: {
  }
})
