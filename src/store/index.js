import Vue from "vue";
import Vuex from "vuex";
import { coreTeam } from "@/lib/util/constants";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    light: false,
    mobileMenu: false,
    coreTeam: coreTeam
  },
  getters: {},
  actions: {},
  mutations: {
    toggleLightMode(state) {
      state.light = !state.light;
    },
    toggleMobileMenu(state) {
      state.mobileMenu = !state.mobileMenu;
    }
  },
  modules: {}
});
