import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "RTByte",
      metaTags: [
        {
          name: "og:title",
          content: "RTByte"
        },
        {
          name: "twitter:title",
          content: "RTByte"
        }
      ]
    }
  },
  {
    path: "/commands",
    name: "Commands",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Commands.vue"),
    meta: {
      title: "Commands | RTByte",
      metaTags: [
        {
          name: "og:title",
          content: "Commands | RTByte"
        },
        {
          name: "twitter:title",
          content: "Commands | RTByte"
        }
      ]
    }
  },
  {
    path: "/faq",
    name: "F.A.Q.",
    component: () => import(/* webpackChunkName: "about" */ "../views/FAQ.vue"),
    meta: {
      title: "F.A.Q. | RTByte",
      metaTags: [
        {
          name: "og:title",
          content: "F.A.Q. | RTByte"
        },
        {
          name: "twitter:title",
          content: "F.A.Q. | RTByte"
        }
      ]
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About us | RTByte",
      metaTags: [
        {
          name: "og:title",
          content: "About us | RTByte"
        },
        {
          name: "twitter:title",
          content: "About us | RTByte"
        }
      ]
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach(to => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
