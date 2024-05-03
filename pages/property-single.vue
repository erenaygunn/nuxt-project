<template>
    <IntroSingle title="304 Blaster Up" breadcrumb="Properties / 304 Blaster Up" text="Chicago, IL 606543"/>
    <section class="property-single nav-arrow-b">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div id="property-single-carousel" class="owl-carousel owl-arrow gallery-property">
                        <div class="carousel-item-b">
                        <img src="~/public/img/slide-2.jpg" alt="">
                        </div>
                        <div class="carousel-item-b">
                        <img src="~/public/img/slide-3.jpg" alt="">
                        </div>
                        <div class="carousel-item-b">
                        <img src="~/public/img/slide-1.jpg" alt="">
                        </div>
                    </div>
                        <div class="row justify-content-between">
                            <div class="col-md-5 col-lg-4">
                                <div class="property-price d-flex justify-content-center foo">
                                    <div class="card-header-c d-flex">
                                        <div class="card-box-ico">
                                            <span class="ion-money">$</span>
                                        </div>
                                        <div class="card-title-c align-self-center">
                                            <h5 class="title-c">15000</h5>
                                        </div>
                                    </div>
                                </div>
                                <Summary :summaryItems="summaryItems"/>
                            </div>
                            <div class="col-md-7 col-lg-7 section-md-t3">
                                <Description/>
                                <Amenities/>
                            </div>
                        </div>
                    </div>
                </div>
                <Navigation/>
                <Contact/>
            </div>
    </section>
</template>

<script>
import Summary from "@/components/PropertySingle/Summary.vue";
import Description from "@/components/PropertySingle/Description.vue";
import Amenities from "@/components/PropertySingle/Amenities.vue";
import Navigation from "@/components/PropertySingle/Navigation.vue";
import Contact from "@/components/PropertySingle/Contact.vue";

export default {
  components: {
    Summary,
    Description,
    Amenities,
    Navigation,
    Contact,
  },
};
</script>