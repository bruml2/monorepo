import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import TimelineViewPage from "../views/TimelineViewPage.vue";
import MiscComponents from "../views/MiscComponents.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/timelineView",
    name: "timelineView",
    component: TimelineViewPage
  },
  {
    path: "/misc",
    name: "MiscComponents",
    component: MiscComponents
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
