import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";
import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";
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
  release: "rtbyte-xyz@0.9.0",
  integrations: [new VueIntegration({ Vue, attachProps: true })]
});

const firebaseConfig = {
  apiKey: "AIzaSyB1ky4_OxVvT1owNudkzxgpZ1385O8AtdQ",
  authDomain: "rtbyte-project.firebaseapp.com",
  databaseURL: "https://rtbyte-project.firebaseio.com",
  projectId: "rtbyte-project",
  storageBucket: "rtbyte-project.appspot.com",
  messagingSenderId: "314677087715",
  appId: "1:314677087715:web:c5e6af9b505a36f6dba4d6",
  measurementId: "G-257QB1T95G"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

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

Vue.use(VueAxios, axios);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.prototype.$analytics = firebase.analytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
