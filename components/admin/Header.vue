<script setup>
onMounted(() => {
    if (document.querySelector('.header')) {
        const headerBtn = document.querySelector('.header__btn');
        const headerNav = document.querySelector('.sidebar');

        function toggleHeaderMenu() {
            headerBtn.classList.toggle('header__btn--active');
            headerNav.classList.toggle('sidebar--active');
        }

        headerBtn.addEventListener('click', toggleHeaderMenu);
    }
})
</script>

<template>
    <!-- header -->
    <div class="header">
        <div class="header__content">
            <!-- header logo -->
            <a href="index.html" class="header__logo">
                <img src="/img/logo.svg" alt="">
            </a>
            <!-- end header logo -->

            <!-- header menu btn -->
            <button class="header__btn" type="button">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <!-- end header menu btn -->
        </div>
    </div>
    <!-- end header -->
</template>


<style lang="scss" scoped></style>