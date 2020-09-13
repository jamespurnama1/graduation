import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  state: {
    splash: true,
    progress: '0%',
    overlayImg: '',
    overlay: false,
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
    overlay(state, n) {
      state.overlayImg = n;
      return state.overlayImg;
    },
    closeOverlay(state) {
      state.overlay = false;
      return state.overlay;
    },
    openOverlay(state) {
      state.overlay = true;
      return state.overlay;
    },
  },
});
