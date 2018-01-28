<template>
  <div class="single-product">
    <div 
      class="tabs-wrapper"
      v-bind:class="{'is-left-hidden' : isLeftHidden, 'is-right-hidden' : isRightHidden}"
    >
      <div class="row column">
        <ol 
          class="tabs-container" 
          v-on:scroll="handleScroll"
        >
          <li>
            <router-link to="/product">Product</router-link>
          </li>
          <li>
            <router-link to="/product/reviews">Reviews</router-link>
          </li>
          <li>
            <a href="#">
              You might like
            </a>
          </li>
          <li>
            <a href="#">
              Some other link
            </a>
          </li>
        </ol>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ProductIndex',
    data() {
      return {
        isLeftHidden: false,
        isRightHidden: false,
      };
    },
    methods: {
      handleScroll(e) {
        const scrollLeft = e.target.scrollLeft;
        const width = e.target.offsetWidth;
        const scrollWidth = e.target.scrollWidth;

        this.isLeftHidden = scrollLeft > 1;
        this.isRightHidden = scrollLeft + width < scrollWidth;
      },
    },
  };
</script>