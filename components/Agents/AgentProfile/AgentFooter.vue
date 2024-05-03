<template>
    <div class="socials-footer">
      <ul class="list-inline">
        <li v-for="(social, index) in socials" :key="index" class="list-inline-item">
          <a :href="social.link" class="link-one">
            <i :class="social.icon" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      socials: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  