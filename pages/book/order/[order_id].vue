<script setup>

useHead({
    script: [
        {
            src: 'https://www.payhere.lk/lib/payhere.js',
            type: 'text/javascript',
        }
    ]
})

const route = useRoute()
const { order_id } = route.params

const order = ref([])

await axios.get(`https://vivaapi.xoaurahiru.com/api/order/` + order_id)
    .then(response => {
        order.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });


</script>

<template>
    <div>
        <BookOrder :order="order"/>
    </div>
</template>

<style lang="scss" scoped></style>