<template>
    <section class="section-services section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Our Services</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(service, index) in services" :key="index">
            <div class="card-box-c foo">
              <div class="card-header-c d-flex">
                <div class="card-box-ico">
                  <span :class="service.iconClass"></span>
                </div>
                <div class="card-title-c align-self-center">
                  <h2 class="title-c">{{ service.title }}</h2>
                </div>
              </div>
              <div class="card-body-c">
                <p class="content-c">{{ service.description }}</p>
              </div>
              <div class="card-footer-c">
                <a href="#" class="link-c link-icon">Read more
                  <span class="ion-ios-arrow-forward"></span>
                </a>
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
        services: [
          {
            title: 'Lifestyle',
            description: 'Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            iconClass: 'fa fa-gamepad'
          },
          {
            title: 'Loans',
            description: 'Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
            iconClass: 'fa fa-usd'
          },
          {
            title: 'Sell',
            description: 'Sed porttitor lectus nibh. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
            iconClass: 'fa fa-home'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  