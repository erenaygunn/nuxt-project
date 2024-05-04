// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/lib/bootstrap/css/bootstrap.min.css',
    '~/lib/font-awesome/css/font-awesome.min.css',
    '~/lib/animate/animate.min.css',
    '~/lib/ionicons/css/ionicons.min.css',
    '~/lib/owlcarousel/assets/owl.carousel.min.css',
    '~/css/style.css'
  ],
  app: {
    head: {
      script: [
        { src: '_nuxt/lib/jquery/jquery.min.js'},
        { src: '_nuxt/lib/jquery/jquery-migrate.min.js'},
        { src: '_nuxt/lib/popper/popper.min.js'},
        { src: '_nuxt/lib/bootstrap/js/bootstrap.min.js', type: 'module'},
        { src: '_nuxt/lib/easing/easing.min.js' },
        { src: '_nuxt/lib/owlcarousel/owl.carousel.min.js'},
        { src: '_nuxt/lib/scrollreveal/scrollreveal.min.js'},
        { src: '_nuxt/js/main.js' },
      ],
    },
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
      __NUXT_ASYNC_CONTEXT__: true
    },
  },
  experimental: {
    asyncContext: false,
  },
})
