<template>
    <div class="col-md-4">
      <div class="card-box-d">
        <div class="card-img-d">
          <img :src="agent.imageSrc" :alt="agent.imageAlt" class="img-d img-fluid">
        </div>
        <div class="card-overlay card-overlay-hover">
          <div class="card-header-d">
            <div class="card-title-d align-self-center">
              <h3 class="title-d">
                <nuxt-link :to="agent.link" class="link-two">{{ agent.name }}</nuxt-link>
              </h3>
            </div>
          </div>
          <div class="card-body-d">
            <p class="content-d color-text-a">{{ agent.description }}</p>
            <div class="info-agents color-a">
              <p>
                <strong>Phone: </strong> {{ agent.phone }}</p>
              <p>
                <strong>Email: </strong> {{ agent.email }}</p>
            </div>
          </div>
          <div class="card-footer-d">
            <div class="socials-footer d-flex justify-content-center">
              <ul class="list-inline">
                <li v-for="(social, i) in agent.socials" :key="i" class="list-inline-item">
                  <a :href="social.link" class="link-one">
                    <i :class="social.iconClass" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      agent: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>