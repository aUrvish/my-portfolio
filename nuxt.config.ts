// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Urvish Mandaliya',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@100..900&display=swap'
        },
        { 
          rel: 'icon', 
          type: 'image/png', 
          href: '/favicon.png' 
        }
      ]
    }
  },
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'pinia-plugin-persistedstate'],
  imports: {
    dirs: [],
    imports: [
      {
        from: 'pinia',
        name: 'defineStore',
        as: 'defineStore',
      },
    ],
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
