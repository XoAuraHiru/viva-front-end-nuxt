<script setup>
useHead({
    link: [
        {
            rel: "stylesheet",
            href: "/css/splide.min.css",
        },
        {
            rel: "stylesheet",
            href: "/css/slimselect.css",
        },
        {
            rel: "stylesheet",
            href: "/css/plyr.css",
        },
        {
            rel: "stylesheet",
            href: "/css/photoswipe.css",
        },
        {
            rel: "stylesheet",
            href: "/css/default-skin.css",
        },
    ],

    script: [
        {
            src: "/js/bootstrap.bundle.min.js",
        },
        {
            src: "/js/splide.min.js",
        },
        {
            src: "/js/smooth-scrollbar.js",
        },
        {
            src: "/js/slimselect.min.js",
        },
        {
            src: "/js/plyr.min.js",
        },
        {
            src: "/js/photoswipe.min.js",
        },
        {
            src: "/js/photoswipe-ui-default.min.js",
        },
        {
            src: "/js/main.js",
        },
        {
            src: "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs",
            type: "module"
        },
    ],
});
</script>

<template>
    <Header />
    <div>
        <slot />
    </div>
    <Footer/>
</template>

<style scoped></style>
