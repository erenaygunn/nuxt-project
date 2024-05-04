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
        { src: '~/lib/jquery/jquery.min.js'},
        { src: '~/lib/jquery/jquery-migrate.min.js'},
        { src: '~/lib/popper/popper.min.js'},
        { src: '~/lib/bootstrap/js/bootstrap.min.js', type: 'module'},
        { src: '~/lib/easing/easing.min.js' },
        { src: '~/lib/owlcarousel/owl.carousel.min.js'},
        { src: '~/lib/scrollreveal/scrollreveal.min.js'},
        { src: '~/js/main.js' },
      ],
    },
  },
})
