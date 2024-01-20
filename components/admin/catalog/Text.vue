<script setup>
defineProps({
    color: {
        type: String,
        default: 'default'
    }
})

</script>

<template>
    <div class="catalog__text" 
    :class="{
        'catalog__text--green': color === 'green',
        'catalog__text--red': color === 'red'
    }">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>

</style>