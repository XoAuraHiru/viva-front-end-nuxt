<script setup>
import { useAuthStore } from "~/stores/useAuthStore";

const form = ref({
    email: "",
});

const errors = ref()

const auth = useAuthStore();
const isLoading = ref(false)
const emailSent = ref(false)

async function handleReset() {
    isLoading.value = true
    if (auth.isLoggedIn) {

        isLoading.value = false
        return navigateTo("/");
    }

    const { data, error } = await auth.forgotPassword(form.value);

    if (!error.value) {
        isLoading.value = false;
        emailSent.value = true;
        console.log(data)
    } else {
        errors.value = error.value
    }
}
</script>

<template>
    <div class="sign section--bg" data-bg="/img/bg/section__bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="sign__content">
                        <!-- authorization form -->
                        <form v-if="!isLoading && !emailSent" @submit.prevent="handleReset" class="sign__form">
                            <a href="index.html" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>

                            <div class="sign__group">
                                <input v-model="form.email" type="text" class="sign__input" placeholder="Email">
                            </div>

                            <div class="sign__group sign__group--checkbox">
                                <input id="remember" name="remember" type="checkbox" checked="checked">
                                <label for="remember">I agree to the <a href="privacy.html">Privacy policy</a></label>
                            </div>

                            <button class="sign__btn" type="submit"><span>Recover</span></button>

                            <span class="sign__text">We will send a password to your Email</span>
                        </form>
                        <!-- end authorization form -->

                        <div v-if="isLoading && !emailSent" class="sign__form">
                            <a href="/" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>
                            <LottieLoading/>
                            <button class="sign__btn" type="submit" disabled><span>Sending. Please Wait</span></button>
                        </div>

                        <div v-if="emailSent" class="sign__form">
                            <a href="/" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>
                            <LottieEmail/>
                            <button class="sign__btn mt-2" type="submit" disabled><span>Sent</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>