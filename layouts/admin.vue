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


<style scoped>
.scrollbar-track-y {
    background-color: rgba(255, 255, 255, 0.05) !important;
    top: 0 !important;
    bottom: 0 !important;
    height: auto !important;
    width: 4px !important;
    border-radius: 4px !important;
    right: 0 !important;
    overflow: hidden;
    cursor: pointer;
}

.scrollbar-thumb-y {
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%) !important;
    width: 4px !important;
    border-radius: 4px !important;
    cursor: pointer;
}

.scrollbar-track-x {
    background-color: rgba(255, 255, 255, 0.05) !important;
    left: 0 !important;
    right: 0 !important;
    height: 4px !important;
    width: auto !important;
    border-radius: 4px !important;
    bottom: 0 !important;
    overflow: hidden;
}

.scrollbar-thumb-x {
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%) !important;
    height: 4px !important;
    border-radius: 4px !important;
    cursor: pointer;
}</style>