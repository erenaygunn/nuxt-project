<template>
  <div id="new-carousel" class="owl-carousel owl-theme">
    <NewsCard v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<script>
import NewsCard from './NewsCard.vue';

export default {
  components: {
    NewsCard
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
</style>