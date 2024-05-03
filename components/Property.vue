<template>
    <section class="section-property section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Latest Properties</h2>
              </div>
              <div class="title-link">
                <nuxt-link to="/property-grid">All Property
                  <span class="ion-ios-arrow-forward"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        properties: [
          {
            title: '206 Mount Olive Road Two',
            imageSrc: 'img/property-6.jpg',
            imageAlt: 'Property 1',
            price: 'rent | $ 12.000',
            link: '/property-single',
            info: [
              { title: 'Area', value: '340m²' },
              { title: 'Beds', value: '2' },
              { title: 'Baths', value: '4' },
              { title: 'Garages', value: '1' }
            ]
          },
          {
            title: '157 West Central Park',
            imageSrc: 'img/property-3.jpg',
            imageAlt: 'Property 2',
            price: 'rent | $ 12.000',
            link: '/property-single',
            info: [
                { title: 'Area', value: '340m²' },
                { title: 'Beds', value: '2' },
                { title: 'Baths', value: '4' },
                { title: 'Garages', value: '1' }
            ]
            },
            {
            title: '245 Azabu Nishi Park let',
            imageSrc: 'img/property-7.jpg',
            imageAlt: 'Property 3',
            price: 'rent | $ 12.000',
            link: '/property-single',
            info: [
                { title: 'Area', value: '340m²' },
                { title: 'Beds', value: '2' },
                { title: 'Baths', value: '4' },
                { title: 'Garages', value: '1' }
            ]
            },
            {
            title: '204 Montal South Bela Two',
            imageSrc: 'img/property-10.jpg',
            imageAlt: 'Property 4',
            price: 'rent | $ 12.000',
            link: '/property-single',
            info: [
                { title: 'Area', value: '340m²' },
                { title: 'Beds', value: '2' },
                { title: 'Baths', value: '4' },
                { title: 'Garages', value: '1' }
            ]
            }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  