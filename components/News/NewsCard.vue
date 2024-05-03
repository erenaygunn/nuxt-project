<template>
    <div class="carousel-item-c">
      <div class="card-box-b card-shadow news-box">
        <div class="img-box-b">
          <img :src="post.imageSrc" :alt="post.imageAlt" class="img-b img-fluid">
        </div>
        <div class="card-overlay">
          <div class="card-header-b">
            <div class="card-category-b">
              <a href="#" class="category-b">{{ post.category }}</a>
            </div>
            <div class="card-title-b">
              <h2 class="title-2">
                <a :href="post.link">{{ post.title }}</a>
              </h2>
            </div>
            <div class="card-date">
              <span class="date-b">{{ post.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>