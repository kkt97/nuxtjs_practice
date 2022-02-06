<template>
  <v-card>
    <v-row>
      <v-img
        max-width="600px"
        :src="filteredMountain.image"
      ></v-img>
    </v-row>
    <v-row>
      {{filteredMountain.title}}
    </v-row>
    <v-row>
      {{filteredMountain.description}}
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'mountains-detail',
  async asyncData ({ $axios, params, redirect }) {
    const mountains = await $axios.$get('/mountains')
    const filteredMountain = mountains.find(el =>
      el.slug === params.slug
    )
    if (filteredMountain) {
      return { filteredMountain }
    }
    redirect('/test/mountains/list')
  }
}
</script>

<style scoped>

</style>
