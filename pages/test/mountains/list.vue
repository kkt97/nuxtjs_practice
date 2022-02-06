<template>
  <v-list>
    <v-list-item
      v-for="mountain in mountains"
      :key="mountain.slug">
      <NuxtLink :to="`/test/mountains/${mountain.slug}`">
        {{mountain.title}}
      </NuxtLink>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'mountains-list',
  async asyncData ({ $axios }) {
    // https://axios.nuxtjs.org/usage/
    const mountains = await $axios.$get('/mountains')
    return { mountains }
  }
}
</script>

<style scoped>

</style>
