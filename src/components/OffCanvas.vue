<template>
  <div>
    <div class="off-canvas-overlay"
      v-bind:class="{'active' : offCanvasIsActive}"
      v-on:click="toggleOffCanvas"
    >
    </div>
    <div class="off-canvas main-menu" v-bind:class="{'open' : offCanvasIsActive}">
      <nav>
        <ul>
          <li>
            <a class="user-navbar-entry navbar-entry" href="#">
              <div class="badge">
                <div class="badge-content">J</div>
              </div>
              <div class="link-label">
                <div class="user-name has-dots">
                  Jennifer
                </div>
                <div>
                  View profile
                </div>
              </div>
              <div class="arrow">
                <svg class="icon">
                  <use xlink:href="#icon-angle-right"></use>
                </svg>
              </div>
            </a>
          </li>
          <li>
            <router-link to="/" class="navbar-entry">
              <svg class="icon">
                <use xlink:href="#icon-home"></use>
              </svg>
              <div class="link-label">
                Home
              </div>
              <div class="arrow">
                <svg class="icon">
                  <use xlink:href="#icon-angle-right"></use>
                </svg>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/cart" class="navbar-entry">
              <svg class="icon">
                <use xlink:href="#icon-cart"></use>
              </svg>
              <div class="link-label">
                Shopping Cart
              </div>
              <div class="arrow">
                <svg class="icon">
                  <use xlink:href="#icon-angle-right"></use>
                </svg>
              </div>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'OffCanvas',
    props: ['offCanvasIsActive'],
    methods: {
      toggleOffCanvas() {
        this.$emit('toggleOffCanvas');
      },
    },
  };
</script>