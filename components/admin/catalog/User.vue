<script setup>
    const props = defineProps({
        name: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        }
    })
</script>

<template>
    <div class="catalog__user">
        <div class="catalog__avatar">
            <img src="/img/user.svg" alt="">
        </div>
        <div class="catalog__meta">
            <h3>{{ props.name }}</h3>
            <span>{{ props.email }}</span>
        </div>
    </div>
</template>


<style scoped>

</style>