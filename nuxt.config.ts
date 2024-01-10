// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        },
        {
          "name": "description",
          "content": "Online Movies, TV Shows & Cinema Booking"
        }
      ],
      "link": [
        {
          rel: "icon",
          type: "image/png",
          href: "icon/favicon-32x32.png",
          sizes: "32x32"
        },
        {
          rel: "stylesheet",
          href: "css/bootstrap.min.css",
        },
      ]
    }

  }

})
