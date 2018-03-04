<template>
  <div id="app">
    <svg-sprites/>
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import SvgSprites from './components/SvgSprites';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    'svg-sprites': SvgSprites,
    navbar: Header,
  },
  created() {
    // Fetch cart content from local storage
    this.$store.dispatch('fetchCartContent');
    // Fetch all products
    this.$store.dispatch('fetchAllProducts');
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/style.scss";
</style>
