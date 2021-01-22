<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-6 col-xs-12">
        <img
          :src="require(`@/assets${getProductById.imageUrl}`)"
          :alt="getProductById.productName"
          class="product-image"
        />
        <h1 class="mt-2">{{ getProductById.productName }}</h1>
        <p>{{ getProductById.productDescription }}</p>
      </div>
      <div class="col-md-6 col-xs-12">
        <h1>
          <span :class="getStock">{{
            getProductById.countInStock > 0 ? 'In Stock' : 'Out of Stock'
          }}</span>
        </h1>
        <h2 class="text-muted my-4">
          £{{ formatPrice(getProductById.price) }}
        </h2>
        <h1>
          <review
            :numReviews="getProductById.numReviews"
            :value="getProductById.productRating"
          ></review>
        </h1>
        <h4 class="my-4">
          <strong>Product Code: </strong>{{ getProductById.productCode }}
        </h4>
        <div>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <select
              name="quantity"
              id="quantity"
              class="form-control"
              v-model="selected"
            >
              <!-- condtionally render select options based on countInStock -->
              <option
                v-for="index in getProductById.countInStock"
                :key="index"
                :value="index"
                >{{ index }}</option
              >
            </select>
            <button
              data-toggle="modal"
              data-target="#addToCartModal"
              class="btn btn-block btn-outline-dark my-2"
              :disabled="getProductById.countInStock === 0"
              @click="addToCart(getProductById, selected)"
            >
              Add to Cart
            </button>
            <div
              class="modal fade"
              id="addToCartModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Product added to cart
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <!-- PRODUCT INFO -->
                    <div class="d-flex">
                      <img
                        :src="require(`@/assets${getProductById.imageUrl}`)"
                        :alt="getProductById.productName"
                        width="100"
                      />
                      <div class="d-flex flex-column">
                        <h5 class="mx-2">{{ getProductById.productCode }}</h5>
                        <h5 class="text-muted mx-2">
                          £{{ formatPrice(getProductById.price * selected) }}
                        </h5>
                        <h5 class="mx-2">
                          <strong>Qty:</strong> {{ selected }}
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Continue Shopping
                    </button>
                    <router-link
                      class="btn btn-primary"
                      data-dismiss="modal"
                      :to="{ name: 'Cart' }"
                    >
                      Go to Cart
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Review from '../Review'

export default {
  props: ['countInStock'],
  components: {
    Review,
  },
  data() {
    return {
      selected: 1,
    }
  },
  computed: {
    getProductById() {
      return this.$store.state.products.find(
        (p) => p._id == this.$route.params.id
      )
    },
    getStock() {
      return this.getProductById.countInStock
        ? 'badge badge-pill badge-success'
        : 'badge badge-pill badge-danger'
    },
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(2)
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    addToCart(product, qty) {
      this.$store.dispatch('addToCart', { product: product, qty: qty })
      localStorage.setItem('cart', JSON.stringify(this.$store.state.cart))
    },
  },
}
</script>

<style scoped>
.product-image {
  min-width: 100%;
  max-width: 100%;
}

p {
  line-height: 2;
}
</style>
