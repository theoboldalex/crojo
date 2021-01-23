<template>
  <div id="app">
    <card
      class="form-control stripe-card"
      :class="{ complete }"
      stripe="pk_test_51HO590GYlktjxbHUOf7o5N4EX85v3qYDORcc1GsVPNZ2EMgEvC2Vq7QyDvO77q54lZbqaW18sphLv7a2RkGi1Nv9004tuYgmOP"
      :options="stripeOptions"
      @change="complete = $event.complete"
    />
    <button
      class="btn btn-primary my-4 pay-with-stripe"
      @click="pay"
      :disabled="!complete"
    >
      Complete order and pay
    </button>
  </div>
</template>

<script>
// import { stripeKey, stripeOptions } from '../../../stripeConfig.js'
import { Card, createToken } from 'vue-stripe-elements-plus'

export default {
  data() {
    return {
      complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      },
    }
  },

  components: { Card },

  methods: {
    pay() {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then((data) => console.log(data.token))
    },
  },
}
</script>

<style>
.stripe-card {
  width: 100%;
}
.stripe-card.complete {
  border-color: green;
}
</style>
