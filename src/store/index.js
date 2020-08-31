import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: false,
    mobileMenu: false
  },
  mutations: {
    toggleLightMode(state) {
      state.light = !state.light;
    },
    toggleMobileMenu(state) {
      state.mobileMenu = !state.mobileMenu;
    }
  },
  actions: {},
  modules: {}
});
