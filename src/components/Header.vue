<template>
  <header class="header" v-sticky="{zIndex: 100, stickyTop: 0}">
    <div class="row column">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-start">
          
          <button class="transparent navbar-entry" v-on:click="toggleOffCanvas">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-menu"></use>
            </svg>
          </button>

          <router-link to="/" class="navbar-entry">
            Home
          </router-link>
        </div>
        <div class="navbar-end">
          <button class="navbar-entry transparent">
            <svg class="icon icon-angle-down">
              <use xlink:href="#icon-search"></use>
            </svg>
          </button>
          <router-link to="/cart" class="navbar-entry">
            <svg class="icon">
              <title>Accéder à votre panier</title>
              <use xlink:href="#icon-cart"></use>
            </svg>
            <div class="badge products-counter js-products-counter" :class="{'hidden': hideCounter}">
              <div class="products-counter-inner">
                <div class="current js-current-count">{{ internalCount }}</div>
                <div class="next js-next-count"></div>
              </div>
            </div>
          </router-link>
        </div>
      </nav> 
    </div>
    <off-canvas :offCanvasIsActive="offCanvasIsActive" v-on:toggleOffCanvas="toggleOffCanvas"/>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VueSticky from 'vue-sticky';
  import { TweenLite, Power2, Back } from 'gsap';
  import OffCanvas from '../components/OffCanvas';

  export default {
    name: 'Header',
    data() {
      return {
        internalCount: 0,
        offCanvasIsActive: false,
      };
    },
    computed: {
      // Using speard operator in case we want to add our own custom computed properties
      ...mapGetters({
        count: 'getProductsCount',
      }),
      hideCounter() {
        return this.internalCount === 0;
      },
    },
    watch: {
      count(newValue) {
        this.updateCounter(newValue);
      },
    },
    methods: {
      updateCounter(newValue) {
        const tweenDuration = 0.5;
        const container = this.$el.querySelector('.js-products-counter');
        const currentValue = this.$el.querySelector('.js-current-count');
        const nextValue = this.$el.querySelector('.js-next-count');

        if (this.internalCount === 0 && newValue > this.internalCount) {
          this.internalCount = newValue;
          TweenLite.fromTo(container, tweenDuration, {
            css: {
              scale: 0,
              opacity: 0,
            },
          }, {
            css: {
              scale: 1,
              opacity: 1,
            },
            ease: Back.easeOut.config(2),
          });
        } else if (newValue === 0) {
          TweenLite.to(container, tweenDuration, {
            css: {
              scale: 0,
              opacity: 0,
            },
            delay: 0.25,
            ease: Back.easeIn.config(2),
            onComplete: () => {
              this.internalCount = newValue;
            },
          });
        } else {
          // Exit current count
          TweenLite.fromTo(currentValue, tweenDuration, {
            css: {
              y: '-50%',
              opacity: 1,
            },
          }, {
            css: {
              y: this.internalCount > newValue ? 10 : -10,
              opacity: 0,
            },
            ease: Power2.easeOut,
          });
          // Entrance new count
          nextValue.textContent = newValue;
          TweenLite.fromTo(nextValue, tweenDuration, {
            css: {
              y: this.internalCount > newValue ? -10 : 10,
              opacity: 0,
            },
          }, {
            css: {
              y: '-50%',
              opacity: 1,
            },
            ease: Power2.easeOut,
            onComplete: () => {
              this.internalCount = newValue;
              currentValue.style.transform = '';
              currentValue.style.opacity = 1;
              nextValue.style.opacity = 0;
            },
          });
        }
      },
      toggleOffCanvas() {
        this.offCanvasIsActive = !this.offCanvasIsActive;
      },
    },
    components: {
      'off-canvas': OffCanvas,
    },
    directives: {
      sticky: VueSticky,
    },
    mounted() {
      this.internalCount = this.count;
    },
  };
</script>