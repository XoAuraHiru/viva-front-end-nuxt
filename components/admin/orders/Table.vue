
import type OrderVue from '~/components/book/Order.vue';
<script setup>
import { useAdmin } from "~/stores/useAdmin";

const props = defineProps({
    orders: {
        type: Array,
        default: []
    }
})

const admin = useAdmin();

const deleteRowIndex = ref({
    value: null,
    orderID: null
});

const deleteTableRow = (index, id) => {
    deleteRowIndex.value = index;
    deleteRowIndex.orderID = id;
};

async function confirmDelete() {
    if (deleteRowIndex.value === null) return;
    const { data } = await admin.deleteOrder(deleteRowIndex.orderID);
    if (data) {
        props.orders.splice(deleteRowIndex.value, 1);
        deleteRowIndex.value = null;
    }
}

</script>

<template>
    <!-- users -->
    <div class="col-12">
        <div class="catalog catalog--1">
            <table class="catalog__table">
                <thead>
                    <tr>
                        <th>ORDER ID</th>
                        <th>USER</th>
                        <th>CRAETED AT</th>
                        <th>STATUS</th>
                        <th>AMOUNT (LKR)</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody v-auto-animate>

                    <AdminOrdersTableRow
                        
                        v-for="(order, index) in props.orders" 
                        :order="order" 
                        :key="index"
                        @delete="deleteTableRow(index, order.order_id)"
                    />
                </tbody>
            </table>
        </div>
    </div>
    <!-- end users -->
    <AdminOrdersDeleteModal @confirm="confirmDelete"/>
</template>

<style lang="scss" scoped>

</style>