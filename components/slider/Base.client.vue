<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { defineComponent } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import axios from 'axios';

defineComponent({
    components: {
        Splide,
        SplideSlide,
    },
});

const options = ref({
    rewind: true,
    arrows: 'slider'
});

let latestMovies = ref([])

axios.get('https://xoaurahiru.com/api/movies/new')
    .then(response => {
        latestMovies.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });
</script>

<template>
    <!-- home -->
    <section class="home">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <Splide class="hero splide splide--hero" 
                        :options="{ 
                            arrows: true,
                            hasSliderWrapper: true,
                            autoplay: true
                        }">

                        <div class="splide__arrows">
                            <button class="splide__arrow splide__arrow--prev" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                                </svg>
                            </button>
                            <button class="splide__arrow splide__arrow--next" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                                </svg>
                            </button>
                        </div>

                        <SplideSlide v-for="movie in latestMovies">

                            <div class="hero__slide" :data-bg="'https://xoaurahiru.com/' + movie.banner_img">
                                <div class="hero__content">
                                    <h2 class="hero__title">{{movie.name}} <sub>{{movie.rating}}</sub></h2>
                                    <p class="hero__text">{{ movie.description }}</p>
                                    <p class="hero__category">
                                        <a href="#">{{ (movie.genre.genre).charAt(0).toUpperCase() + (movie.genre.genre).slice(1) }}</a>
                                        <a href="#">Drama</a>
                                        <a href="#">Comedy</a>
                                    </p>
                                    <div class="hero__actions">
                                        <a href="details.html" class="hero__btn">
                                            <span>Book now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </SplideSlide>
                    </Splide>
                </div>
            </div>
        </div>
    </section>
    <!-- end home -->
</template>

<style lang="scss" scoped></style>
