<template>
  <div id="app">
    <header>
      <navbar></navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <contact></contact>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
import Navbar from './components/layout/Navbar.vue'
import Contact from './components/layout/Contact'

export default {
  name: 'App',
  components: {
    Navbar,
    Contact,
  },
  computed: {
    ...mapGetters(['getProducts', 'getCart']),
  },
  async mounted() {
    const { data } = await axios.get(
      'https://enigmatic-stream-69683.herokuapp.com/api/v1/products'
    )
    await this.$store.dispatch('setProducts', data)
  },
  methods: {
    ...mapActions(['setProducts']),
  },
}
</script>

<style>
@import './assets/css/bootstrap.min.css';

main {
  min-height: 80vh;
}

p {
  line-height: 2;
}
</style>
