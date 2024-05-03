<template>
    <IntroSingle title="Margaret Stone" breadcrumb="Agents / Margaret Stone" text="Agent Immobiliari"/>
    <div class="container">
        <div class="row">
            <AgentProfile/>
            <div class="col-md-12 section-t8">
                <div class="title-box-d">
                    <h3 class="title-d">My Properties (6)</h3>
                </div>
            </div>
            <section class="property-grid grid">
                <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                    <div class="grid-option">
                        <form>
                        <select class="custom-select">
                            <option selected>All</option>
                            <option value="1">New to Old</option>
                            <option value="2">For Rent</option>
                            <option value="3">For Sale</option>
                        </select>
                        </form>
                    </div>
                    </div>
                    <PropertyCard v-for="(property, index) in properties" :key="index" :imageSrc="property.imageSrc"
                    :propertyName="property.propertyName"
                    :propertyLink="property.propertyLink"
                    :propertyType="property.propertyType"
                    :propertyPrice="property.propertyPrice"
                    :propertyArea="property.propertyArea"
                    :propertyBeds="property.propertyBeds"
                    :propertyBaths="property.propertyBaths"
                    :propertyGarages="property.propertyGarages" />
                </div>
                <Pagination :pageCount="pageCount" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import PropertyCard from '@/components/Property/PropertyCard.vue';
import Pagination from '@/components/Pagination.vue';
import AgentProfile from '@/components/Agents/AgentProfile/AgentProfile.vue';

export default {
  components: {
    PropertyCard,
    Pagination,
    AgentProfile
  },
  data() {
    return {
        properties: [
        {
          imageSrc: 'img/property-1.jpg',
          propertyName: '204 Mount Olive Road Two',
          propertyLink: '#',
          propertyType: 'rent',
          propertyPrice: 12000,
          propertyArea: '340m²',
          propertyBeds: 2,
          propertyBaths: 4,
          propertyGarages: 1
        },
        {
          imageSrc: 'img/property-3.jpg',
          propertyName: 'Another Property Name',
          propertyLink: '#',
          propertyType: 'sale',
          propertyPrice: 15000,
          propertyArea: '400m²',
          propertyBeds: 3,
          propertyBaths: 2,
          propertyGarages: 2
        },
        {
          imageSrc: 'img/property-6.jpg',
          propertyName: 'Third Property Name',
          propertyLink: '#',
          propertyType: 'rent',
          propertyPrice: 9000,
          propertyArea: '280m²',
          propertyBeds: 2,
          propertyBaths: 3,
          propertyGarages: 1
        },
        {
          imageSrc: 'img/property-7.jpg',
          propertyName: 'Fourth Property Name',
          propertyLink: '#',
          propertyType: 'sale',
          propertyPrice: 18000,
          propertyArea: '420m²',
          propertyBeds: 4,
          propertyBaths: 3,
          propertyGarages: 2
        },
        {
          imageSrc: 'img/property-8.jpg',
          propertyName: 'Fifth Property Name',
          propertyLink: '#',
          propertyType: 'rent',
          propertyPrice: 10000,
          propertyArea: '320m²',
          propertyBeds: 3,
          propertyBaths: 2,
          propertyGarages: 1
        },
        {
          imageSrc: 'img/property-10.jpg',
          propertyName: 'Sixth Property Name',
          propertyLink: '#',
          propertyType: 'sale',
          propertyPrice: 20000,
          propertyArea: '450m²',
          propertyBeds: 5,
          propertyBaths: 4,
          propertyGarages: 3
        }
      ],
      pageCount: 3 // Example page count
    };
  }
};
</script>