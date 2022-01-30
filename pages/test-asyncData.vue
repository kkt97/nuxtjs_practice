<template>
  <v-list>
    <v-list-item
      v-for="mountain in mountains"
      :key="mountain.slug">
      {{mountain.title}}
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'test-async-data',
  async asyncData ({ $axios, $config }) {
    // https://axios.nuxtjs.org/usage/
    console.log($axios, $config)
    const mountains = await $axios.$get('/mountains')
    return { mountains }
  }
}
</script>

<style scoped>

</style>
