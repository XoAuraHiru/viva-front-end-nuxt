<script setup>
import { useActions } from "~/stores/useActions";
import axios from 'axios';

const actions = useActions()

const route = useRoute()
const { id } = route.params
const movie = ref()
const isLoading = ref(true)

async function getMovie(id) {
    // isLoading.value = true
    // movie.value = await actions.getMovieByID(id)
    // console.log(movie.value)
    // isLoading.value = false

    await axios.get('https://vivaapi.xoaurahiru.com/api/movies/individual/' + id)
    .then(response => {
        movie.value = response.data.data
        isLoading.value = false
        console.log(movie.value)
    })
    .catch(error => {
        console.log(error);
    });
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
            <MovieDetails v-if="!isLoading && movie" :movie="movie[0]" />
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
