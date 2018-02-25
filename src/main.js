// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueLazyload from 'vue-lazyload';
import VueScrollTo from 'vue-scrollto';
import router from './router';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VeeValidate);
Vue.use(VueLazyload);
Vue.use(VueScrollTo);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
