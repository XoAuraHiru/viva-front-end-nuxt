<script setup>
onMounted(() => {
  var Scrollbar = window.Scrollbar;

  if (document.querySelector('.dashbox__table-wrap--1')) {
    Scrollbar.init(document.querySelector('.dashbox__table-wrap--1'), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true
    });
  }

  if (document.querySelector('.dashbox__table-wrap--2')) {
    Scrollbar.init(document.querySelector('.dashbox__table-wrap--2'), {
      damping: 0.1,
      renderByPixels: true,
      alwaysShowTracks: true,
      continuousScrolling: true
    });
  }

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
  <div>
    <SliderBase />
    <HomeContent />
    <HomeNowShowing />
  </div>
</template>

<style scoped></style>
