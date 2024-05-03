<template>
    <div class="property-summary">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box-d section-t4">
            <h3 class="title-d">Quick Summary</h3>
          </div>
        </div>
      </div>
      <div class="summary-list">
        <ul class="list">
          <li v-for="item in summaryItems" :key="item.label" class="d-flex justify-content-between">
            <strong>{{ item.label }}</strong>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      summaryItems: Array
    }
  };
  </script>
  
  <style scoped>
  </style>
  