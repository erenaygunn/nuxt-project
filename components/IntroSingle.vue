<template>
  <section class="intro-single">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="title-single-box">
            <h1 class="title-single">{{ title }}</h1>
            <span>{{ text }}</span>
          </div>
        </div>
        <div class="col-md-12 col-lg-4">
          <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                {{ breadcrumb }}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IntroSingle',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: false
    },
    breadcrumb: {
      type: String,
      required: true
    }
  }
}
</script>