<template>
  <div id="app">
    <AppNavHeader>B Ruml's Vue Component Monorepo</AppNavHeader>
    <div class="testRouterLinks">
      <RouterLinks separator=" ?? " activeLinkColor="red"></RouterLinks>
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavHeader from "@/components/AppNavHeader.vue";
import RouterLinks from "@/components/RouterLinks.vue";

export default {
  name: "appdotvue",
  components: {
    AppNavHeader,
    RouterLinks
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:700&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-size: 1em;
}
#app {
  font-family: "Roboto", "Lora", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.testRouterLinks {
  display: inline-block;
  margin: 5px auto;
  padding: 10px;
  border: 3px solid gold;
  text-align: center;

}
</style>
