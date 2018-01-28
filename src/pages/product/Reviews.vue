<template>
  <div class="row column">
    <ul class="reviews">
      <li v-for="review in reviews">
        <review
          :author="review.author.name"
          :note="review.note"
          :content="review.content"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import Review from '../../components/Review';

  export default {
    name: 'ProductReviews',
    data() {
      return {
        reviews: [
          {
            author: {
              name: 'Danan',
            },
            note: 4,
            content: 'A recommander à toutes les peaux sensibles et sèches',
          },
          {
            author: {
              name: 'Manon',
            },
            note: 5,
            content: 'Un excellent savon que j\'utilise pour les mains. Très agréable à utiliser, ne dessèche pas les mains et sens très bon.',
          },
        ],
      };
    },
    components: {
      review: Review,
    },
  };
</script>