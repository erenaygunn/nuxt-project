<template>
    <SearchProperty />
    <Navbar />
    <NuxtPage />
    <Footer />
</template>

<script setup>
onMounted(() => {
    import("./public/js/main.js")
})
</script>