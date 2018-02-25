<!-- ./src/pages/Cart.vue -->
<template>
  <div class="cart">
    <div v-if="count > 0">
      <!-- PRODUCT LISTING -->
      <ul class="cart-product-listing">
        <li v-for="product in products">
          <product
            :id="product.id"
            :title="product.title"
            :price="product.price"
            :quantity="product.quantity"
            :availableStock="product.availableStock"
            :size="product.size"
          />
        </li>
      </ul>

      <!-- CART OVERVIEW -->
      <div class="cart-review-container">
        <div class="row column">
          <div class="cart-review">
            <div class="cart-review-line">
              <div class="cart-review-key">Item Total</div>
              <div class="cart-review-value">{{ 15 | currency }}</div>
            </div>
            <div class="cart-review-line">
              <div class="cart-review-key">Estimated Shipping</div>
              <div class="cart-review-value">{{ 7 | currency }}</div>
            </div>
            <div class="cart-review-line bold">
              <div class="cart-review-key">Order Total</div>
              <div class="cart-review-value">{{ subTotal | currency }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- GO TO CHECKOUT -->
      <div class="actions-container text-right">
        <div class="row column">
          <a href="#" class="button large">Checkout</a>
        </div>
      </div>
    </div>

    <div class="row column empty-cart" v-if="count === 0">
      <div class="callout">
        <p class="h3">Panier vide...</p>
        <p>Votre panier est actuellement vide! Sélectionnez quelques produits avant de continuer.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import CartItem from '../components/CartItem';

  export default {
    name: 'cart',
    computed: {
      // Using speard operator in case we want to add our own custom computed properties
      ...mapGetters({
        products: 'getCartContent',
        subTotal: 'getSubTotal',
        count: 'getProductsCount',
      }),
    },
    components: {
      product: CartItem,
    },
  };
</script>