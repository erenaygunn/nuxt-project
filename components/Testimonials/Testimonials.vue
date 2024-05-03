<template>
    <section class="section-testimonials section-t8 nav-arrow-a">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
        <div id="testimonial-carousel" class="owl-carousel owl-arrow">
          <testimonial-item v-for="(item, index) in testimonials" :key="index" :testimonial="item" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import TestimonialItem from '~/components/Testimonials/TestimonialItem.vue'
  
  export default {
    components: {
      TestimonialItem
    },
    data() {
      return {
        testimonials: [
            {
                img: 'img/testimonial-1.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.',
                authorImg: 'img/mini-testimonial-1.jpg',
                author: 'Albert & Erika'
            },
            {
                img: 'img/testimonial-2.jpg',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, cupiditate ea nam praesentium debitis hic ber quibusdam voluptatibus officia expedita corpori.',
                authorImg: 'img/mini-testimonial-2.jpg',
                author: 'Pablo & Emma'
            }
        ]
      }
    }
  }
  </script>