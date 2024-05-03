<template>
    <section class="section-agents section-t8">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="title-wrap d-flex justify-content-between">
              <div class="title-box">
                <h2 class="title-a">Best Agents</h2>
              </div>
              <div class="title-link">
                <nuxt-link to="/agents-grid">All Agents
                  <span class="ion-ios-arrow-forward"></span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(agent, index) in agents" :key="index">
            <div class="card-box-d">
              <div class="card-img-d">
                <img :src="agent.imageSrc" :alt="agent.imageAlt" class="img-d img-fluid">
              </div>
              <div class="card-overlay card-overlay-hover">
                <div class="card-header-d">
                  <div class="card-title-d align-self-center">
                    <h3 class="title-d">
                      <nuxt-link :to="agent.link" class="link-two">{{ agent.name }}</nuxt-link>
                    </h3>
                  </div>
                </div>
                <div class="card-body-d">
                  <p class="content-d color-text-a">{{ agent.description }}</p>
                  <div class="info-agents color-a">
                    <p>
                      <strong>Phone: </strong> {{ agent.phone }}</p>
                    <p>
                      <strong>Email: </strong> {{ agent.email }}</p>
                  </div>
                </div>
                <div class="card-footer-d">
                  <div class="socials-footer d-flex justify-content-center">
                    <ul class="list-inline">
                      <li v-for="(social, i) in agent.socials" :key="i" class="list-inline-item">
                        <a :href="social.link" class="link-one">
                          <i :class="social.iconClass" aria-hidden="true"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
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
        agents: [
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
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  </style>
  