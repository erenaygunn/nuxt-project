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
      <PropertyCarousel :properties="properties" />
    </div>
  </section>
</template>
  
  <script>
  import PropertyCarousel from './PropertyCarousel.vue';

    export default {
    components: {
        PropertyCarousel
    },
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
  