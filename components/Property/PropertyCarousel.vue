<template>
    <div id="property-carousel" class="owl-carousel owl-theme">
      <div class="carousel-item-b" v-for="(property, index) in properties" :key="index">
        <div class="card-box-a card-shadow">
          <div class="img-box-a">
            <img :src="property.imageSrc" :alt="property.imageAlt" class="img-a img-fluid">
          </div>
          <div class="card-overlay">
            <div class="card-overlay-a-content">
              <div class="card-header-a">
                <h2 class="card-title-a">
                  <nuxt-link :to="property.link">{{ property.title }}</nuxt-link>
                </h2>
              </div>
              <div class="card-body-a">
                <div class="price-box d-flex">
                  <span class="price-a">{{ property.price }}</span>
                </div>
                <nuxt-link :to="property.link" class="link-a">Click here to view
                  <span class="ion-ios-arrow-forward"></span>
                </nuxt-link>
              </div>
              <div class="card-footer-a">
                <ul class="card-info d-flex justify-content-around">
                  <li v-for="(info, i) in property.info" :key="i">
                    <h4 class="card-info-title">{{ info.title }}</h4>
                    <span>{{ info.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      properties: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  </style>