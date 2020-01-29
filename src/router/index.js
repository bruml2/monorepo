import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import AppNavHeaderPage from "../views/AppNavHeaderPage.vue";
import TimelineViewPage from "../views/TimelineViewPage.vue";
import MiscComponents from "../views/MiscComponents.vue";

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components (??)
// By injecting the router, we get access to it as this.$router as well as
//  the *current route* as this.$route inside of any component.
// clicking <router-link :to="..."> is the equivalent of calling router.push(...)
// You can identify a route with a name when linking to a route or performing navigations.
Vue.use(VueRouter);

// a <router-link> automatically gets the .router-link-active class when its target route is matched.
const routes = [
  {
    path: "/",
    name: "home",
    linkText: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    linkText: "About",
    component: About
  },
  {
  path: "/appNavHeader",
  name: "appNavHeader",
  linkText: "AppNavHeader",
  component: AppNavHeaderPage
  },
  {
    path: "/timelineView",
    name: "timelineView",
    linkText: "TimelineView",
    component: TimelineViewPage
  },
  {
    path: "/misc",
    name: "MiscComponents",
    linkText: "MiscComps",
    component: MiscComponents
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
export {routes};