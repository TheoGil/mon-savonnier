import Vue from 'vue';
import Vuex from 'vuex';

import { saveCartToLocalStorage } from '../helpers';
import cart from './modules/shopping-cart';
import * as getters from './getters';
import { fetchAllProducts } from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  modules: {
    cart,
  },
  getters,
  mutations: {
    fetchAllProducts: (state, products) => {
      console.log('yeaaaaaaah');
      state.products = products;
      console.log(state.products);
    },
    fetchCartContent: (state, products) => {
      state.cart.products = products;
    },
    addProduct: (state, product) => {
      state.cart.products.push(product);
      saveCartToLocalStorage(state.cart.products);
    },
    updateProductQuantity: (state, data) => {
      const productIndex = state.cart.products.findIndex(product => product.id === data.productId);
      if (productIndex > -1) {
        state.cart.products[productIndex].quantity = data.quantity;
        saveCartToLocalStorage(state.cart.products);
      }
    },
    removeFromCart: (state, id) => {
      const productIndex = state.cart.products.findIndex(product => product.id === id);
      if (productIndex > -1) {
        state.cart.products.splice(productIndex, 1);
        saveCartToLocalStorage(state.cart.products);
      }
    },
  },
  actions: {
    // Here I'm using a setTimeout to mimick a call to the server.
    // Ultimately, we should make an ajax request to check for product availability
    // before adding it to the cart.
    addProduct: ({ commit }, product) => new Promise((resolve, reject) => {
      setTimeout(() => {
        // canAddToCart should come from the server
        const canAddToCart = Math.random() >= 0.25;
        if (canAddToCart) {
          commit('addProduct', product);
          resolve();
        } else {
          reject();
        }
      }, Math.random() * 3000);
    }),
    updateProductQuantity: ({ commit }, data) => new Promise((resolve, reject) => {
      setTimeout(() => {
          // Ask server is data.quantity X data.productId are available
          // const stockIsAvailable = Math.random() >= 0.25;
        const stockIsAvailable = true;
        if (stockIsAvailable) {
          commit('updateProductQuantity', data);
          resolve();
        } else {
          reject();
        }
      }, Math.random() * 1000);
    }),
    fetchCartContent: ({ commit }) => {
      let products = [];
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        products = JSON.parse(savedProducts);
      }
      commit('fetchCartContent', products);
    },
    fetchAllProducts: ({ commit }) => new Promise((resolve) => {
      const products = {};
      fetchAllProducts()
        .then((data) => {
          // reformat products as an object like so:
          // { id: product, ... }
          data.forEach((product) => {
            products[product.data.id._cdata] = product.data;
          });
          commit('fetchAllProducts', products);
          resolve();
        });
    }),
  },
});
