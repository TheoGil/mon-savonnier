<template>
  <div class="review">
    <div class="review-header flex">
      <div class="badge">
        {{ author.charAt(0) }}
      </div>
      <div class="review-author">
        {{ author }}
      </div>
      <stars :note="note"/>
    </div>
    <div class="review-body">
      {{ content }}
    </div>
  </div>
</template>

<script>
  import Stars from './Stars';

  export default {
    name: 'Review',
    props: ['author', 'note', 'content'],
    components: {
      stars: Stars,
    },
  };
</script>