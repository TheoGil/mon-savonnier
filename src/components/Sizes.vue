<template>
  <div class="sizes flex">
    <button 
      class="flex"
      v-on:click="$emit('setSize', 'small')"
      v-bind:class="{'is-active' : selectedSize == 'small'}"
    >
      <svg class="icon small">
        <use xlink:href="#icon-soap"></use>
      </svg>
      Small
    </button>
    <button 
      class="flex"
      v-on:click="$emit('setSize', 'medium')"
      v-bind:class="{'is-active' : selectedSize == 'medium'}"
    >
      <svg class="icon medium">
        <use xlink:href="#icon-soap"></use>
      </svg>
      Medium
    </button>
    <button 
      class="flex"
      v-on:click="$emit('setSize', 'large')"
      v-bind:class="{'is-active' : selectedSize == 'large'}"
    >
      <svg class="icon large">
        <use xlink:href="#icon-soap"></use>
      </svg>
      Large
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Sizes',
    props: ['selectedSize'],
  };
</script>