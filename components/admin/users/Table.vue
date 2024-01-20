<template>
    <!-- users -->
    <div class="col-12">
        <div class="catalog catalog--1">
            <table class="catalog__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>BASIC INFO</th>
                        <th>USERNAME</th>
                        <th>PRICING PLAN</th>
                        <th>COMMENTS</th>
                        <th>REVIEWS</th>
                        <th>STATUS</th>
                        <th>CRAETED DATE</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>

                    <AdminUsersTableRow v-for="i in 10" />
                </tbody>
            </table>
        </div>
    </div>
    <!-- end users -->
</template>


<style lang="scss" scoped>

</style>