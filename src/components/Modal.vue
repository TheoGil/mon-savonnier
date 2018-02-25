<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-layer" @click="$emit('close')"></div>
      <div class="modal">
          <div class="body">
            <slot name="body">
              default body
            </slot>
          </div>
        </div>
    </div>
  </transition>
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