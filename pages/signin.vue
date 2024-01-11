<script setup>
import { useAuthStore } from "~/stores/useAuthStore";

const form = ref({
    email: "",
    password: ""
});

const isSigning = ref(false)
const errors = ref()

const auth = useAuthStore();

async function handleLogin() {
    isSigning.value = true
    if (auth.isLoggedIn) {
        isSigning.value = false
        return navigateTo("/");
    }

    const { error } = await auth.login(form.value);

    if (!error.value) {
        return navigateTo("/");
    } else {
        errors.value = error.value
        isSigning.value = false
    }
}

</script>

<template>
    <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
        <div class="container">
            <div class="row pt-5">
                <div class="col-12">
                    <div class="sign__content">
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

                            <button v-if="!isSigning" class="sign__btn" type="submit"><span>Sign in</span></button>

                            <span class="sign__text">Don't have an account? <nuxt-link to="/signup"><a>Sign
                                        up!</a></nuxt-link></span>

                            <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
                        </form>
                        <!-- end authorization form -->

                        <div v-if="isSigning" class="sign__form">
                            <div class="sign__group">
                                <iframe
                                    src="https://lottie.host/embed/2059ec4f-4342-4c34-a1a2-619c786233dc/BEv8Dzl3PI.json"></iframe>
                            </div>
                            <button class="sign__btn" type="submit" disabled><span>Signing In. Please Wait</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>