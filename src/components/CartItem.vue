<template>
    <div class="cart-product-item">
        <div class="row">
            <div class="columns small-4 large-2">
                <div class="thumbnail-outer">
                    <img
                            class="thumbnail lazy"
                            v-lazy="'/static/img/eponna.c42561e.jpg'"
                            :alt="title"
                    >
                </div>
            </div>
            <div class="columns small-8 large-10">
                <div class="header">
                    <div class="remove-from-cart" v-on:click="displayRemoveConfirmationModal = true">
                        <svg class="icon">
                            <use xlink:href="#icon-close"></use>
                        </svg>
                    </div>
                    <div class="product-info title">{{ title }}</div>
                    <div class="product-info secondary">Description courte ou sous-titre à définir</div>
                    <div class="product-info secondary size">{{ size }}</div>
                </div>
                <div class="form-control">
                    <quantity
                        :value="quantity"
                        :input-name="`${id}-quantity`"
                        :maxValue="availableStock"
                        :isDisabled="isDisabled"
                        v-on:setQuantity="updateQuantity"
                    />
                </div>
            </div>
        </div>
        <modal v-if="displayRemoveConfirmationModal" @close="displayRemoveConfirmationModal = false">
            <div slot="body">
                <div class="modal-section form-control">
                    <p>Êtes vous sur de vouloir supprimer <i>{{this.title}}</i> de votre panier?</p>
                </div>
                <div class="modal-actions">
                    <button class="button transparent" @click="displayRemoveConfirmationModal = false">
                        Conserver
                    </button>
                    <button class="button" @click="removeFromCart">
                        Retirer du panier
                    </button>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
  import Quantity from './Quantity';
  import Modal from './Modal';

  export default {
    name: 'CartItem',
    data() {
      return {
        isDisabled: false,
        displayRemoveConfirmationModal: false,
      };
    },
    props: ['id', 'title', 'price', 'quantity', 'size', 'availableStock'],
    methods: {
      updateQuantity(newQuantity) {
        const data = {
          productId: this.id,
          quantity: newQuantity,
        };
        console.log(data);
        // If we ADD more product, we check it's availability from server
        if (newQuantity > this.quantity) {
          this.isDisabled = true;
          this.$store.dispatch('updateProductQuantity', data).then(() => {
            this.isDisabled = false;
          }, () => {
            alert('Oups... Les stocks ne sont pas suffisant pour en commander autant...');
            this.isDisabled = false;
          });
        } else {
          // If decrement quantity, no questions aksed
          this.$store.commit('updateProductQuantity', data);
        }
      },
      removeFromCart() {
        this.displayRemoveConfirmationModal = false;
        this.$store.commit('removeFromCart', this.id);
      },
    },
    components: {
      quantity: Quantity,
      modal: Modal,
    },
  };
</script>