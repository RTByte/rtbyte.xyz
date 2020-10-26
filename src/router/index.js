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
      import(/* webpackChunkName: "commands" */ "../views/Commands.vue"),
    meta: { title: "Commands | RTByte" },
    children: [
      { path: "", redirect: "user" },
      {
        path: "user",
        component: () =>
          import(
            /* webpackChunkName: "commands" */ "../views/commands/UserCommands.vue"
          ),
        meta: { title: "Commands | RTByte" }
      },
      {
        path: "moderator",
        component: () =>
          import(
            /* webpackChunkName: "commands" */ "../views/commands/ModCommands.vue"
          ),
        meta: { title: "Commands | RTByte" }
      },
      {
        path: "management",
        component: () =>
          import(
            /* webpackChunkName: "commands" */ "../views/commands/MgmtCommands.vue"
          ),
        meta: { title: "Commands | RTByte" }
      },
      {
        path: "developer",
        component: () =>
          import(
            /* webpackChunkName: "commands" */ "../views/commands/DevCommands.vue"
          ),
        meta: { title: "Commands | RTByte" }
      }
    ]
  },
  {
    path: "/faq",
    name: "F.A.Q.",
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue"),
    meta: { title: "F.A.Q. | RTByte" },
    children: [
      { path: "", redirect: "general" },
      {
        path: "general",
        component: () =>
          import(/* webpackChunkName: "faq" */ "../views/faq/GeneralFAQ.vue"),
        meta: { title: "F.A.Q. | RTByte" }
      },
      {
        path: "configuration",
        component: () =>
          import(/* webpackChunkName: "faq" */ "../views/faq/ConfigFAQ.vue"),
        meta: { title: "F.A.Q. | RTByte" }
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: { title: "About us | RTByte" },
    children: [
      { path: "", redirect: "core-team" },
      {
        path: "core-team",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/about/CoreTeamAbout.vue"
          ),
        meta: { title: "About us | RTByte" }
      },
      {
        path: "sponsors",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/about/SponsorAbout.vue"
          ),
        meta: { title: "About us | RTByte" }
      }
    ]
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
