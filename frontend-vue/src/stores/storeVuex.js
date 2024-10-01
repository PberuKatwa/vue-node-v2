import { createStore } from 'vuex'

const store = createStore({
    strict: true,
    state() {
      return {
        token: null
      }
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      }
    },
    actions: {
      setToken({ commit }, token) {
        commit('setToken', token)
      }
    }
  })

export default store