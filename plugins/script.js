export default defineNuxtPlugin(nuxtApp => {
  if (process.client) {
    const script = document.createElement('script');
    script.src = '/js/splide.min.js';
    script.async = true;
    document.body.appendChild(script);
  }
})
