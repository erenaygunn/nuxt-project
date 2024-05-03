<template>
    <div class="intro intro-carousel">
      <div id="carousel" class="owl-carousel owl-theme">
        <div v-for="(item, index) in items" :key="index" class="carousel-item-a intro-item bg-image" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="overlay overlay-a"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="intro-body">
                      <p class="intro-title-top">{{ item.location }}</p>
                      <h1 class="intro-title mb-4">
                        <span class="color-b">{{ item.number }}</span> {{ item.street }}
                      </h1>
                      <p class="intro-subtitle intro-price">
                        <a href="#"><span class="price-a">{{ item.price }}</span></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script setup>
  const items = [
    {
      image: '/img/slide-1.jpg',
      location: 'Doral, Florida\n78345',
      number: 204,
      street: 'Mount\nOlive Road Two',
      price: 'rent | $ 12.000'
    },
    {
      image: '/img/slide-2.jpg',
      location: 'Doral, Florida\n78345',
      number: 204,
      street: 'Rino\nVenda Road Five',
      price: 'rent | $ 12.000'
    },
    {
      image: '/img/slide-3.jpg',
      location: 'Doral, Florida\n78345',
      number: 204,
      street: 'Alira\nRoan Road One',
      price: 'rent | $ 12.000'
    }
  ]
</script>

<script>
  export default {
    name: 'IntroCarousel'
  }
</script>
  