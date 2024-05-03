<template>
    <div>
      <div class="title-box-d">
        <h3 class="title-d">Comments ({{ comments.length }})</h3>
      </div>
      <div class="box-comments">
        <ul class="list-comments">
          <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" :isChild="comment.isChild" />
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import Comment from './Comment.vue';
  
  export default {
    components: {
      Comment
    },
    data() {
      return {
        comments:[
          {
            avatar: "img/author-2.jpg",
            author: "Emma Stone",
            date: "18 Sep 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam temporibus maiores quae natus libero optio, at qui beatae ducimus placeat debitis voluptates amet corporis.",
            replyLink: "3"
          },
          {
            avatar: "img/author-1.jpg",
            author: "Oliver Colmenares",
            date: "18 Sep 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam temporibus maiores quae.",
            replyLink: "3"
          },
          {
            avatar: "img/author-2.jpg",
            author: "Emma Stone",
            date: "18 Sep 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores reprehenderit, provident cumque ipsam temporibus maiores quae natus libero optio.",
            replyLink: "3",
          }
        ],
      };
    }
  };
  </script>
  
  <style scoped>
  </style>