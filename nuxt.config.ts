// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

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
          href: "/css/bootstrap.min.css",
        },
      ]
    }

  },

  modules: [
    "@pinia/nuxt", 
    "@formkit/auto-animate/nuxt",
    "nuxt-auth-sanctum",
    '@unlok-co/nuxt-stripe'
  ],
  sanctum: {
    baseUrl: 'https://vivaapi.xoaurahiru.com', // Laravel API
    origin: 'https://vivafront.xoaurahiru.com', // Nuxt app
  },
  stripe: {
    server: {
      key: 'sk_test_51OZb8EI084Bvf0eZ28BBzRf3dQ1Jr0P12Yw3VlbHqwAaMcERCXUeQdRCbXQmgf1ACmzQCfsBfdbnF9juvcYfJTLF008Xz3S8Ge',
      options: {
        apiVersion: '2022-11-15', 
      }
    },
    client: {
      key: 'pk_test_51OZb8EI084Bvf0eZOOw5VR4REyv9o3MbAVpFJ0SuSzKMj8whjoEpgOxz1dN5quwfutsmQbFZXaUqlztFfPwNpNjF00mzYfVtCG',
      options: {

      }
    }
  }
  
})