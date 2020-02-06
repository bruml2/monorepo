<template>
  <div class="routerLinks">
    <template v-for="(link, idx) in linksArr">
      <router-link :to="link[0]" :key="idx">{{link[1]}}</router-link>
      {{ idx == linksArr.length - 1 ? "" : separator }}
    </template>
  </div>
</template>

<script>
  // version 1.3; 2-6-2020; (removed activeLinkColor prop)
  // Add at bottom of router/index.js: "export {routes}";
  // For each route to be included, add the new property:
  //     linkText: "Home",
  // To omit a route from the list, don't add a linkText property
  //     or or give linkText the value undefined;
  // div.routerLinks is required (template cannot be the root element;
  import { routes } from "@/router/index.js"
  export default {
    props: {
      separator: {
        type: String,
        default: " | "
      }
    },
    computed: {
      linksArr() {
        return routes.filter( route => route.linkText !== undefined)
          .map( (route) => [ route.path, route.linkText ])
      }
    }
  }
</script>

<style lang="scss">
.routerLinks {
  a {
    font-weight: bold;
    color: #2c3e50;

    /* class is added to router-link anchor tag when active */
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
