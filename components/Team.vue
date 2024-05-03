<template>
    <section class="section-agents section-t8">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="title-wrap d-flex justify-content-between">
            <div class="title-box">
              <h2 class="title-a">Meet Our Team</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <AgentCard v-for="(agent, index) in agents" :key="index" :agent="agent" />
      </div>
    </div>
  </section>
</template>
  
<script>
import AgentCard from './Agents/AgentCard.vue';
    export default {
    components: {
        AgentCard
    },
    data() {
      return {
        agents: [
          {
            name: 'Margaret Sotillo Escala',
            imageSrc: 'img/agent-7.jpg',
            imageAlt: 'Agent 1',
            description: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
            phone: '+54 356 945234',
            email: 'agents@example.com',
            link: '/agent-single',
            socials: [
              { iconClass: 'fa fa-facebook', link: '#' },
              { iconClass: 'fa fa-twitter', link: '#' },
              { iconClass: 'fa fa-instagram', link: '#' },
              { iconClass: 'fa fa-pinterest-p', link: '#' },
              { iconClass: 'fa fa-dribbble', link: '#' }
            ]
          },
          {
            name: 'Stiven Spilver Darw',
            imageSrc: 'img/agent-6.jpg',
            imageAlt: 'Agent 2',
            description: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
            phone: '+54 356 945234',
            email: 'agents@example.com',
            link: '/agent-single',
            socials: [
              { iconClass: 'fa fa-facebook', link: '#' },
              { iconClass: 'fa fa-twitter', link: '#' },
              { iconClass: 'fa fa-instagram', link: '#' },
              { iconClass: 'fa fa-pinterest-p', link: '#' },
              { iconClass: 'fa fa-dribbble', link: '#' }
            ]
          },
          {
            name: 'Emma Toledo Cascada',
            imageSrc: 'img/agent-5.jpg',
            imageAlt: 'Agent 3',
            description: 'Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.',
            phone: '+54 356 945234',
            email: 'agents@example.com',
            link: '/agent-single',
            socials: [
              { iconClass: 'fa fa-facebook', link: '#' },
              { iconClass: 'fa fa-twitter', link: '#' },
              { iconClass: 'fa fa-instagram', link: '#' },
              { iconClass: 'fa fa-pinterest-p', link: '#' },
              { iconClass: 'fa fa-dribbble', link: '#' }
            ]
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  