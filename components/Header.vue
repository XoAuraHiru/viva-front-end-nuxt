<script setup>
const { isAuthenticated } = useSanctumAuth();
const user = useSanctumUser();
const { capitalize } = useCapitalized();

const firstName = capitalize(user.first_name);
const lastName = capitalize(user.last_name)

onMounted(() => {
    if (document.querySelector('.header')) {
        const headerBtn = document.querySelector('.header__btn');
        const headerNav = document.querySelector('.menu');

        function toggleHeaderMenu() {
            headerBtn.classList.toggle('header__btn--active');
            headerNav.classList.toggle('menu--active');
        }

        headerBtn.addEventListener('click', toggleHeaderMenu);
    }
})
</script>

<template>
    <div>
        <!-- header -->
        <header class="header">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="header__content">
                            <!-- header logo -->
                            <nuxt-link href="/" class="header__logo">
                                <img src="/images/logo.svg" alt="" />
                            </nuxt-link>
                            <!-- end header logo -->

                            <!-- header categories -->
                            <div class="header__categories">
                                <button class="header__categories-btn" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span></span>
                                    <span></span>
                                </button>

                                <div class="dropdown-menu header__dropdown-menu header__dropdown-menu--categories">
                                    <ul class="header__categories-list">
                                        <li><a href="catalog1.html">Films</a></li>
                                        <li><a href="catalog2.html">TV Series</a></li>
                                        <li><a href="catalog1.html">Anime</a></li>
                                        <li><a href="catalog2.html">Cartoons</a></li>
                                    </ul>
                                    <ul class="header__categories-list">
                                        <li><a href="catalog1.html">Catalog Grid</a></li>
                                        <li><a href="catalog2.html">Catalog List</a></li>
                                        <li><a href="details1.html">Details Film</a></li>
                                        <li><a href="details2.html">Details TV Series</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- end header categories -->

                            <!-- header nav -->
                            <ul class="header__nav">
                                <!-- dropdown -->
                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Home
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                        </svg></a>

                                    <ul class="dropdown-menu header__dropdown-menu">
                                        <li><a href="index.html">Home</a></li>
                                    </ul>
                                </li>
                                <!-- end dropdown -->

                                <!-- dropdown -->
                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Catalog
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                        </svg></a>

                                    <ul class="dropdown-menu header__dropdown-menu">
                                        <li><a href="details1.html">Details Movie</a></li>
                                        <li><a href="details2.html">Details TV Series</a></li>
                                    </ul>
                                </li>
                                <!-- end dropdown -->

                                <li class="header__nav-item">
                                    <a href="pricing.html" class="header__nav-link">Pricing plans</a>
                                </li>

                                <!-- dropdown -->
                                <li class="header__nav-item">
                                    <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">Pages
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                        </svg></a>

                                    <ul class="dropdown-menu header__dropdown-menu">
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="faq.html">Help center</a></li>
                                        <li><a href="profile.html">Profile</a></li>
                                        <li><a href="actor.html">Actor</a></li>
                                        <li><a href="contacts.html">Contacts</a></li>
                                        <li><a href="privacy.html">Privacy policy</a></li>
                                    </ul>
                                </li>
                                <!-- end dropdown -->
                            </ul>
                            <!-- end header nav -->

                            <!-- header actions -->
                            <div class="header__actions">
                                <form action="#" class="header__search">
                                    <input type="text" placeholder="Search" />
                                    <button type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                                            </path>
                                        </svg>
                                    </button>
                                </form>

                                <div class="header__language">
                                    <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">EN
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path
                                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                                        </svg></a>

                                    <ul class="dropdown-menu header__dropdown-menu header__dropdown-menu--lang">
                                        <li><a href="#">English</a></li>
                                        <li><a href="#">Spanish</a></li>
                                        <li><a href="#">French</a></li>
                                    </ul>
                                </div>

                                <nuxt-link to="/signin" v-if="!isAuthenticated" class="header__sign-in">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path
                                            d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" />
                                    </svg>
                                    <span>sign in</span>
                                </nuxt-link>

                                <div v-if="isAuthenticated" class="profile__user">
                                    <div class="profile__avatar">
                                        <nuxt-link to="/profile">
                                            <img src="/img/user.svg" alt="">
                                        </nuxt-link>
                                    </div>
                                    <div class="profile__meta">
                                            <h3>Hi {{capitalize(user.first_name)}}!</h3>
                                            <span>FlixGo ID: {{user.id}}</span>
                                    </div>

                                </div>
                            </div>
                            <!-- end header actions -->

                            <!-- header menu btn -->
                            <button class="header__btn" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <!-- end header menu btn -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- end header -->

        <!-- mobile menu -->
        <div class="menu">
            <!-- menu search -->
            <form action="#" class="menu__search">
                <input type="text" placeholder="Search">
                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z">
                        </path>
                    </svg></button>
            </form>
            <!-- end menu search -->

            <!-- menu nav -->
            <ul class="menu__nav">
                <!-- dropdown -->
                <li class="menu__nav-item">
                    <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                        </svg></a>

                    <ul class="dropdown-menu menu__dropdown-menu">
                        <li><a href="index.html">Home</a></li>
                    </ul>
                </li>
                <!-- end dropdown -->

                <!-- dropdown -->
                <li class="menu__nav-item">
                    <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                        </svg></a>

                    <ul class="dropdown-menu menu__dropdown-menu">
                        <li><a href="details1.html">Details Movie</a></li>
                        <li><a href="details2.html">Details TV Series</a></li>
                    </ul>
                </li>
                <!-- end dropdown -->

                <li class="menu__nav-item">
                    <a href="pricing.html" class="menu__nav-link">Pricing plans</a>
                </li>

                <!-- dropdown -->
                <li class="menu__nav-item">
                    <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z" />
                        </svg></a>

                    <ul class="dropdown-menu menu__dropdown-menu">
                        <li><a href="about.html">About us</a></li>
                        <li><a href="faq.html">Help center</a></li>
                        <li><a href="profile.html">Profile</a></li>
                        <li><a href="actor.html">Actor</a></li>
                        <li><a href="contacts.html">Contacts</a></li>
                        <li><a href="privacy.html">Privacy policy</a></li>
                    </ul>
                </li>
                <!-- end dropdown -->

            </ul>
            <!-- end menu nav -->
        </div>
        <!-- end mobile menu -->
    </div>
</template>


<style scoped>

</style>
