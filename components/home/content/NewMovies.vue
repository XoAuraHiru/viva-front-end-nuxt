<template>
    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
        <div class="row">
            <Loading v-if="isLoading" />
            <!-- item -->
            <HomeContentItemOne v-if="NewMovies" v-for="(movie, index) in NewMovies" :key="index" :movie="movie" />
            <!-- end item -->
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>