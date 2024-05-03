<template>
    <IntroSingle title="Our Amazing Agents" breadcrumb="Agents Grid" text="Grid Properties"/>
    <section class="agents-grid grid">
      <div class="container">
        <div class="row">
          <AgentCard v-for="(agent, index) in agents" :key="index" :agent="agent" />
        </div>
        <div class="row">
            <div class="col-sm-12">
                <Pagination :currentPage="currentPage" :pageCount="pageCount"/>
            </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import AgentCard from "../components/Agents/AgentCard.vue";
  import Pagination from "../components/Pagination.vue";
  
  export default {
    components: {
      AgentCard,
      Pagination
    },
    data() {
      return {
        agents: [
          {
            name: 'Margaret Sotillo Escala',
            imageSrc: 'img/agent-3.jpg',
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
            imageSrc: 'img/agent-2.jpg',
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
            imageSrc: 'img/agent-6.jpg',
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
          },
          {
            name: 'Margaret Sotillo Escala',
            imageSrc: 'img/agent-4.jpg',
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
            imageSrc: 'img/agent-1.jpg',
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
          },
          
        ],
        currentPage: 1,
        pageCount: 3
      };
    },
  };
  </script>
  