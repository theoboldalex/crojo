import Vue from 'vue'
import VueRouter from 'vue-router'
import CardGrid from './components/layout/CardGrid'
import About from './components/screens/About'
import Cart from './components/screens/Cart'
import Product from './components/screens/Product'
import Checkout from './components/screens/Checkout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: CardGrid,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
    {
      path: '/products/:id',
      name: 'Product',
      component: Product,
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout,
    },
  ],
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  },
})

export default router
