// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
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
      link: [
        { rel: 'stylesheet', href: 'lib/bootstrap/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'lib/font-awesome/css/font-awesome.min.css' },
        { rel: 'stylesheet', href: 'lib/animate/animate.min.css' },
        { rel: 'stylesheet', href: 'lib/ionicons/css/ionicons.min.css' },
        { rel: 'stylesheet', href: 'lib/owlcarousel/assets/owl.carousel.min.css' },
        { rel: 'stylesheet', href: 'css/style.css' },
      ],
    },
  },
})
