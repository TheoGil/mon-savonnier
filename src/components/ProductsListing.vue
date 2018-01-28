<template>
  <div class="product-listing" id="product-listing">
    <div class="tabs-wrapper">
      <div class="row column">
        <ol class="tabs-container product-categories">
          <li>
            <a href="#">
              Category 1
            </a>
          </li>
          <li>
            <a href="#" class="is-active">
              Category 2
            </a>
          </li>
          <li>
            <a href="#">
              Category 3
            </a>
          </li>
        </ol>
      </div>
    </div>
    <div class="row column">
      <ul class="item-listing">
        <li 
          v-for="(soap, index) in soaps" 
          class="list-item" 
          v-bind:class="{'is-large' : soap.isLarge}"
          v-bind:key="soap.name"
          v-bind:data-index="index"
        >
          <soap 
          :title="soap.name"
          :price="soap.price"
          :thumbnail="soap.thumbnailUrl"
          />  
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import ProductThumbnail from '../components/ProductThumbnail';

  import thumb1 from '../assets/img/soaps/eponna.jpg';
  import thumb2 from '../assets/img/soaps/copeaux-de-savon-coco-pour-lessive.jpg';
  import thumb3 from '../assets/img/soaps/savon-artisanal-naturel-sang-pour-sang.jpg';
  import thumb4 from '../assets/img/soaps/savon-artisanal-naturel-cocktail.jpg';
  import thumb5 from '../assets/img/soaps/savon-naturel-mon-papa-avait-de-la-barbe.jpg';
  import thumb6 from '../assets/img/soaps/fine-lavande.jpg';
  import thumb7 from '../assets/img/soaps/savon-artisanal-naturel-vandal.jpg';
  import thumb8 from '../assets/img/soaps/mellitis.jpg';
  import thumb9 from '../assets/img/soaps/cybèle.jpg';
  import thumb10 from '../assets/img/soaps/mon-calendula.jpg';
  import thumb11 from '../assets/img/soaps/badiane-évasion.jpg';

  export default {
    name: 'ProductsListing',
    data() {
      return {
        show: true,
        soaps: [
          {
            name: 'Eponna',
            price: '3,50€',
            thumbnailUrl: thumb1,
          },
          {
            name: 'Copeaux de savon coco pour lessive',
            price: '3,60€',
            thumbnailUrl: thumb2,
          },
          {
            name: 'Sang pour sang',
            price: '6,00€',
            thumbnailUrl: thumb3,
          },
          {
            name: 'Cocktail',
            price: '6,00€',
            isLarge: true,
            thumbnailUrl: thumb4,
          },
          {
            name: 'Mon papa avait de la barbe',
            price: '6,00€',
            thumbnailUrl: thumb5,
          },
          {
            name: 'Fine lavande',
            price: '6,40€',
            thumbnailUrl: thumb6,
          },
          {
            name: 'Vandal',
            price: '6,50€',
            thumbnailUrl: thumb7,
          },
          {
            name: 'Mellitis',
            price: '6,50€',
            thumbnailUrl: thumb8,
          },
          {
            name: 'Cybèle',
            price: '6,50€',
            thumbnailUrl: thumb9,
          },
          {
            name: 'Mon calendula',
            price: '6,50€',
            thumbnailUrl: thumb10,
          },
          {
            name: 'Badiane évasion',
            price: '6,50€',
            thumbnailUrl: thumb11,
          },
        ],
      };
    },
    components: {
      soap: ProductThumbnail,
    },
    methods: {
      handleResize: () => {
        // console.log(this);
      },
    },
    mounted: () => {
      // window.addEventListener('resize', this.handleResize)
    },
  };
</script>