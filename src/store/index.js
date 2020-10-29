import Vue from 'vue'
import Vuex from 'vuex'
import vuexPersist from "vuex-persist";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    new vuexPersist({
      storage: window.localStorage,
    }).plugin,
  ],
})