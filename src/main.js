import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronDown,
  faTimes,
  faSquare,
  faEnvelope,
  faGlobe
} from "@fortawesome/pro-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faChevronDown,
  faTimes,
  faBars,
  faSquare,
  faEnvelope,
  faGlobe,
  faGithub,
  faTwitter,
  faInstagram
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
