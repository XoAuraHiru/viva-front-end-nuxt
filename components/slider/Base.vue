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

await axios.get('https://xoaurahiru.com/api/movies/latest')
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
                    <Splide class="hero splide splide--hero" :options="{
                        type: 'loop',
                        perPage: 1,
                        pagination: true,
                        autoplay: true,
                        speed: 1200,
                        gap: 24,
                        arrows: false,
                        focus: 0,
                        breakpoints: {
                            767: {
                                gap: 20,
                            },
                            1199: {
                                gap: 24,
                            },
                        },
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

                            <div class="hero__slide" :style="{ backgroundImage: 'url(https://xoaurahiru.com/' + movie.movie.banner_img + ')' }">
                                <div class="hero__content">
                                    <h2 class="hero__title">{{ movie.movie.name }} <sub>{{ movie.movie.rating }}</sub></h2>
                                    <p class="hero__text">{{ movie.movie.description }}</p>
                                    <p class="hero__category">
                                        <!-- <a href="#">{{ (movie.movie.genre.genre).charAt(0).toUpperCase() +
                                            (movie.genre.genre).slice(1) }}</a> -->
                                        <a href="#">Drama</a>
                                        <a href="#">Comedy</a>
                                    </p>
                                    <div class="hero__actions">
                                        <a :href="'/book/show/'+movie.shedule_id+''" class="hero__btn">
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

<style>
.hero__slide {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.splide--hero .splide__arrows {
    display: none;
}

.splide--hero .splide__pagination {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    padding: 0 15px;
    bottom: 40px;
}

.splide--hero .splide__pagination li {
    margin-right: 12px;
}

.splide--hero .splide__pagination li:last-child {
    margin-right: 0;
}

.splide--hero .splide__pagination__page {
    display: block;
    height: 4px;
    width: 12px;
    border-radius: 4px;
    background: linear-gradient(90deg, #ff55a5 0%, #ff5860 100%);
    transition: 0.5s ease;
    opacity: 0.5;
    margin: 0;
}

.splide--hero .splide__pagination__page.is-active {
    transform: scale(1);
    width: 20px;
    opacity: 1;
}

@media (min-width: 768px) {
    .splide--hero .splide__pagination {
        bottom: 50px;
    }
}

@media (min-width: 1200px) {

    .splide--hero .splide__pagination {
        justify-content: flex-start;
        padding-left: 270px;
    }

    .splide--hero .splide__arrows {
        display: inline-flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        position: absolute;
        bottom: 32px;
        left: 120px;
    }

    .splide--hero .splide__arrow {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 1px solid rgba(255, 85, 165, 0.5);
        background-color: transparent;
        position: relative;
        top: auto;
        opacity: 1;
        transition: 0.5s ease;
        transition-property: opacity, transform, border-color;
        transform: translateY(0);
        z-index: 50;
    }

    .splide--hero .splide__arrow svg {
        width: 24px;
        height: auto;
        fill: #fff;
    }

    .splide--hero .splide__arrow:hover {
        border-color: rgba(255, 85, 165, 0.8);
    }

    .splide--hero .splide__arrow--prev {
        margin-right: 20px;
        left: auto;
    }

    .splide--hero .splide__arrow--prev svg {
        transform: none;
    }

    .splide--hero .splide__arrow--next {
        right: auto;
    }
}
</style>
