<template>
  <div class="product">
    <router-link to="/product">
      <div class="product-thumbnail-placeholder">
        <svg class="icon" width="200" height="200">
          <use xlink:href="#icon-logo"></use>
        </svg>
      </div>
      <div class="product-thumbnail-wrapper-outer">
        <div class="product-thumbnail-wrapper-inner">
          <img
            v-lazy="thumbnail"
            alt=""
            class="product-thumbnail lazy"
          >
        </div>
      </div>
      <div class="product-infos">
        <div class="product-name product-data bold">{{ title }}</div>
        <div class="product-price product-data">{{ price }}</div>
        <div class="product-name product-data product-icons">
          <svg class="icon">
            <use xlink:href="#icon-binoculars"></use>
          </svg>
          <svg class="icon">
            <use xlink:href="#icon-leaf"></use>
          </svg>
          <svg class="icon">
            <use xlink:href="#icon-bookmark"></use>
          </svg>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'ProductsThumbnail',
    props: ['title', 'price', 'thumbnail'],
  };
</script>