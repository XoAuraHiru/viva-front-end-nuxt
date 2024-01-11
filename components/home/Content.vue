<script setup>
import axios from 'axios';

let NewMovies = ref([]);
let AllMovies = ref([]);
let isLoading = ref(true)

await axios.get('https://xoaurahiru.com/api/movies/new')
    .then(response => {
        NewMovies.value = response.data.data
        isLoading.value = false
    })
    .catch(error => {
        console.log(error);
    });

await axios.get('https://xoaurahiru.com/api/movies')
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
                            <Loading v-if="isLoading" />
                            <!-- item -->
                            <HomeContentItemOne v-if="NewMovies" v-for="(movie, index) in NewMovies" :key="index"
                                :movie="movie" />
                            <!-- end item -->
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab" tabindex="0">
                        <div class="row">
                            <!-- item -->
                            <HomeContentItemTwo v-if="AllMovies" v-for="(movie, index) in AllMovies" :key="index"
                                :movie="movie" />
                            <!-- end item -->
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab" tabindex="0">
                        <div class="row">
                            <HomeContentItemTwo v-if="AllMovies" v-for="(movie, index) in AllMovies" :key="index"
                                :movie="movie" />
                        </div>
                    </div>

                    <div class="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab" tabindex="0">
                        <div class="row">
                            <HomeContentItemTwo v-if="AllMovies" v-for="(movie, index) in AllMovies" :key="index"
                                :movie="movie" />
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