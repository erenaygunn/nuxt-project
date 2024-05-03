<template>
    <SearchProperty />
    <Navbar />
    <IntroCarousel />
    <Services />
    <Property />
    <Agents />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
import('../lib/jquery/jquery.min.js')
import('../lib/jquery/jquery-migrate.min.js')
import('../lib/popper/popper.min.js')
import('../lib/bootstrap/js/bootstrap.min.js')
import('../lib/easing/easing.min.js')
import('../lib/owlcarousel/owl.carousel.min.js')
import('../lib/scrollreveal/scrollreveal.min.js')
import('../js/main.js')
})
</script>