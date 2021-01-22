<template>
  <div class="container mt-4">
    <div v-if="!$store.state.cart.length">
      <h5>You have no items in your cart</h5>
    </div>
    <div v-for="(product, index) in getCart" :key="product.id">
      <hr />
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center product">
          <img
            :src="require(`@/assets${product.product.imageUrl}`)"
            :alt="product.product.productCode"
            width="100"
          />
          <h5 class="px-3">{{ product.product.productName }}</h5>
          <h5 class="px-3">
            <strong>Unit price:</strong> £{{
              formatPrice(product.product.price)
            }}
          </h5>
          <h5 class="px-3"><strong>Qty:</strong> {{ product.qty }}</h5>
        </div>
        <div>
          <button
            class="btn btn-sm"
            @click="removeItemFromCart(getCart[index])"
          >
            <i class="fas fa-trash-alt px-3"></i>
          </button>
        </div>
      </div>
    </div>
    <div>
      <hr />
      <button
        class="btn btn-sm btn-outline-dark mb-3"
        @click="clearCart"
        v-if="getCart.length"
      >
        Clear cart
      </button>
      <h1 class="py-2" v-if="getCart.length">
        Total:
        <span class="text-muted">£{{ formatPrice(calculateTotal) }}</span>
      </h1>
      <router-link v-if="getCart.length" :to="{ name: 'Checkout' }">
        <button class="btn btn-lg btn-dark">Proceed to Checkout</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      totalPrice: 0.0,
    }
  },
  computed: {
    ...mapGetters(['getCart']),
    calculateTotal() {
      if (this.$store.state.cart.length) {
        let temp = []
        this.$store.state.cart.map((product) => {
          temp.push(product.product.price * product.qty)
        })
        return temp.reduce((a, b) => a + b)
      }
      return 0.0
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    removeItemFromCart(product) {
      this.$store.dispatch('removeItemFromCart', product)
      localStorage.setItem('cart', JSON.stringify(this.getCart))
    },
    clearCart() {
      this.$store.dispatch('clearCart')
      localStorage.setItem('cart', JSON.stringify(this.getCart))
    },
  },
  mounted() {
    this.$store.state.cart = JSON.parse(localStorage.getItem('cart'))
  },
}
</script>

<style scoped>
@media (max-width: 800px) {
  .product {
    flex-direction: column;
  }
}
</style>
