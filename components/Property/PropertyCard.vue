<template>
    <div class="col-md-4">
      <div class="card-box-a card-shadow">
        <div class="img-box-a">
          <img :src="imageSrc" alt="" class="img-a img-fluid">
        </div>
        <div class="card-overlay">
          <div class="card-overlay-a-content">
            <div class="card-header-a">
              <h2 class="card-title-a">
                <a :href="propertyLink">{{ propertyName }}</a>
              </h2>
            </div>
            <div class="card-body-a">
              <div class="price-box d-flex">
                <span class="price-a">{{ propertyType }} | $ {{ propertyPrice }}</span>
              </div>
              <a :href="propertyLink" class="link-a">Click here to view
                <span class="ion-ios-arrow-forward"></span>
              </a>
            </div>
            <div class="card-footer-a">
              <ul class="card-info d-flex justify-content-around">
                <li>
                  <h4 class="card-info-title">Area</h4>
                  <span>{{ propertyArea }}</span>
                </li>
                <li>
                  <h4 class="card-info-title">Beds</h4>
                  <span>{{ propertyBeds }}</span>
                </li>
                <li>
                  <h4 class="card-info-title">Baths</h4>
                  <span>{{ propertyBaths }}</span>
                </li>
                <li>
                  <h4 class="card-info-title">Garages</h4>
                  <span>{{ propertyGarages }}</span>
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
      imageSrc: String,
      propertyName: String,
      propertyLink: String,
      propertyType: String,
      propertyPrice: Number,
      propertyArea: String,
      propertyBeds: Number,
      propertyBaths: Number,
      propertyGarages: Number
    }
  };
  </script>
  