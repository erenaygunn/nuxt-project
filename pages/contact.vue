<template>
    <IntroSingle title="Contact Us" breadcrumb="Contact" 
    text="Aut voluptas consequatur unde sed omnis ex placeat quis eos. Aut natus officia corrupti qui autem fugit consectetur quo. Et ipsum eveniet laboriosam voluptas beatae possimus qui ducimus. Et voluptatem deleniti. Voluptatum voluptatibus amet. Et esse sed omnis inventore hic culpa."/>
    <section class="contact">
    <div class="container">
      <div class="row">
        <ContactMap />
        <div class="col-sm12 section-t8">
            <div class="row">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ContactMap from '../components/Contact/ContactMap.vue';
import ContactForm from '../components/Contact/ContactForm.vue';
import ContactInfo from '../components/Contact/ContactInfo.vue';

export default {
  components: {
    ContactMap,
    ContactForm,
    ContactInfo
  }
};
</script>
