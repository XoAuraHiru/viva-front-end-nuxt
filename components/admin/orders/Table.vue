<script setup>

const props = defineProps({
    orders: {
        type: Array,
        default: []
    }
})

const deleteRowIndex = ref(null);

const deleteTableRow = (index) => {
    deleteRowIndex.value = index;
};

const confirmDelete = () => {
    if (deleteRowIndex.value !== null) {
        props.orders.splice(deleteRowIndex.value, 1);
        deleteRowIndex.value = null;
    }
};



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
                        @delete="deleteTableRow(index)"
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