<script setup>
import { useActions } from "~/stores/useActions";

const actions = useActions()

const route = useRoute()
const { id } = route.params
const movie = ref()
const isLoading = ref(false)

async function getMovie(id) {
    isLoading.value = true
    movie.value = await actions.getMovieByID(id)
    isLoading.value = false
}

onMounted(() => {
    getMovie(id)
})

</script>

<template>
    <section class="section section--details">
        <div v-if="!isLoading && movie" class="section__details-bg section__bg-img" :style="{ backgroundImage: 'url(https://xoaurahiru.com/' + movie.banner_img + ')' }"></div>
        <div class="container">
            <div v-if="isLoading" class="row">
                <LottieLoading style="height: 400px;" />
            </div>
            <MovieDetails v-if="!isLoading && movie" :movie="movie" />
        </div>
    </section>
</template>

<style scoped>

.section__bg-img{
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
