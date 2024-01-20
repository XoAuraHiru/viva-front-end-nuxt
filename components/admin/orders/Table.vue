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
                        <th>AMOUNT</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>

                    <AdminOrdersTableRow v-for="i in 10" />
                </tbody>
            </table>
        </div>
    </div>
    <!-- end users -->
</template>


<style lang="scss" scoped>

</style>