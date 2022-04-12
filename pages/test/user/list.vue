<template>
  <v-list>
    <v-list-item v-for="user in users" :key="user.slug">
      <NuxtLink :to="`/api/nuxt`">
      </NuxtLink>
      <nuxt-link v-bind:to="{path: `detail/${user.id}`}">{{user.email}}</nuxt-link>
      <br>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  async asyncData ({ $axios, store }) {
    const users = await $axios.$get('/api/nuxt')
    store.commit('user/setUsers', users)
    return { users }
  }
}
</script>

<style scoped>

</style>
