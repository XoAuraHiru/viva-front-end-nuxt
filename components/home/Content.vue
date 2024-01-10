<script setup>
import axios from 'axios';

let NewMovies = ref([]);

axios.get('https://xoaurahiru.com/api/movies/new')
    .then(response => {
        // The response object contains the data returned from the API
        NewMovies.value = response.data.data
        console.log(NewMovies)
        console.log(response.data);
    })
    .catch(error => {
        // The error object contains information about the error
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

                            <!-- item -->
                            <div class="col-6 col-sm-12 col-lg-6 col-xxl-4" v-for="movie in NewMovies" :key="id">
                                <div class="item item--list">
                                    <a href="details1.html" class="item__cover">
                                        <img class="object-fit-cover" :src="'https://xoaurahiru.com/' + movie.banner_img" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>

                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">{{movie.name}}</a></h3>
                                        <span class="item__category">
                                            <a href="#">{{(movie.genre.genre).charAt(0).toUpperCase() + (movie.genre.genre).slice(1)}}</a>
                                            <a href="#">Triler</a>
                                        </span>

                                        <div class="item__wrap">
                                            <span class="item__rate"> 8.4</span>

                                            <ul class="item__list">
                                                <li>HD</li>
                                                <li>16+</li>
                                            </ul>
                                        </div>

                                        <div class="item__description">
                                            <p>{{ movie.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
                        <div class="row">
                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/7.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Lost Key</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/8.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Red Sky at Night</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/9.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Forgotten Road</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/10.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Dark Horizons</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/11.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Echoes of Yesterday</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/12.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Into the Unknown</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

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
                                        <h3 class="item__title"><a href="details1.html">The Broken Path</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/14.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">A Light in the Darkness</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/15.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Endless Horizon</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/16.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Unseen Journey</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/17.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Reckoning</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/18.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Savage Beauty</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/2.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Shadow Hunter</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/3.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Wild Hearts</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/4.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Dark Horizons</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/5.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Electric Dreams</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/6.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Broken Promises</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/7.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Fierce Grace</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/8.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Burning Bridges</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/9.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Forbidden Love</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/10.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Timekeeper's Daughter</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/11.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">The Enchanted Forest</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/12.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Relentless</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/14.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Rising Sun Academy</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/15.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Eternal Bonds</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/16.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Chronicles of the Elements</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/17.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Fantasia Journey</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/18.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Phoenix's Destiny</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                        </span>
                                        <span class="item__rate">7.1</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

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
                                        <h3 class="item__title"><a href="details1.html">Guardians of the Lost City</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/2.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Divine Intervention</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/3.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Infinite Horizon</a></h3>
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

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/4.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Beyond the Stars</a></h3>
                                        <span class="item__category">
                                            <a href="#">Comedy</a>
                                            <a href="#">Drama</a>
                                        </span>
                                        <span class="item__rate">7.9</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/5.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Shadows of the Past</a></h3>
                                        <span class="item__category">
                                            <a href="#">Action</a>
                                            <a href="#">Triler</a>
                                        </span>
                                        <span class="item__rate">8.4</span>
                                    </div>
                                </div>
                            </div>
                            <!-- end item -->

                            <!-- item -->
                            <div class="col-6 col-sm-4 col-lg-3 col-xl-2">
                                <div class="item">
                                    <a href="details1.html" class="item__cover">
                                        <img src="/img/covers/6.png" alt="">
                                        <span class="item__play">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path
                                                    d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="item__content">
                                        <h3 class="item__title"><a href="details1.html">Wings of Freedom</a></h3>
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