<script setup>
useHead({
    link: {
        rel: "stylesheet",
        href: "/css/admin.css",
    },
    script: {
        src: "/js/admin.js",
    },
})
</script>

<template>
    <AdminHeader />
    <AdminSideBar />

    <slot />
</template>


<style lang="scss" scoped>

</style>