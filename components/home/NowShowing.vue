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

let NowShowing = ref([])

axios.get('https://xoaurahiru.com/api/movies/new')
    .then(response => {
        NowShowing.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });
</script>

<template>
    <!-- now watching -->
    <section class="section section--dark">
        <div class="container">
            <div class="row">
                <!-- section title -->
                <div class="col-12">
                    <h2 class="section__title section__title--carousel">Now Showing</h2>
                </div>
                <!-- end section title -->

                <!-- carousel -->
                <div class="col-12">
                    <Splide class="section__carousel splide splide--content" :options="{
                        type: 'loop',
                        perPage: 6,
                        drag: true,
                        pagination: false,
                        autoWidth: false,
                        autoHeight: false,
                        speed: 800,
                        gap: 24,
                        arrows: false,
                        focus: 0,
                        breakpoints: {
                            575: {
                                gap: 24,
                                pagination: true,
                                arrows: false,
                                perPage: 2,
                            },
                            767: {
                                gap: 24,
                                pagination: true,
                                arrows: false,
                                perPage: 3,
                            },
                            991: {
                                pagination: true,
                                arrows: false,
                                perPage: 3,
                                gap: 24,
                            },
                            1199: {
                                pagination: true,
                                arrows: false,
                                perPage: 4,
                                gap: 24,
                            },
                        },
                    }">
                        <div class="splide__arrows">
                            <button class="splide__arrow splide__arrow--prev" type="button"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M17,11H9.41l3.3-3.29a1,1,0,1,0-1.42-1.42l-5,5a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l5,5a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H17a1,1,0,0,0,0-2Z" />
                                </svg></button>
                            <button class="splide__arrow splide__arrow--next" type="button"><svg
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path
                                        d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z" />
                                </svg></button>
                        </div>

                        <SplideSlide class="splide__slide" v-for="movie in NowShowing">
                            <div class="item item--carousel">
                                <a href="details1.html" class="item__cover">
                                    <img :src="'https://xoaurahiru.com/' + movie.banner_img">
                                    <span class="item__play">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                        </svg>
                                    </span>
                                </a>
                                <div class="item__content">
                                    <h3 class="item__title"><a href="details1.html">{{movie.name}}</a>
                                    </h3>
                                    <span class="item__category">
                                        <a href="#">{{movie.genre.genre}}</a>
                                        <a href="#">Triler</a>
                                    </span>
                                    <span class="item__rate">{{ movie.rating }}</span>
                                </div>
                            </div>
                        </SplideSlide>
                    </Splide>
                </div>
                <!-- end carousel -->
            </div>
        </div>
    </section>
    <!-- end now watching -->
</template>


<style lang="scss" scoped></style>