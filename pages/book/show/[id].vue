<script setup>
    const route = useRoute()
    const { id } = route.params
</script>

<template>
    <div>
        <BookCard :showID="id"/>
    </div>
</template>



<style lang="scss" scoped>

</style>