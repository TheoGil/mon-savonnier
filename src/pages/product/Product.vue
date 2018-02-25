<template>
  <div itemscope itemtype="http://schema.org/Product">
    <!-- Product Header -->
    <div class="row flex product-header">
      <div class="columns small-8">
        <h1 class="product-title" itemprop="name">{{ title }}</h1>
        <div 
          class="notation" 
          v-bind:class="{'no-reviews-yet' : reviewCount == 0}"
          v-if="reviewCount > 0"
        >
          <stars :note="note"/>
          <div class="review-counter">({{ reviewCount }})</div>
        </div>
      </div>
      <div class="columns small-4">
        <div class="product-price">
          <span itemprop="price" :content="price">{{ price }}</span>
          <span itemprop="priceCurrency" content="EUR">&euro;</span>
        </div>
      </div>
    </div>
    <!-- /Product Header -->
    <!-- Slideshow + Actions + Desktop buy form -->
    <div class="row">
      <!-- Actions + Desktop buy form -->
      <div class="columns medium-5 medium-push-7 product-labels-actions-container">
        <form class="product-actions">
          <div class="form-control desktop">
            <label class="label" for="quantity">Quantitée désirée</label>
            <quantity 
              :value="quantity" 
              :max-value="availableStock"
              :input-name="'quantity'"
              v-on:setQuantity="setQuantity"
            />
          </div>
          <div class="form-control desktop">
            <label class="label">Taille</label>
            <sizes 
              :selected-size="selectedSize"
              v-on:setSize="setSize"
            />
          </div>
          <div class="form-control product-price desktop">
            <span itemprop="price" :content="price">{{ price }}</span>
            <span itemprop="priceCurrency" content="EUR">&euro;</span>
          </div>
          <button class="badge product-buy flex" type="submit">
            <svg class="icon">
              <use xlink:href="#icon-cart"></use>
            </svg>
            <span class="desktop">
              Ajouter au panier
            </span>
          </button>
          <heart/>
          <a class="badge share" href="#">
            <svg class="icon">
              <use xlink:href="#icon-share"></use>
            </svg>
          </a>
        </form>
      </div>
      <!-- /Actions + Desktop buy form -->
      <!-- Slideshow -->
      <div class="columns medium-7 medium-pull-5 slideshow-container">
        <img src="../../assets/img/single-soap/savon-artisanal-naturel-sang-pour-sang.jpg" alt="">
      </div>
      <!-- /Slideshow -->
    </div>
    <!-- Slideshow + Actions + Desktop buy form -->
    <div class="row column section-wrapper">
      <section class="section">
        <div class="product-labels-container">
          <div class="product-label">
            <svg class="icon">
              <use xlink:href="#icon-binoculars"></use>
            </svg>
            <div class="desktop">
              Ce savon est certifié 100% naturel
            </div>
          </div>
          <div class="product-label">
            <svg class="icon">
              <use xlink:href="#icon-leaf"></use>
            </svg>
            <div class="desktop">
              Saponification à froid
            </div>
          </div>
          <div class="product-label">
            <svg class="icon">
              <use xlink:href="#icon-bookmark"></use>
            </svg>
            <div class="desktop">
              Tous les composants sont d'origine végétale
            </div>
          </div>
        </div>
        <h2 class="section-title">Description</h2>
        <div data-itemprop="description">
          <p>Sans parfum - 100g</p>
          <p>Enveloppez votre peau dans un cocon de douceur avec bulles d'amande douce!</p>
          <p>Idéal pour les peaux délicates, ce savon est formulé à partir d'huile végétale d'amande douce et ne contient aucune huile essentielle.</p>
          <p>Surgras à 9%, bulles d'amande douce propose des ingrédients aux propriétés calmantes, adoucissantes et assouplissantes, notamment l'huile végétale d'amandon de pruneaux, riche en vitamine E.</p>
          <p>Tous les ingrédients sont naturels et issus de l'agriculture biologique. À choisir pour les épidermes&nbsp;fragiles et sensibles, comme celui des plus jeunes.</p>
        </div>
      </section>
    </div>
    <div class="row column section-wrapper">
      <section class="section">
        <h2 class="section-title">Caractéristiques</h2>
        <table>
          <tr>
            <td>Artisan</td>
            <td>Badiane</td>
          </tr>
          <tr>
            <td>Poids</td>
            <td>100 g</td>
          </tr>
          <tr>
            <td>Surgraissage</td>
            <td>9%</td>
          </tr>
          <tr>
            <td>Vegan</td>
            <td>Oui</td>
          </tr>
          <tr>
            <td>INCI</td>
            <td>Prunus Domestica Seed oil</td>
          </tr>
          <tr>
            <td>Huiles essentielles</td>
            <td>Non</td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
  import Stars from '../../components/Stars';
  import Heart from '../../components/Heart';
  import Quantity from '../../components/Quantity';
  import Sizes from '../../components/Sizes';

  export default {
    name: 'Product',
    data() {
      return {
        title: 'Bulles d\'amande douce',
        price: '5.90',
        note: 4,
        reviewCount: 32,
        selectedSize: 'medium',
        quantity: 1,
        availableStock: 5,
      };
    },
    methods: {
      setQuantity(newQuantity) {
        this.quantity = newQuantity;
      },
      setSize(newSize) {
        this.selectedSize = newSize;
      },
    },
    components: {
      stars: Stars,
      heart: Heart,
      quantity: Quantity,
      sizes: Sizes,
    },
  };
</script>