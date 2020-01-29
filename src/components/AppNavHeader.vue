<template>
  <div class="appNavHeader">
    <span class="title"><slot></slot></span>
    <div class="routerLinks">
      <template v-for="route in routesArr">
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link :to="route[0]" :key="route[1]">{{route[1]}}</router-link> |
      </template>
    </div>
    <button class="loraBtn">Should be Lora</button>
  </div>
</template>

<script>
  import { routes } from "@/router/index.js"
  export default {
    data() {
      return {
        //link: "bar"
      }
    },
    computed: {
      routesArr() {
        return routes.map( (route) => [ route.path, route.linkText ])
      }
    }
  }
</script>

<style lang="scss">
.appNavHeader {
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
  border: 2px solid black;
  background: wheat;
  color: #2c3e50;

  .title {
    font-weight: 700;
  }
  .routerLinks {
    margin-top: 7px;
  }
  .loraBtn {
    font-family: "Lora", monospace;
    font-size: 1rem;
  }
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