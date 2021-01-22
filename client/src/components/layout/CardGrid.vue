<template>
  <div class="container mt-4">
    <banner />
    <guarantee class="text-muted" />
    <h1 class="display-4 text-center mb-4">Products</h1>
    <div class="card-grid">
      <div v-for="product in getProducts" :key="product._id">
        <div class="card">
          <router-link :to="{ path: `products/${product._id}` }" exact>
            <img
              :src="require(`@/assets${product.imageUrl}`)"
              :alt="product.productName"
              class="card-img-top"
            />
          </router-link>

          <div class="card-body">
            <router-link :to="{ path: `products/${product._id}` }" exact>
              <h4 class="card-title">
                {{ product.productName }}
              </h4>
            </router-link>
            <p class="card-text text-muted">
              £{{ formatPrice(product.price) }}
            </p>
            <span
              :class="
                product.countInStock
                  ? 'badge badge-pill badge-success my-2'
                  : 'badge badge-pill badge-danger my-2'
              "
              >{{
                product.countInStock > 0 ? 'In Stock' : 'Out of Stock'
              }}</span
            >
            <review
              :numReviews="product.numReviews"
              :value="product.productRating"
            ></review>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Review from '../Review.vue'
import Guarantee from '../Guarantee'
import Banner from '../Banner'

export default {
  components: { Review, Guarantee, Banner },
  computed: {
    ...mapGetters(['getProducts']),
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
  },
}
</script>

<style>
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

@media (max-width: 800px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
}
</style>
