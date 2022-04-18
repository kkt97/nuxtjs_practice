<template>
  <v-list>
    <nuxt-link v-bind:to="{path: `register`}">가입하기</nuxt-link>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              email
            </th>
            <th class="text-left">
              delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <v-list-item v-for="user in users" :key="user.id">
              <td>
                <nuxt-link v-bind:to="{path: `detail/${user.id}`}">{{user.email}}</nuxt-link>
              </td>
              <td>
                <v-btn @click="set_RemoveInfo(userList)" color="danger">
                  삭제
                </v-btn>
              </td>
            </v-list-item>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-list>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  async asyncData ({ $axios, store }) {
    const users = await $axios.$get('/api/nuxt')
    store.commit('user/get_Users', users)
    return { users }
  },
  methods: {
    ...mapMutations({
      set_RemoveInfo: 'user/set_RemoveInfo'
    }),
  }
}
</script>

<style scoped>

</style>
