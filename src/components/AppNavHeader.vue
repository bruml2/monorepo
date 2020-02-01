<template>
  <div class="appNavHeader">
    <span class="title"><slot></slot></span>
    <RouterLinks></RouterLinks>
    <button class="loraBtn">Should be Lora</button>
  </div>
</template>

<script>
  import RouterLinks from "@/components/RouterLinks.vue";

  export default {
    components: { RouterLinks },
  }
</script>

<style lang="scss">
.appNavHeader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  border: 2px solid black;
  background: wheat;
  color: #2c3e50;

  .title {
    font-weight: 700;
  }
  .loraBtn {
    font-family: "Lora", monospace;
    font-size: 1rem;
  }
}
</style>