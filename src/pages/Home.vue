<template>
  <div>
    <splash/>
    <products-listing/>
  </div>
</template>

<script>
  import Splash from '../components/Splash';
  import ProductsListing from '../components/ProductsListing';

  export default {
    name: 'home',
    components: {
      splash: Splash,
      'products-listing': ProductsListing,
    },
  };
</script>