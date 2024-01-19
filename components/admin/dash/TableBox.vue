<script setup>
const props = defineProps(['title', 'value', 'icon'])
</script>

<template>
    <div class="col-12 col-xl-6">
        <div class="dashbox">
            <div class="dashbox__title">
                <h3><img :src="'/img/' + props.icon" alt=""> {{ props.title }}</h3>

                <div class="dashbox__wrap">
                    <a class="dashbox__refresh" href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M21,11a1,1,0,0,0-1,1,8.05,8.05,0,1,1-2.22-5.5h-2.4a1,1,0,0,0,0,2h4.53a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4.77A10,10,0,1,0,22,12,1,1,0,0,0,21,11Z" />
                        </svg></a>
                    <a class="dashbox__more" href="catalog.html">View All</a>
                </div>
            </div>

            <div class="dashbox__table-wrap dashbox__table-wrap--1">
                <table class="dashbox__table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TITLE</th>
                            <th>CATEGORY</th>
                            <th>RATING</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr v-for="i in 5">
                            <td>
                                <div class="dashbox__table-text">321</div>
                            </td>
                            <td>
                                <div class="dashbox__table-text"><a href="#">The Lost City</a></div>
                            </td>
                            <td>
                                <div class="dashbox__table-text">Movie</div>
                            </td>
                            <td>
                                <div class="dashbox__table-text dashbox__table-text--rate">9.2</div>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>