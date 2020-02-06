<template>
  <div class="routerLinks">
    <template v-for="(link, idx) in linksArr">
      <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
      <router-link :to="link[0]" :key="idx" :style="{'color': linkColor(idx)}" ref="links">{{link[1]}}</router-link>
      {{ idx == linksArr.length - 1 ? "" : separator }}
    </template>
  </div>
</template>

<script>
  // version 1.3; 2-6-2020;
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
      },
      activeLinkColor: {
        type: String,
        default: "#42b983"
      },
      inactiveLinkColor: {
        type: String,
        default: "#2c3e50"
      }
    },
    computed: {
      linksArr() {
        return routes.filter( route => route.linkText !== undefined)
          .map( (route) => [ route.path, route.linkText ])
      }
    },
    methods: {
      linkColor(idx) {
        // there will be no refs on initial render;
        if (!this.$refs.links) return this.inactiveLinkColor
        let el = this.$refs.links[idx].$el
        return el.classList.contains("router-link-exact-active") ?
          this.activeLinkColor : this.inactiveLinkColor
      }
    },
    mounted() {
      // Force the instance to render a second time to generate refs;
      this.$forceUpdate();
    }
  }
</script>

<style lang="scss">
.routerLinks {
  a {
    font-weight: bold;
  }
}
</style>