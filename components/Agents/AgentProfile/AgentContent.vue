<template>
    <div class="col-md-5 section-md-t3">
      <div class="agent-info-box">
        <div class="agent-title">
          <div class="title-box-d">
            <h3 class="title-d">{{ title }}</h3>
          </div>
        </div>
        <div class="agent-content mb-3">
          <p class="content-d color-text-a">{{ description }}</p>
          <div class="info-agents color-a">
            <p><strong>Phone: </strong><span class="color-text-a">{{ phone }}</span></p>
            <p><strong>Mobile: </strong><span class="color-text-a">{{ mobile }}</span></p>
            <p><strong>Email: </strong><span class="color-text-a">{{ email }}</span></p>
            <p><strong>Skype: </strong><span class="color-text-a">{{ skype }}</span></p>
          </div>
        </div>
        <AgentFooter :socials="socials" />
      </div>
    </div>
  </template>
  
  <script>
  import AgentFooter from "./AgentFooter.vue";
  
  export default {
    components: {
      AgentFooter
    },
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true
      },
      mobile: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      skype: {
        type: String,
        required: true
      },
      socials: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  