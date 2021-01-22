<template>
    <div className="rating mt-3">
      <span>
        <i :class="oneStar"></i>
      </span>
      <span>
        <i :class="twoStar"></i>
      </span>
      <span>
        <i :class="threeStar"></i>
      </span>
      <span>
        <i :class="fourStar"></i>
      </span>
      <span>
        <i :class="fiveStar"></i>
      </span>
      <span class="mx-2">{{ numReviews }} reviews</span>
    </div>
</template>

<script>
    export default {
        props: ['numReviews', 'value'],
        computed: {
            oneStar() {
                return this.value >= 1 ? "fas fa-star yellow" : this.value >= 0.5 ? "fas fa-star-half-alt yellow" : "far fa-star yellow"
            },
            twoStar() {
                return this.value >= 2 ? "fas fa-star yellow" : this.value >= 1.5 ? "fas fa-star-half-alt yellow" : "far fa-star yellow"
            },
            threeStar() {
                return this.value >= 3 ? "fas fa-star yellow" : this.value >= 2.5 ? "fas fa-star-half-alt yellow" : "far fa-star yellow"
            },
            fourStar() {
                return this.value >= 4 ? "fas fa-star yellow" : this.value >= 3.5 ? "fas fa-star-half-alt yellow" : "far fa-star yellow"
            },
            fiveStar() {
                return this.value >= 5 ? "fas fa-star yellow" : this.value >= 4.5 ? "fas fa-star-half-alt yellow" : "far fa-star yellow"
            },
        }
    }
</script>

<style scoped>
.yellow {
    color: #f8e825;
}
</style>
