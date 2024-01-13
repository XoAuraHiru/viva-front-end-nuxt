<script setup>
import axios from 'axios';

const email = ref('');
const password = ref('');
const errors = ref(null);
const isSigning = ref(false)

axios.defaults.withCredentials = true;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const handleLogin = async () => {
    isSigning.value = true
    axios.get('https://vivaapi.xoaurahiru.com/sanctum/csrf-cookie').then(response => {
        console.log(response.data);
    });
    const csrfToken = useCookie('XSRF-TOKEN')
    try {
        const response = await axios.post('https://vivaapi.xoaurahiru.com/login', {
            email,
            password,
        }, {
            headers: {
                'X-CSRF-TOKEN': csrfToken,
            },
        });

        isSigning.value = false
        console.log(response.data);
    } catch (error) {
        isSigning.value = false
        errors.value = error.response.data.message
        console.error(error);
    }
};

</script>

<template>
    <Auth v-auto-animate>
        <!-- authorization form -->
        <form v-if="!isSigning" @submit.prevent="handleLogin" class="sign__form">
            <a href="index.html" class="sign__logo">
                <img src="/img/logo.svg" alt="">
            </a>

            <div v-if="errors" class="sign__group">
                <span class="sign__text">{{ errors.data.message }}</span>
            </div>

            <div class="sign__group">
                <input type="email" v-model="email" class="sign__input" placeholder="Email">
            </div>

            <div class="sign__group">
                <input type="password" v-model="password" class="sign__input" placeholder="Password">
            </div>


            <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked">
                <label for="remember">Remember me</label>
            </div>

            <AuthSignBtn :isDisabled="true" v-if="!email | !password">Sign In</AuthSignBtn>

            <AuthSignBtn v-if="email && password">Sign In</AuthSignBtn>

            <span class="sign__text">Don't have an account? <nuxt-link to="/signup"><a>Sign
                        up!</a></nuxt-link></span>

            <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
        </form>
        <!-- end authorization form -->

        <div v-if="isSigning" class="sign__form">
            <LottieLoading />
            <AuthSignBtn :isDisabled="true">Signing In. Please Wait</AuthSignBtn>
        </div>
    </Auth>
</template>