import { defineStore } from 'pinia'
import axios from '../plugins/axios'

const $axios = axios().provide.axios

export const useUserStore = defineStore('user', {
  state: () => ({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
  }),
  actions: {

    async getTokens() {
      await $axios.get('/sanctum/csrf-cookie')
    },

    async login(email, password) {
      await $axios.post('/login', {
        email: email,
        password: password
      })
    },

    async register(first_name, last_name, email, password, confirmPassword) {
      await $axios.post('/register', {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: confirmPassword
      })
    },

    async logout() {
      await $axios.post('/logout')
      this.resetUser()
    },

    resetUser() {      
      this.$state.id = ''
      this.$state.first_name = ''
      this.$state.last_name = ''
      this.$state.email = ''
    }

  },
  persist: true,
})