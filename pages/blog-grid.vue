<template>
    <IntroSingle title="Our Amazing Posts" breadcrumb="Grid News" text="News Grid"/>
    <section class="news-grid grid">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="post in posts">
            <NewsCard :key="post.id" :post="post" />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <Pagination :currentPage="currentPage" :pageCount="pageCount" @page-change="handlePageChange" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsCard from "../components/News/NewsCard.vue";
import Pagination from "../components/Pagination.vue";

export default {
  components: {
    NewsCard,
    Pagination,
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
            imageSrc: 'img/post-6.jpg',
            imageAlt: 'Post 3',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
          {
            category: 'Travel',
            title: 'Travel is coming new',
            imageSrc: 'img/post-7.jpg',
            imageAlt: 'Post 4',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
          {
            category: 'House',
            title: 'House is coming new',
            imageSrc: 'img/post-1.jpg',
            imageAlt: 'Post 1',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },{
            category: 'Park',
            title: 'Park is coming new',
            imageSrc: 'img/post-3.jpg',
            imageAlt: 'Post 3',
            link: 'blog-single.html',
            date: '18 Sep. 2017'
          },
        ],
      currentPage: 1,
      pageCount: 3,
    };
  },
  methods: {
    handlePageChange(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>