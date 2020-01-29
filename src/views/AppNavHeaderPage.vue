<template>
  <div class="appNavHeaderPage">
    <h2>Welcome to The AppNavHeader Page</h2>
    <p>The AppNaveHeader is included in the App.vue component and therefore is present at the top of every page. It looks like this:</p>
    <AppNavHeader>This is the title text!</AppNavHeader>
  </div>
</template>

<script>
// @ is an alias to /src
import AppNavHeader from "@/components/AppNavHeader.vue"

export default {
  name: "appNavHeaderView",
  components: {
    AppNavHeader
  },
  data() {
    return {
    }
  },
}
</script>

<style>
.appNavHeaderPage {
  font-family: Palatino, "New Times Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>