<script setup>
import lottie from 'lottie-web';
const animationElement = ref(null);
onMounted(() => {
    lottie.loadAnimation({
        container: animationElement.value,
        loop: true,
        autoplay: true,
        path: '/lottie/dots.json',
    });
});
</script>

<template>
    <div ref="animationElement" class="animation"></div>
</template>

<style lang="scss" scoped></style>