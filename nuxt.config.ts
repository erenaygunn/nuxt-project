// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'public/lib/bootstrap/css/bootstrap.min.css',
    'public/lib/font-awesome/css/font-awesome.min.css',
    'public/lib/animate/animate.min.css',
    'public/lib/ionicons/css/ionicons.min.css',
    'public/lib/owlcarousel/assets/owl.carousel.min.css',
    '~/css/style.css'
  ],
  app: {
    head: {
      script: [
        { src: 'lib/jquery/jquery.min.js'},
        { src: 'lib/jquery/jquery-migrate.min.js'},
        { src: 'lib/popper/popper.min.js'},
        { src: 'lib/bootstrap/js/bootstrap.min.js'},
        { src: 'lib/easing/easing.min.js' },
        { src: 'lib/owlcarousel/owl.carousel.min.js'},
        { src: 'lib/scrollreveal/scrollreveal.min.js'},
        { src: 'js/main.js' },
      ],
    },
  },
})
