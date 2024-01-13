import { defineStore } from "pinia";
import axios from "~/plugins/axios";

const $axios = axios().provide.axios;

export const useUserStore = defineStore('user', {
    state: () => ({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        api_token: '',
        isLoggedIn: false,
    }),
    actions: {
        async login(email, password) {
            await $axios.post('/login', {
              email: email,
              password: password,
            }).then((result) => {
                localStorage.setItem('token',result.data.data.api_token)
                this.$state.api_token = result.data.data.api_token
                this.$state.email = result.data.data.email
                this.$state.id = result.data.data.id
                this.$state.isLoggedIn = true;
            });
        },
        
        async register(name, email, password, confirmPassword) {
            await $axios.post('/register', {
              first_name: first_name,
              last_name: last_name,
              email: email,
              password: password,
              password_confirmation: confirmPassword
            })
        },

        async getUser() {
            let res = await $axios.get('/user')
            this.$state.id = res.data.data.id
            this.$state.first_name = res.data.data.first_name
            this.$state.last_name = res.data.data.last_name
            this.$state.email = res.data.data.email      
            this.$state.isLoggedIn = true
        },
      
        async logout() {
            await $axios.post('/logout')
            this.resetState()
        },

        resetState() {      
            this.$state.id = ''
            this.$state.first_name = ''
            this.$state.last_name = ''
            this.$state.email = ''
            this.$state.api_token = ''
            this.$state.isLoggedIn = false
        },
    },
    persist: true,
})