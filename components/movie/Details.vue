<script setup>
defineProps({
    movie: Object
})

onMounted(() => {
    if (document.querySelector('.item__description--details')) {
        Scrollbar.init(document.querySelector('.item__description--details'), {
            damping: 0.1,
            renderByPixels: true,
            alwaysShowTracks: true,
            continuousScrolling: true
        });
    }
})

</script>

<template>
    <div class="row">
        <!-- title -->
        <div class="col-12">
            <h1 v-if="movie" class="section__title section__title--head">{{ movie.name }}</h1>
        </div>
        <!-- end title -->

        <!-- content -->
        <div class="col-12 col-xl-6">
            <div class="item item--details">
                <!-- card cover -->
                <div class="item__cover">
                    <img :src="'https://xoaurahiru.com/' + movie.banner_img" alt="">
                </div>
                <!-- end card cover -->

                <!-- card content -->
                <div class="item__content">
                    <div class="item__wrap">
                        <span class="item__rate">{{movie.rating}}</span>

                        <ul class="item__list">
                            <li>Full HD</li>
                            <li>16+</li>
                        </ul>
                    </div>

                    <ul class="item__meta">
                        <li><span>Genre:</span> <a href="#">{{movie.genre.genre}}</a> <a href="#">Triler</a></li>
                        <li><span>Running time:</span> 120 min</li>
                        <li><span>Country:</span> <a href="#">USA</a></li>
                        <li><span>Premiere:</span> 05.02.2023</li>
                    </ul>

                    <ul class="item__meta item__meta--second">
                        <li><span>Director:</span> <a href="actor.html">Louis Leterrier</a></li>
                        <li><span>Actors:</span> <a href="actor.html">Son Gun</a> <a href="actor.html">Michelle
                                Rodriguez</a> <a href="actor.html">Jordana Brewster</a> <a href="actor.html">Tyreese
                                Gibson</a> <a href="actor.html">Charlize Theron</a></li>
                    </ul>
                </div>

                <div class="item__description item__description--details">
                    <p>{{ movie.description }}</p>
                </div>
                <!-- end card content -->
            </div>
        </div>
        <!-- end content -->


    </div>
</template>

<style scoped>

</style>