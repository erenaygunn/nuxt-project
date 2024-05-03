<template>
    <div>
      <section class="section-footer">
        <div class="container">
          <div class="row">
            <FooterSection title="EstateAgency" :items="agencyItems" />
            <FooterSection title="The Company" :items="companyItems" />
            <FooterSection title="International sites" :items="internationalItems" />
          </div>
        </div>
      </section>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav class="nav-footer">
                <ul class="list-inline">
                  <li class="list-inline-item" v-for="(item, index) in navItems" :key="index">
                    <a :href="item.link">{{ item.name }}</a>
                  </li>
                </ul>
              </nav>
              <SocialLinks />
              <div class="copyright-footer">
                <p class="copyright color-text-a">
                  &copy; Copyright
                  <span class="color-a">EstateAgency</span> All Rights Reserved.
                </p>
              </div>
              <div class="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  import FooterSection from './FooterSection.vue'
  import SocialLinks from './SocialLinks.vue'
  
  export default {
    components: {
      FooterSection,
      SocialLinks
    },
    data() {
      return {
        navItems: [
          { name: 'Home', link: '#' },
          { name: 'About', link: '#' },
          { name: 'Property', link: '#' },
          { name: 'Blog', link: '#' },
          { name: 'Contact', link: '#' }
        ],
        agencyItems: [
          { name: 'Phone .', link: 'contact@example.com' },
          { name: 'Email .', link: '+54 356 945234' }
        ],
        companyItems: [
          { name: 'Site Map', link: '#' },
          { name: 'Legal', link: '#' },
          { name: 'Agent Admin', link: '#' },
          { name: 'Careers', link: '#' },
          { name: 'Affiliate', link: '#' },
          { name: 'Privacy Policy', link: '#' }
        ],
        internationalItems: [
          { name: 'Venezuela', link: '#' },
          { name: 'China', link: '#' },
          { name: 'Hong Kong', link: '#' },
          { name: 'Argentina', link: '#' },
          { name: 'Singapore', link: '#' },
          { name: 'Philippines', link: '#' }
        ]
      }
    }
  }
  </script>