<script setup>
import axios from 'axios';
import { useActions } from "~/stores/useActions";

const actions = useActions()

const route = useRoute()
const { id } = route.params

const order = ref([])

await actions.getOrder(id).then((response) => {
    console.log(response)
    order.value = response.data
})


</script>

<template>
    <div>
        <BookOrder v-if="order" :orderInfo="order"/>
    </div>
</template>

<style lang="scss" scoped></style>