<template>
  <div id="app">
    <AppNavHeader>B Ruml's Vue Component Monorepo</AppNavHeader>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavHeader from "@/components/AppNavHeader.vue";

export default {
  name: "appdotvue",
  components: {
    AppNavHeader
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lora:700&display=swap");
#app {
  font-family: "Roboto", "Lora", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
