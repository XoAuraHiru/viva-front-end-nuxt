<script setup>
import axios from 'axios';

useHead({
    script: [
        {
            src: 'https://www.payhere.lk/lib/payhere.js',
            type: 'text/javascript',
        }
    ]
})

const route = useRoute()
const { id } = route.params

const order = ref([])

await axios.get(`https://vivaapi.xoaurahiru.com/api/order/` + id)
    .then(response => {
        order.value = response.data.data
        console.log(order.value);
    })
    .catch(error => {
        console.log(error);
    });


</script>

<template>
    <div>
        <BookOrder :orderInfo="order"/>
    </div>
</template>

<style lang="scss" scoped></style>