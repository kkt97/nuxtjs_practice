<template>
  <v-list>
    <v-list-item
      v-for="mountain in mountains"
      :key="mountain.slug">
      <NuxtLink :to="`/test/mountains/${mountain.slug}`">
        {{mountain.title}}
      </NuxtLink>
      Updated At {{dateTimeFormat(mountain.updatedAt,'YYYY-MM-DD')}}
    </v-list-item>
  </v-list>
</template>

<script>
import mixinDateTimeFormat from '@/mixins/dateTimeFormat'
export default {
  name: 'mountains-list',
  mixins: [
    mixinDateTimeFormat
  ],
  async asyncData ({ $axios }) {
    // https://axios.nuxtjs.org/usage/
    const mountains = await $axios.$get('/mountains')
    return { mountains }
  }
}
</script>

<style scoped>

</style>
