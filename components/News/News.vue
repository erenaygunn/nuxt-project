<template>
    <section class="section-news section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Latest News</h2>
              </div>
              <div class="title-link">
                <nuxt-link to="/blog-grid">All News
                  <span class="ion-ios-arrow-forward"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <NewCarousel :posts="posts" />
      </div>
    </section>
  </template>
  
  <script>
  import NewCarousel from './NewCarousel.vue';

    export default {
    components: {
        NewCarousel
    },
    data() {
      return {
        posts: [
          {
            category: 'House',
            title: 'House is coming new',
            imageSrc: 'img/post-2.jpg',
            imageAlt: 'Post 1',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
          {
            category: 'Travel',
            title: 'Travel is coming new',
            imageSrc: 'img/post-5.jpg',
            imageAlt: 'Post 2',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
          {
            category: 'Park',
            title: 'Park is coming new',
            imageSrc: 'img/post-7.jpg',
            imageAlt: 'Post 3',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
          {
            category: 'Travel',
            title: 'Travel is coming new',
            imageSrc: 'img/post-3.jpg',
            imageAlt: 'Post 4',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  