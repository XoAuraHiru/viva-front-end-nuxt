<script setup>
const { login } = useSanctumAuth();

const isSigning = ref(false)
const errors = ref()
const email = ref('hirun@gmail.com')
const password = ref('123456789')

const userCredentials = {
    email: email.value,
    password: password.value,
};

async function handleLogin() {
    isSigning.value = true
    try {
        await login(userCredentials);
        isSigning.value = false
        router.push('/')
    } catch (error) {
        isSigning.value = false
        errors.value = error.response
    }
}

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