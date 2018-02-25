<template>
  <div class="quantity-input-container">
    <button 
      class="button" 
      v-on:click="decrement"
    >
      -
    </button>
    <input 
      type="number" 
      v-model="value" 
      v-bind:max="maxValue"
      min="1"
      :id="inputName"
    >
    <button 
      class="button"
      v-on:click="increment"
    >
      +
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Quantity',
    props: ['value', 'maxValue', 'inputName'],
    data() {
      return {};
    },
    methods: {
      increment() {
        if (this.value < this.maxValue) {
          // this.value += 1;
          this.$emit('setQuantity', this.value + 1);
        }
      },
      decrement() {
        if (this.value > 1) {
          this.$emit('setQuantity', this.value - 1);
        }
      },
    },
  };
</script>