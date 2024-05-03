<template>
    <div class="col-md-6">
      <div class="agent-avatar-box">
        <img :src="avatarSrc" :alt="alt" class="agent-avatar img-fluid">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      avatarSrc: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  };
  </script>
  