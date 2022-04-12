<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <br>
        <div class="card">
          <div class="card-header">Register</div>
          <div class="card-body">
            <div class="row mb-3">
              <span for="name" class="col-md-4 col-form-label text-md-end">이름</span>
              <div class="col-md-6">
                <input id="name" type="name" class="form-control" name="name" v-model="userList.name">
              </div>
            </div>
            <div class="row mb-3">
              <label for="user_id" class="col-md-4 col-form-label text-md-end">아이디</label>
              <div class="col-md-6">
                <input id="user_id" type="text" class="form-control" name="user_id" v-model="userList.user_id">
              </div>
            </div>
            <div class="row mb-3">
              <label for="email" class="col-md-4 col-form-label text-md-end">이메일</label>
              <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email" v-model="userList.email">
              </div>
            </div>
            <br>
            <div class="row mb-3">
              <label for="password" class="col-md-4 col-form-label text-md-end">비밀번호</label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" v-model="userList.password">
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-md-6 offset-md-4">
                <v-btn @click="regiSter(userList)" class="btn btn-primary">
                  가입하기
                </v-btn>
                &nbsp;
                <button class="btn btn-primary" @click="resetForm()">
                  Reset
                </button>
              </div>
            </div>
            <router-view :key="$route.fullPath"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations} from "vuex";

export default {

  data() {
    return {
      userList: {
        name: '',
        user_id: '',
        email: '',
        password: '',
      }
    }
  },

  methods: {
    ...mapMutations({
      regiSter: 'user/regiSter'
    }),

    resetForm () {
      this.item = {
        name: '',
        user_id: '',
        email: '',
        password: ''
      }
    }
  }
}

</script>


<style scoped>
input {
  border: 1px solid #ffffff; color: #ffffff;
}
</style>
