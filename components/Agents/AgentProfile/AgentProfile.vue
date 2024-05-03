<template>
  <div class="col-sm-12">
    <div class="row">
      <AgentAvatar :avatarSrc="avatarSrc" :alt="alt" />
      <AgentContent 
        :title="title" 
        :description="description" 
        :phone="phone" 
        :mobile="mobile" 
        :email="email" 
        :skype="skype" 
        :socials="socials" 
      />
    </div>
  </div>
</template>

<script>
import AgentAvatar from "./AgentAvatar.vue";
import AgentContent from "./AgentContent.vue";

export default {
  components: {
    AgentAvatar,
    AgentContent
  },
  data() {
    return {
      avatarSrc: "img/agent-7.jpg",
      alt: "Agent Avatar",
      title: "Margaret Stone Escala",
      description: "Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus suscipit tortor eget felis porttitor volutpat.",
      phone: "+54 356 945234",
      mobile: "999 123 456 789",
      email: "agents@example.com",
      skype: "Margaret.Es",
      socials: [
        { icon: "fa fa-facebook", link: "#" },
        { icon: "fa fa-twitter", link: "#" },
        { icon: "fa fa-instagram", link: "#" },
        { icon: "fa fa-pinterest-p", link: "#" },
        { icon: "fa fa-dribbble", link: "#" }
      ]
    };
  }
};
</script>
