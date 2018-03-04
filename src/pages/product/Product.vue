<template>
  <div itemscope itemtype="http://schema.org/Product">
    <div v-if="productIsLoaded">
      <!-- Product Header -->
      <div class="row flex product-header">
        <div class="columns small-8">
          <h1 class="product-title" itemprop="name">{{ product.name.language._cdata }}</h1>
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
            <span itemprop="price" :content="price">{{ product.price._cdata | currency }}</span>
          </div>
        </div>
      </div>
      <!-- /Product Header -->
      <!-- Slideshow + Actions + Desktop buy form -->
      <div class="row">
        <!-- Actions + Desktop buy form -->
        <div class="columns medium-5 medium-push-7 product-labels-actions-container">
          <div data-itemprop="description" v-html="product.description_short.language._cdata"></div>
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
            </div>
            <button class="badge product-buy flex button"
                    v-on:click="handleClickAddButton"
                    :class="classObject"
                    type="button"
            >
            <span v-if="!displayLoader || this.isMobile">
              <svg class="icon">
                <use xlink:href="#icon-cart"></use>
              </svg>
              <span class="desktop">
                Ajouter au panier
              </span>
            </span>
              <svg class="spinner" v-if="displayLoader && !this.isMobile">
                <use xlink:href="#icon-spinner"></use>
              </svg>
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
          <div data-itemprop="description" v-html="product.description.language._cdata"></div>
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
      <modal v-if="displaySizeQuantityModal" @close="displaySizeQuantityModal = false">
        <div slot="body">
          <div class="modal-section">
            <div class="h3">Taille</div>
            <sizes
                    :selected-size="selectedSize"
                    v-on:setSize="setSize"
            />
          </div>
          <div class="modal-section form-control">
            <div class="h3">Quantitée</div>
            <quantity
                    :value="quantity"
                    :max-value="availableStock"
                    :input-name="'quantity'"
                    v-on:setQuantity="setQuantity"
            />
          </div>
          <div class="modal-actions">
            <button class="button transparent" @click="displaySizeQuantityModal = false">
              Annuler
            </button>
            <button class="button" @click="addToCart">
              <span v-if="!displayLoader">Ajouter</span>
              <svg class="spinner" v-if="displayLoader">
                <use xlink:href="#icon-spinner"></use>
              </svg>
            </button>
          </div>
        </div>
      </modal>
      <modal v-if="displayAddConfirmationModal" @close="displayAddConfirmationModal = false">
        <div slot="body">
          <div class="modal-section">
            L'article "{{ title }}" a bien été ajouté au panier!
          </div>
          <div class="modal-actions">
            <button class="button transparent" @click="displayAddConfirmationModal = false">
              Poursuivre mes achats
            </button>
            <router-link to="/cart" class="button">
              Accéder au panier
            </router-link>
          </div>
        </div>
      </modal>
      <modal v-if="displayErrorModal" @close="displayErrorModal = false">
        <div slot="body">
          <div class="h3">Oups...</div>
          <div class="modal-section">
            Une erreur est survenue lors de l'ajout du produit à votre panier.<br>
            Il est possible que son stock soit épuisé.
          </div>
          <div class="modal-actions">
            <button class="button" @click="displayErrorModal = false">
              Rammenez moi à la fiche produit
            </button>
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Stars from '../../components/Stars';
  import Heart from '../../components/Heart';
  import Quantity from '../../components/Quantity';
  import Sizes from '../../components/Sizes';
  import Modal from '../../components/Modal';

  export default {
    name: 'Product',
    data() {
      return {
        id: 10754,
        title: 'Bulles d\'amande douce',
        price: 5.90,
        note: 4,
        reviewCount: 32,
        selectedSize: 'medium',
        quantity: 1,
        availableStock: 5,

        product: {},
        productIsLoaded: false ,

        displaySizeQuantityModal: false,
        displayAddConfirmationModal: false,
        displayErrorModal: false,
        isMobile: false,
        displayLoader: false,
      };
    },
    mounted() {
      this.setIsMobile();
      window.addEventListener('resize', this.setIsMobile);

      this.waitUntilProductsAreLoaded()
          .then(() => {
            console.log('FILTER OUR PRODUCTS');
            this.fetchProduct(this.$route.params.id);
          });
    },
    computed: {
      ...mapGetters({
        products: 'getProducts',
      }),
      classObject() {
        return {
          loading: this.displayLoader && !this.isMobile,
        };
      },
    },
    methods: {
      waitUntilProductsAreLoaded() {
        return new Promise((resolve) => {
          if (!this.$store.state.productsLoaded) {
            console.log('LOADING PRODUCTS');
            this.$store.watch(
                (state) => state.productsLoaded,
                (value) => {
                  if (value === true) {
                    console.log('PRODUCTS ARE NOW LOADED');
                    resolve();
                  }
                }
            )
          } else {
            console.log('PRODUCTS ARE ALREADY LOADED');
            resolve();
          }
        })
      },
      fetchProduct(productId) {
        console.log(this.products);
        if (productId && this.products.length) {
          const matches = this.products.filter(product => product.id._cdata === productId);
          if (matches.length > 0) {
            this.product = matches.shift();
            this.productIsLoaded = true;
            console.log(this.product);
          } else {
            // 404
            alert('404');
          }
        } else {
          // 404
          alert('404');
        }
      },
      setIsMobile() {
        // @TODO implement the foundation utils that retrieve scss breakpoints in JS
        const smallBreakpoint = 800;
        this.isMobile = window.innerWidth < smallBreakpoint;
      },
      setQuantity(newQuantity) {
        this.quantity = newQuantity;
      },
      setSize(newSize) {
        this.selectedSize = newSize;
      },
      handleClickAddButton() {
        if (this.isMobile) {
          this.displaySizeQuantityModal = true;
        } else {
          this.addToCart();
        }
      },
      addToCart() {
        if (!this.displayLoader) {
          const product = {
            title: this.title,
            id: `${this.id}-${this.size}`,
            quantity: this.quantity,
            price: this.price,
            availableStock: this.availableStock,
          };

          // Show loader
          this.displayLoader = true;

          // Async method, check if product really can be added (ie: if still in stock)
          // Then will call adequate callback
          this.$store.dispatch('addProduct', product)
              .then(this.addToCartSuccess, this.addToCartFailure)
              .finally(() => {
                // If displayed, close the size quantity modal displayed on smaller devices
                this.displaySizeQuantityModal = false;
                // Hide spinner
                this.displayLoader = false;
              });
        }
      },
      addToCartSuccess() {
        // Open the confirmation modal
        this.displayAddConfirmationModal = true;
      },
      addToCartFailure() {
        this.displayErrorModal = true;
      },
    },
    components: {
      stars: Stars,
      heart: Heart,
      quantity: Quantity,
      sizes: Sizes,
      modal: Modal,
    },
  };
</script>