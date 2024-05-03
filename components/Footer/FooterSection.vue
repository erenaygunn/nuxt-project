<template>
    <div class="col-sm-12 col-md-4">
      <div class="widget-a">
        <div class="w-header-a">
          <h3 class="w-title-a text-brand">{{ title }}</h3>
        </div>
        <div class="w-body-a">
          <ul class="list-unstyled">
            <li class="item-list-a" v-for="(item, index) in items" :key="index">
              <i class="fa fa-angle-right"></i> <a :href="item.link">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      items: {
        type: Array,
        required: true
      }
    }
  }
  </script>