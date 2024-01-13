<script setup>
import { useAuthStore } from "~/stores/useAuthStore";

const form = ref({
    email: "",
    password: ""
});

const isSigning = ref(false)
const errors = ref()

const auth = useAuthStore();

// async function handleLogin() {
//     isSigning.value = true
//     if (auth.isLoggedIn) {
//         isSigning.value = false
//         return navigateTo("/");
//     }

//     const { error, response } = await auth.login(form.value);

//     if (response && response.status === 204) {
//         return navigateTo("/");
//     } else {
//         errors.value = error.value
//         isSigning.value = false
//     }
// }

async function handleLogin() {
    isSigning.value = true

    axios.defaults.withCredentials = true;
    axios.defaults.withXSRFToken = true;

    axios.get('https://vivaapi.xoaurahiru.com/sanctum/csrf-cookie').then(response => {
        axios.post('https://vivaapi.xoaurahiru.com/login', {
            email: this.form.email,
            password: this.form.password
        }).then(response => {
            isSigning.value = false
            return navigateTo("/");
        }).catch(error => {
            errors.value = error.value
            isSigning.value = false
        });
    });

}
</script>

<template>
    <Auth>
        <!-- authorization form -->
        <form v-if="!isSigning" @submit.prevent="handleLogin" class="sign__form">
            <a href="index.html" class="sign__logo">
                <img src="/img/logo.svg" alt="">
            </a>

            <div v-if="errors" class="sign__group">
                <span class="sign__text">{{ errors.data.message }}</span>
            </div>

            <div class="sign__group">
                <input type="email" v-model="form.email" class="sign__input" placeholder="Email">
            </div>

            <div class="sign__group">
                <input type="password" v-model="form.password" class="sign__input" placeholder="Password">
            </div>


            <div class="sign__group sign__group--checkbox">
                <input id="remember" name="remember" type="checkbox" checked="checked">
                <label for="remember">Remember me</label>
            </div>

            <AuthSignBtn>Sign In</AuthSignBtn>

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