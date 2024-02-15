
import type { AdminOrdersViewModal } from '#build/components';
<script setup>
const props = defineProps({
    orders: {
        type: Array,
        default: []
    }
})

const deleteRowIndex = ref({
    value: null,
    orderID: null
});

const selected = ref(0)

const deleteTableRow = (index, id) => {
    deleteRowIndex.value = index;
    deleteRowIndex.orderID = id;
    selected.value = id;
    console.log(deleteRowIndex.orderID);
    console.log(selected.value);
};

async function confirmDelete() {
    if (deleteRowIndex.value === null) return;
    try {
        props.orders.splice(deleteRowIndex.value, 1);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        deleteRowIndex.value = null;
        deleteRowIndex.orderID = null;
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
    <AdminOrdersDeleteModal :orderID="selected" @confirm="confirmDelete"/>
    <AdminOrdersViewModal/>
</template>

<style lang="scss" scoped>

</style>