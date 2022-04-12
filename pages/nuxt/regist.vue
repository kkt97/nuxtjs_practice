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
                <input id="name" type="name" class="form-control" name="name" v-model="item.name" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="user_id" class="col-md-4 col-form-label text-md-end">아이디</label>
              <div class="col-md-6">
                <input id="user_id" type="text" class="form-control" name="user_id" v-model="item.user_id" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="email" class="col-md-4 col-form-label text-md-end">이메일</label>
              <div class="col-md-6">
                <input id="email" type="email" class="form-control" name="email" v-model="item.email" autofocus>
              </div>
            </div>
            <br>
            <div class="row mb-3">
              <label for="password" class="col-md-4 col-form-label text-md-end">비밀번호</label>
              <div class="col-md-6">
                <input id="password" type="password" class="form-control" name="password" v-model="item.password" autofocus>
              </div>
            </div>
            <div class="row mb-3">
              <label for="password" class="col-md-4 col-form-label text-md-end">비밀번호 확인</label>
              <div class="col-md-6">
                <input id="password_confirmation" type="password" class="form-control" name="password_confirmation" v-model="item.password_confirmation" autofocus>
              </div>
            </div>
            <div class="row mb-0">
              <div class="col-md-6 offset-md-4">
                <button @click="register" class="btn btn-primary">
                  가입하기
                </button>
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
import axios from 'axios'
import { VueDaumPostcode } from 'vue-daum-postcode'
import Vue from 'vue'

Vue.use(VueDaumPostcode)

const URL_API_REGISTER = 'http://localhost:8000/api/nuxt/register'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Register',

  data() {
    return {
      item: {
        id: 0,
        name: '',
        user_id: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      visible: false,
      itemId: 0,
      items: [],
    }
  },

  methods: {

    async register () {

      await axios.post(URL_API_REGISTER, {
        ...this.item
      }).then(() => {
        this.$router.push('/')
      }).catch(e => {
        const error = e.response.data.errors;

        console.log(error.user_id)
        console.log(error.email)
        console.log(error.password)
        this.errMsg = {
          ...error
        }
        alert('회원가입이 되지 않았습니다.')
      })
    },

    resetForm () {
      this.item = {
        name: '',
        user_id: '',
        email: '',
        password: '',
        password_confirmation: '',
      }
    }

  },
  watch: {
    item: {
      deep: true,
      handler () {
        console.log('watch', this.item)
      }
    }
  }
}

</script>


<style scoped>

</style>
