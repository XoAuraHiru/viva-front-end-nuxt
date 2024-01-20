
import type OrderVue from '~/components/book/Order.vue';
<script setup>
defineProps({
    order: {
        type: Object,
        default: {}
    }
})

const emits = defineEmits(['delete'])

</script>

<template>
    <tr>
        <td>
            <AdminCatalogText>{{ order.order_id }}</AdminCatalogText>
        </td>
        <td>
            <AdminCatalogUser :email="order.user.email" :name="order.user.first_name"/>
        </td>
        <td>
            <AdminCatalogText>{{ new Date(order.created_at).toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) }}
            </AdminCatalogText>
        </td>
        <td>
            <AdminCatalogText v-if="order.paid_status === 0" :color="'default'">Pending</AdminCatalogText>
            <AdminCatalogText v-if="order.paid_status === 1" :color="'green'">Paid</AdminCatalogText>
            <AdminCatalogText v-if="order.paid_status === 2" :color="'red'">Refunded</AdminCatalogText>
            <AdminCatalogText v-if="order.paid_status === 3" :color="'red'">Cancelled</AdminCatalogText>
        </td>

        <td>
            <AdminCatalogText> {{ order.amount }}</AdminCatalogText>
        </td>
        <td>
            <div class="catalog__btns">
                <button  type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--view"
                    data-bs-target="#modal-view">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.92,11.6C19.9,6.91,16.1,4,12,4S4.1,6.91,2.08,11.6a1,1,0,0,0,0,.8C4.1,17.09,7.9,20,12,20s7.9-2.91,9.92-7.6A1,1,0,0,0,21.92,11.6ZM12,18c-3.17,0-6.17-2.29-7.9-6C5.83,8.29,8.83,6,12,6s6.17,2.29,7.9,6C18.17,15.71,15.17,18,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Z" />
                    </svg>
                </button>
                <a  href="edit-user.html" class="catalog__btn catalog__btn--edit">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M5,18H9.24a1,1,0,0,0,.71-.29l6.92-6.93h0L19.71,8a1,1,0,0,0,0-1.42L15.47,2.29a1,1,0,0,0-1.42,0L11.23,5.12h0L4.29,12.05a1,1,0,0,0-.29.71V17A1,1,0,0,0,5,18ZM14.76,4.41l2.83,2.83L16.17,8.66,13.34,5.83ZM6,13.17l5.93-5.93,2.83,2.83L8.83,16H6ZM21,20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z" />
                    </svg>
                </a>
                <button  type="button" data-bs-toggle="modal" class="catalog__btn catalog__btn--refund"
                    data-bs-target="#modal-refund">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path
                            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg>
                </button>
                <button  type="button" @click="emits('delete')" data-bs-toggle="modal" class="catalog__btn catalog__btn--delete"
                    data-bs-target="#modal-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Z" />
                    </svg>
                </button>
            </div>
        </td>
    </tr>
</template>


<style scoped>
.catalog__btn--refund {
    background-color: rgba(255, 193, 7, 0.1);
}

.catalog__btn--refund svg {
    fill: rgba(255, 193, 7, 0.8);
}

.catalog__btn--refund:hover {
    background-color: rgba(255, 85, 165, 0.2);
}

.catalog__btn--refund:hover svg {
    fill: rgb(255, 193, 7);
}
</style>