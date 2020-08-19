import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
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

Sentry.init({
  dsn:
    "https://d2ba698820e1461597577178f7c19501@o435895.ingest.sentry.io/5396118",
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});

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
