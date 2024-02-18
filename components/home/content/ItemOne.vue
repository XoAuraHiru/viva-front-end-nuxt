<script setup>
const props = defineProps({
    movie: Object
})
</script>

<template>
    <div class="col-6 col-sm-12 col-lg-6 col-xxl-4">
        <div class="item item--list">
            <nuxt-link :to="'/movie/' + movie.code" class="item__cover">
                <img class="object-fit-cover" :src="'https://xoaurahiru.com/' + movie.banner_img" alt="">
                <span class="item__play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z" />
                    </svg>
                </span>
            </nuxt-link>

            <div class="item__content">
                <h3 class="item__title"><a>{{ movie.name }}</a></h3>
                <span class="item__category">
                    <a href="#">{{ (movie.genre.genre).charAt(0).toUpperCase() + (movie.genre.genre).slice(1) }}</a>
                    <a href="#">Triler</a>
                </span>

                <div class="item__wrap">
                    <span class="item__rate"> {{ movie.rating }}</span>

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
</template>



<style lang="scss" scoped></style>