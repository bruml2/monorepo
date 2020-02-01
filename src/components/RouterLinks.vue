<template>
    <div class="routerLinks">
      <template v-for="(route, idx) in routesArr">
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link :to="route[0]" :key="idx">{{route[1]}}</router-link> {{ idx == routesArr.length - 1 ? "" : delimiter }}
      </template>
    </div>
</template>

<script>
// version 1.0; 2-1-2020;
  // add at bottom of router/index.js: "export {routes}";
  // for each route to be included, add the new property:
  //     linkText: "Home",
  // to omit a route from the list, don't add a linkText property
  //     or or give linkText the value undefined;
  import { routes } from "@/router/index.js"
  export default {
    props: {
      delimiter: {
        type: String,
        default: " | "
      }
    },
    computed: {
      routesArr() {
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