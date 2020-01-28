<template>
  <v-container>
    <v-card id="titleCard" v-if="currCard='title'" raised>
      <v-text-field
        v-model="title"
        label="Timeline Title"
      />
      <v-divider class="mx-4"></v-divider>
      <v-text-field
        v-model="subtitle"
        label="Subtitle"
      />
    </v-card>
    <v-card id="timeAxisCard" v-if="currCard='timeAxis'">

    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      currCard: "title",
      title: "",
      subtitle: ""
    }
  }
}
</script>

<style scoped>

</style>