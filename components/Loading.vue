<script setup>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';

const animationElement = ref(null);

onMounted(() => {
    lottie.loadAnimation({
        container: animationElement.value,
        loop: true,
        autoplay: true,
        path: '/lottie/7y0mIz3QXE.json',
    });
});
</script>

<template>
    <div class="row mt-5">
        <div class="col-12 loading">
            <div ref="animationElement" class="animation">
                <img class="blinking-img" src="/img/logo.svg" alt="" srcset="">
            </div>
        </div>
    </div>
</template>

<style scoped>

.loading{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}
.animation {
    position: relative;
    z-index: -1;
}

.blinking-img {
    position: absolute;
    width: 300px;
    height: 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    animation: blink 2s infinite;
}

@keyframes blink {
    0% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}
</style>