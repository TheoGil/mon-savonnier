<template>
  <div class="stars">
    <svg class="icon"><use :xlink:href="note >= 1 ? '#icon-star-full' : '#icon-star-empty'"></use></svg>
    <svg class="icon"><use :xlink:href="note >= 2 ? '#icon-star-full' : '#icon-star-empty'"></use></svg>
    <svg class="icon"><use :xlink:href="note >= 3 ? '#icon-star-full' : '#icon-star-empty'"></use></svg>
    <svg class="icon"><use :xlink:href="note >= 4 ? '#icon-star-full' : '#icon-star-empty'"></use></svg>
    <svg class="icon"><use :xlink:href="note >= 5 ? '#icon-star-full' : '#icon-star-empty'"></use></svg>
  </div>
</template>

<script>
  export default {
    name: 'Stars',
    props: ['note'],
  };
</script>