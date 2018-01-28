<template>
  <div id="app">
    <svg-sprites/>
    <navbar/>
    <transition :name="transitionName">
      <router-view/>
    </transition>
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
  data() {
    return {
      transitionName: 'slide-right',
    };
  },
  watch: {
    /*
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }, */
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/style.scss";
</style>
