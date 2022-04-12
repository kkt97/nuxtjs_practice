<template>
  <v-list>
    <nuxt-link v-bind:to="{path: `regist`}">가입하기</nuxt-link>
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
    store.commit('user/Users', users)
    return { users }
  }
}
</script>

<style scoped>

</style>
