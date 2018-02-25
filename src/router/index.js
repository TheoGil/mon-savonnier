import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import ProductIndex from '@/pages/product/Index';
import Product from '@/pages/product/Product';
import ProductReviews from '@/pages/product/Reviews';
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      component: Index,
      children: [
        {
          path: '',
          name: 'Admin',
          component: Products,
        },
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/product',
      component: ProductIndex,
      children: [
        {
          path: '',
          name: 'Product',
          component: Product,
        },
        {
          path: 'reviews',
          name: 'Reviews',
          component: ProductReviews,
        },
      ],
    },
  ],
  mode: 'history',
  // linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});
