<template>
    <div class="carousel-item-a">
      <div class="testimonials-box">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="testimonial-img">
              <img :src="testimonial.img" alt="" class="img-fluid">
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="testimonial-ico">
              <span class="ion-ios-quote"></span>
            </div>
            <div class="testimonials-content">
              <p class="testimonial-text">
                {{ testimonial.text }}
              </p>
            </div>
            <div class="testimonial-author-box">
              <img :src="testimonial.authorImg" alt="" class="testimonial-avatar">
              <h5 class="testimonial-author">{{ testimonial.author }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      testimonial: {
        type: Object,
        required: true
      }
    }
  }
  </script>