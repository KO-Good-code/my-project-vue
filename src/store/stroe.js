import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: null
  },
  mutations: {
    insert (state, lebel) {
      state.level = lebel
    }
  }
})
