<template>
  <div id="appNavHeader">
    <span class="title"><slot></slot></span>
    <div class="routerLinks">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/timelineView">Timeline View</router-link> |
      <router-link to="/misc">Miscellaneous Components</router-link>
    </div>
    <button id="loraBtn">Should be Lora</button>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
#appNavHeader {
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
  }
  #loraBtn {
    font-family: 'Lora', monospace;
  }

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>