<template>
    <div class="row">
      <div class="col-sm-12">
        <nav class="pagination-a">
          <ul class="pagination justify-content-end">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                <span class="ion-ios-arrow-back"></span>
              </a>
            </li>
            <li class="page-item" v-for="page in pageCount" :key="page">
              <a class="page-link" href="#">{{ page }}</a>
            </li>
            <li class="page-item next">
              <a class="page-link" href="#">
                <span class="ion-ios-arrow-forward"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pageCount: Number
    }
  };
  </script>
  