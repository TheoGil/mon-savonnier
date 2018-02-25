<template>
  <button class="badge heart" href="#" v-on:click.stop="toggle"
          v-bind:class="{'is-favourite' : isFavourite}">
    <svg class="icon">
      <use xlink:href="#icon-heart"></use>
    </svg>
  </button>
</template>

<script>
  export default {
    name: 'Heart',
    data() {
      return {
        isFavourite: false,
      };
    },
    methods: {
      toggle() {
        this.isFavourite = !this.isFavourite;
      },
    },
  };
</script>