<script setup>
import {useAuthStore} from "~/stores/useAuthStore";

const form = ref({
    email: "hirun@gmail.com",
    password: "123456789"
});

const auth = useAuthStore();
 
async function handleLogin() {
  if (auth.isLoggedIn) {
    return navigateTo("/");
  }
 
  const { error } = await auth.login(form.value);
 
  if (!error.value) {
    return navigateTo("/");
  }
}

</script>

<template>
    <div class="sign section--bg" data-bg="img/bg/section__bg.jpg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="sign__content">
                        <!-- authorization form -->
                        <form @submit.prevent="handleLogin" class="sign__form">
                            <a href="index.html" class="sign__logo">
                                <img src="/img/logo.svg" alt="">
                            </a>

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

                            <button class="sign__btn" type="submit"><span>Sign in</span></button>

                            <span class="sign__text">Don't have an account? <a href="signup.html">Sign up!</a></span>

                            <span class="sign__text"><a href="forgot.html">Forgot password?</a></span>
                        </form>
                        <!-- end authorization form -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped></style>