<script setup>

const props = defineProps({
    orders: {
        type: Array,
        required: true
    }
})

const orders = ref(props.orders)

const columns = [
    {
        key: 'id',
        label: 'OrderID',
        sortable: true
    },
    {
        key: 'title',
        label: 'Title',
        sortable: true
    },
    {
        key: 'status',
        label: 'Status',
        sortable: true
    },
    {
        key: 'price',
        label: 'Price',
        sortable: true
    }
]

</script>

<template>
    <div class="dashbox">
        <div class="dashbox__title">
            <h3><img src="/img/film.svg" alt="">Recent Orders</h3>

            <div class="dashbox__wrap">
                <a class="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" />
                    </svg></a>
                <a class="dashbox__more" href="catalog.html">View All</a>
            </div>
        </div>

        <div class="dashbox__table-wrap dashbox__table-wrap--1">
            <table class="dashbox__table">
                <thead>
                    <tr>
                        <th v-for="column in columns">{{ column.label }}</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-if="orders" v-for="order in orders">
                        <td>
                            <div class="dashbox__table-text">{{order.order_id}}</div>
                        </td>
                        <td>
                            <div class="dashbox__table-text"><a href="details1.html">The Lost
                                    City</a></div>
                        </td>
                        <td>
                            <div class="dashbox__table-text">{{order.paid_status}}</div>
                        </td>
                        <td>
                            <div class="dashbox__table-text dashbox__table-text--rate">{{order.amount}}</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>