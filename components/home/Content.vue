<script setup>
import axios from 'axios';

let NewMovies = ref([]);
let AllMovies = ref([]);
let isLoading = ref(true)

axios.get('https://xoaurahiru.com/api/movies/new')
    .then(response => {
        NewMovies.value = response.data.data
        isLoading.value = false
    })
    .catch(error => {
        console.log(error);
    });

axios.get('https://xoaurahiru.com/api/movies')
    .then(response => {
        AllMovies.value = response.data.data
    })
    .catch(error => {
        console.log(error);
    });

</script>


<template>
    <div>
        <!-- content -->
        <section class="content">
            <div class="content__head">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!-- content title -->
                            <h2 class="content__title">Recently Updated</h2>
                            <!-- end content title -->

                            <!-- content tabs nav -->
                            <ul class="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button id="1-tab" class="active" data-bs-toggle="tab" data-bs-target="#tab-1"
                                        type="button" role="tab" aria-controls="tab-1" aria-selected="true">New
                                        items</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button id="2-tab" data-bs-toggle="tab" data-bs-target="#tab-2" type="button" role="tab"
                                        aria-controls="tab-2" aria-selected="false">Movies</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button id="3-tab" data-bs-toggle="tab" data-bs-target="#tab-3" type="button" role="tab"
                                        aria-controls="tab-3" aria-selected="false">TV Shows</button>
                                </li>

                                <li class="nav-item" role="presentation">
                                    <button id="4-tab" data-bs-toggle="tab" data-bs-target="#tab-4" type="button" role="tab"
                                        aria-controls="tab-4" aria-selected="false">Anime</button>
                                </li>
                            </ul>
                            <!-- end content tabs nav -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <!-- content tabs -->
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab" tabindex="0">
                        <div class="row">
                            <Loading v-if="isLoading"/>
                            <!-- item -->
                            <HomeContentItemOne v-if="NewMovies" v-for="(movie, index) in NewMovies" :key="index" :movie="movie" />
                            <!-- end item -->
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
                        <div class="row">
                            <!-- item -->
                            <HomeContentItemTwo v-if="AllMovies" v-for="(movie, index) in AllMovies" :key="index" :movie="movie" />
                            <!-- end item -->
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
                        <div class="row">
                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/1.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Midnight Sun</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab" tabindex="0">
                        <div class="row">
                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/13.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Starlight Chronicles</a></h3>
                                        <span class="item__category">
                                            <a href="#">Romance</a>
                                            <a href="#">Drama</a>
                                            <a href="#">Music</a>
                                        </span>
                                        <span class="item__rate">6.3</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            
                        </div>
                    </div>
                </div>
                <!-- end content tabs -->

                <div class="row">
                    <div class="col-12">
                        <a href="catalog1.html" class="section__btn"><span>to catalog</span></a>
                    </div>
                </div>
            </div>
        </section>
        <!-- end content -->
    </div>
</template>

<style lang="scss" scoped></style>