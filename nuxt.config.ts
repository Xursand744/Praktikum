// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  devtools: { enabled: true },
  css: ['~/src/style/main.css'],
  router: {
    base: '/pages/', // Asosiy yo'l
    middleware: 'my-middleware' // Middleware funksiyasi
  }
})
