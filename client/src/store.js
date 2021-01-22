import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: null,
    cart: [],
  },
  mutations: {
    setProducts: (state, payload) => (state.products = payload),
    addToCart: (state, payload) => state.cart.push(payload),
    removeItemFromCart: (state, payload) => {
      let index = state.cart.findIndex(
        (el) => el.product.id === payload.product.id
      )
      state.cart.splice(index, 1)
    },
    clearCart: (state) => (state.cart = []),
  },
  actions: {
    setProducts: (context, payload) => context.commit('setProducts', payload),
    addToCart: (context, payload) =>
      context.commit('addToCart', {
        product: payload.product,
        qty: payload.qty,
      }),
    removeItemFromCart: (context, payload) =>
      context.commit('removeItemFromCart', payload),
    clearCart: (context) => context.commit('clearCart'),
  },
  getters: {
    getProducts: (state) => state.products,
    getCart: (state) => state.cart,
  },
})

export default store
