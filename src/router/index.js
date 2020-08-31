import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: "RTByte" }
  },
  {
    path: "/commands",
    name: "Commands",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Commands.vue"),
    meta: { title: "Commands | RTByte" }
  },
  {
    path: "/faq",
    name: "F.A.Q.",
    component: () => import(/* webpackChunkName: "about" */ "../views/FAQ.vue"),
    meta: { title: "F.A.Q. | RTByte" }
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "About us | RTByte" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  }
});

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
