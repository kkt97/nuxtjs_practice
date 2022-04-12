<template>
  <v-card>
    <v-card-title class="subheading font-weight-bold">
      {{userList.name}}
    </v-card-title>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content>이름:</v-list-item-content>
        <v-list-item-content class="align-end">
          <input id="name" type="text" class="form-control" name="name" v-model="userList.name">
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>이메일:</v-list-item-content>
        <v-list-item-content class="align-end">
          <input id="email" type="text" class="form-control" name="email" v-model="userList.email">
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>아이디:</v-list-item-content>
        <v-list-item-content class="align-end">
          <input id="user_id" type="text" class="form-control" name="user_id" v-model="userList.user_id">
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-content>등록시간:</v-list-item-content>
        <v-list-item-content class="align-end">
          {{dateTimeFormat(userList.created_at,'YYYY-MM-DD HH:mm:ss')}}
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-btn color="warning" @click="upTodo(userList)">
      Store 저장!
    </v-btn>
    <nuxt-link v-bind:to="{path: `/test/user/list`}">리스트</nuxt-link>
  </v-card>
</template>

<script>

import { mapMutations } from 'vuex'
import mixinDateTimeFormat from '@/mixins/dateTimeFormat'

export default {
  mixins: [
    mixinDateTimeFormat
  ],
  data () {
    return {
      userList: {
        name: '',
        email: '',
        user_id: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      upTodo: 'user/upTodo'
    })
  },
  async asyncData ({ store, params }) {
    const userList = store.getters['user/getTodoById'].find((userInfo) => {return userInfo.id == params.id})
    // console.log(userList)
    if (userList) {
      return { userList }
    }
  }
}
</script>

<style scoped>
input {
  border: 1px solid #ffffff; color: #ffffff;
}
</style>
