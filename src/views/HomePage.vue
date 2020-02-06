<template>
  <div class="homeView">
    <h2>This is the Home router view.</h2>
    <p>The repository from which this app is built (<code>https://github.com/bruml2/monorepo/</code> &nbsp; [<a href="https://github.com/bruml2/monorepo/">link</a>]) contains the master (dev) copies of all of the components developed by B Ruml, each with a page demonstrating expected uses.</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>

<style>
.homeView {
  font-family: Palatino, "New Times Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: 70%;
  padding: 10px 30px;
  border: 3px solid crimson;
}
.homeView h2 {
  text-align: center;
  color: red;
}
.homeview code {
  font-size: inherit;
}
</style>
