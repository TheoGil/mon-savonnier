<template>
  <div class="product-listing" id="product-listing">
    <div class="tabs-wrapper">
      <div class="row column">
        <ol class="tabs-container product-categories">
          <li>
            <a href="#">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" class="is-active">
              Category 2
            </a>
          </li>
          <li>
            <a href="#">
              Category 3
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="row column">
      <ul class="item-listing">
        <li 
          v-for="(product, index) in products"
          class="list-item"
          v-bind:key="product.name.language._cdata"
          v-bind:data-index="index"
        >
          <soap 
          :title="product.name.language._cdata"
          :price="product.price._cdata"
          :id="product.id._cdata"
          :thumbnail="product.id_default_image._attributes['xlink:href']"
          />  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import ProductThumbnail from '../components/ProductThumbnail';

  export default {
    name: 'ProductsListing',
    components: {
      soap: ProductThumbnail,
    },
    computed: {
      // Using speard operator in case we want to add our own custom computed properties
      ...mapGetters({
        products: 'getProducts',
      }),
    },
  };
</script>