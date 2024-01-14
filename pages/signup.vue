<script setup>

import axios from 'axios'

const errors = ref()
const isSigning = ref(false)
const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

axios.defaults.withCredentials = true
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.baseURL = 'http://localhost:8000'

async function handleRegister() {
    isSigning.value = true
    await useFetch('https://vivaapi.xoaurahiru.com/sanctum/csrf-cookie', {
        method: 'GET',
        credentials: 'include',
        watch: false,
    })
    const token = useCookie('XSRF-TOKEN');
    try {
        await useFetch('https://vivaapi.xoaurahiru.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                referer: "https://vivafront.xoaurahiru.com",
                'X-XSRF-TOKEN': token,
            },
            body: form,
            credentials: 'include',
            watch: false,
            mode: 'cors',
        })

        isSigning.value = false
        router.push('/')
    } catch (error) {
        isSigning.value = false
        errors.value = error.response
    }
    
}

</script>

<template>
    <div class="sign section--bg" data-bg="/img/bg/section__bg.jpg">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12">
                    <div class="sign__content">
                        <!-- registration form -->
                        <form v-if="!isSigning" @submit.prevent="handleRegister" action="#" class="sign__form">
                            <a href="index.html" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>

                            <div v-if="errors" class="sign__group">
                                <span class="sign__text">{{ errors.data.message }}</span>
                            </div>

                            <div class="sign__group">
                                <input v-model="form.first_name" type="text" class="sign__input" placeholder="First Name">
                            </div>

                            <div class="sign__group">
                                <input v-model="form.last_name" type="text" class="sign__input" placeholder="Last Name">
                            </div>

                            <div class="sign__group">
                                <input v-model="form.email" type="text" class="sign__input" placeholder="Email">
                            </div>

                            <div class="sign__group">
                                <input v-model="form.password" type="password" class="sign__input" placeholder="Password">
                            </div>

                            <div class="sign__group">
                                <input v-model="form.password_confirmation" type="password" class="sign__input"
                                    placeholder="Confirm Password">
                            </div>

                            <div class="sign__group sign__group--checkbox">
                                <input id="remember" name="remember" type="checkbox" checked="checked">
                                <label for="remember">I agree to the <a href="privacy.html">Privacy policy</a></label>
                            </div>

                            <AuthSignBtn>Sign Up</AuthSignBtn>

                            <span class="sign__text">Already have an account? <nuxt-link to="/signin"><a>Sign
                                        in!</a></nuxt-link></span>
                        </form>
                        <!-- registration form -->

                        <div v-if="isSigning" class="sign__form">
                            <LottieLoading />
                            <AuthSignBtn :isDisabled="true">Signing In. Please Wait</AuthSignBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>