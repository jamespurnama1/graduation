import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    splash: true,
    progress: '0%',
  },
  mutations: {
    removeSplash(state) {
      state.splash = false;
      return state.splash;
    },
    updateProgress(state, n) {
      state.progress = n;
      return state.progress;
    },
  },
});
