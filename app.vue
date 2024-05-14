<template>
    <SearchProperty />
    <Navbar />
    <NuxtPage />
    <Footer />
</template>

<script setup>
    const route = useRoute();
    import { executeScript } from "./public/js/main.js"

    onMounted(() => {
        executeScript()
    })

    watch(() => route.path, () => {
        executeScript()
    })
</script>