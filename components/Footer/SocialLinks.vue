<template>
    <div class="socials-a">
      <ul class="list-inline">
        <li class="list-inline-item" v-for="(item, index) in socialLinks" :key="index">
          <a :href="item.link">
            <i :class="item.icon" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        socialLinks: [
          { link: '#', icon: 'fa fa-facebook' },
          { link: '#', icon: 'fa fa-twitter' },
          { link: '#', icon: 'fa fa-instagram' },
          { link: '#', icon: 'fa fa-pinterest-p' },
          { link: '#', icon: 'fa fa-dribbble' }
        ]
      }
    }
  }
  </script>