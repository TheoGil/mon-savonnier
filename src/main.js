// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueLazyload from 'vue-lazyload';
import VueScrollTo from 'vue-scrollto';
import VueCurrencyFilter from 'vue-currency-filter';
import router from './router';
import store from './store';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueLazyload);
Vue.use(VueScrollTo);
Vue.use(VueCurrencyFilter, {
  symbol: '€',
  thousandsSeparator: ' ',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'back',
  symbolSpacing: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  template: '<App/>',
  components: { App },
});
