<template>
  <div class="testing">
    <h3>{{ message }}</h3>
    <div class="foo">Emmet of 'div.foo' works!</div>
  </div>
</template>

<script>
  console.log("Testing.vue works!")
  export default {
    data() {
      return {
        message: "Hello there world!"
      }
    },
  }
</script>

<style lang="scss" scoped>
h3 {
  text-align: center;
}
</style>