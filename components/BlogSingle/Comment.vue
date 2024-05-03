<template>
    <li :class="{'comment-children': isChild}">
      <div class="comment-avatar">
        <img :src="comment.avatar" :alt="img">
      </div>
      <div class="comment-details">
        <h4 class="comment-author">{{ comment.author }}</h4>
        <span>{{ comment.date }}</span>
        <p class="comment-description">
          {{ comment.description }}
        </p>
        <a :href="comment.replyLink">Reply</a>
      </div>
    </li>
  </template>
  
  <script>
  export default {
    props: {
      comment: {
        type: Object,
        required: true
      },
      isChild: {
        type: Boolean,
        default: false
      }
    }
  };
  </script>
  
  <style scoped>
  </style>