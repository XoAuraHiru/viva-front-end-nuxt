<script setup>
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
    <!-- details -->
    <section class="section section--details">
        <!-- details background -->
        <div class="section__details-bg" data-bg="/img/bg/details__bg.jpg"></div>
        <!-- end details background -->

        <!-- details content -->
        <div class="container">
            <div class="row">
                <!-- title -->
                <div class="col-12">
                    <h1 class="section__title section__title--head">I Dream in Another Language</h1>
                </div>
                <!-- end title -->

                <!-- content -->
                <div class="col-12 col-xl-6">
                    <div class="item item--details">
                        <!-- card cover -->
                        <div class="item__cover">
                            <img src="/img/covers/14.png" alt="">
                        </div>
                        <!-- end card cover -->

                        <!-- card content -->
                        <div class="item__content">
                            <div class="item__wrap">
                                <span class="item__rate">8.4</span>

                                <ul class="item__list">
                                    <li>Full HD</li>
                                    <li>16+</li>
                                </ul>
                            </div>

                            <ul class="item__meta">
                                <li><span>Genre:</span> <a href="#">Action</a> <a href="#">Triler</a></li>
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
                            <p>When a renowned archaeologist goes missing, his daughter sets out on a perilous journey to
                                the heart of the Amazon rainforest to find him. Along the way, she discovers a hidden city
                                and a dangerous conspiracy that threatens the very balance of power in the world. With the
                                help of a charming rogue, she must navigate treacherous terrain and outwit powerful enemies
                                to save her father and uncover the secrets of the lost city. A down-on-his-luck boxer
                                struggles to make ends meet while raising his young son. When an old friend offers him a
                                chance to make some quick cash by fighting in an illegal underground boxing tournament, he
                                sees it as his last shot at redemption. But as the stakes get higher and the fights get more
                                brutal, he must confront his own demons and find the strength to win not just for himself,
                                but for his son.</p>
                            <p>A brilliant scientist discovers a way to harness the power of the ocean's currents to create
                                a new, renewable energy source. But when her groundbreaking technology falls into the wrong
                                hands, she must race against time to stop it from being used for evil. Along the way, she
                                must navigate complex political alliances and confront her own past to save the world from
                                disaster.</p>
                        </div>
                        <!-- end card content -->
                    </div>
                </div>
                <!-- end content -->

                <div class="col-12 col-xl-6">
                    <MovieTimeTable />
                </div>

            </div>
        </div>
        <!-- end details content -->
    </section>
    <!-- end details -->
</template>

<style lang="scss" scoped></style>