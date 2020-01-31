<template>
    <div class="routerLinks">
      <template v-for="route in routesArr">
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link :to="route[0]" :key="route[1]">{{route[1]}}</router-link> |
      </template>
    </div>
</template>

<script>
  // add at bottom of router/index.js: "export {routes}";
  // add a new property to each route:
  //     linkText: "Home",
  import { routes } from "@/router/index.js"
  export default {
    computed: {
      routesArr() {
        return routes.map( (route) => [ route.path, route.linkText ])
      }
    }
  }
</script>

<style lang="scss">
.routerLinks {
  margin-top: 7px;
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