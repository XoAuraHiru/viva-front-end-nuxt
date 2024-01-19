<script setup>
definePageMeta({
    layout: 'admin'
})

</script>

<template>
    <!-- main content -->
    <main class="main">
        <div class="container-fluid">
            <div class="row">
                <!-- main title -->
                <div class="col-12">
                    <div class="main__title">
                        <h2>Dashboard</h2>

                        <a href="add-item.html" class="main__title-link"><span>add item</span></a>
                    </div>
                </div>
                <!-- end main title -->
            </div>

            <div class="row">
                

                <!-- stats -->

                <AdminDashStatsCard v-for="i in 4" :title="'Unique views this month'" :value="'5 678'" :icon="'graph-bar.svg'" />

                <!-- dashbox -->
                
                <AdminDashTableBox v-for="i in 2" :title="'Top items'" :value="'321'" :icon="'award.svg'" />

            </div>
        </div>
    </main>
</template>


<style lang="scss" scoped></style>