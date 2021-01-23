<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-md-8">
        <router-link :to="{ name: 'Cart' }">
          Back to cart
        </router-link>
        <hr />
        <h4>Shipping Details</h4>

        <form @submit.prevent>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="name">Name:</label>
                <input
                  type="text"
                  v-model="customer.name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="email">Email:</label>
                <input
                  type="email"
                  v-model="customer.email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="phone">Contact Number:</label>
                <input
                  type="text"
                  v-model="customer.phone"
                  class="form-control"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="street">Street Address:</label>
                <input
                  type="text"
                  v-model="customer.street"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="city">City:</label>
                <input
                  type="text"
                  v-model="customer.city"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="postcode">Post Code:</label>
                <input
                  type="text"
                  v-model="customer.postcode"
                  class="form-control"
                />
              </div>
            </div>
          </div>
        </form>
        <hr />
        <h4>Payment Details</h4>
        <payment />
      </div>
      <div class="col-md-4">
        <h4>Order Summary</h4>
        <hr />
        <div v-for="(item, index) in getCart" :key="index">
          <p>{{ item.product.productCode }}</p>
          <p class="text-muted">
            £{{ formatPrice(item.product.price * item.qty) }}
          </p>
          <p><strong>Qty: </strong>{{ item.qty }}</p>
          <hr />
        </div>
        <h5><strong>Total: </strong>£{{ formatPrice(calculateTotal) }}</h5>
        <!-- <button class="btn btn-dark mt-2">Checkout and Pay</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Payment from '../layout/Payment.vue'

export default {
  components: {
    Payment,
  },
  data() {
    return {
      customer: {},
    }
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
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
  mounted() {
    this.$store.state.cart = JSON.parse(localStorage.getItem('cart'))
  },
}
</script>
