<script setup>
import {useAuthStore} from "~/stores/useAuthStore";

const form = ref({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: ""
});

const auth = useAuthStore();

async function handleRegister() {
  const {error} = await auth.register(form.value);
  if (!error.value) {
    return navigateTo("/");
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
                        <form @submit.prevent="handleRegister" action="#" class="sign__form">
                            <a href="index.html" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>

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
                                <input v-model="form.password_confirmation" type="password" class="sign__input" placeholder="Confirm Password">
                            </div>

                            <div class="sign__group sign__group--checkbox">
                                <input id="remember" name="remember" type="checkbox" checked="checked">
                                <label for="remember">I agree to the <a href="privacy.html">Privacy policy</a></label>
                            </div>

                            <button class="sign__btn" type="submit"><span>Sign up</span></button>

                            <span class="sign__text">Already have an account? <nuxt-link to="/signin"><a>Sign
                                        in!</a></nuxt-link></span>
                        </form>
                        <!-- registration form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>