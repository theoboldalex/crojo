<template>
  <div class="my-4">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            :src="require(`@/assets/images/slide5.jpg`)"
            class="d-block w-100"
            alt="Coffee and Knitting"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`@/assets/images/slide2.jpg`)"
            class="d-block w-100"
            alt="Crotchet close up"
          />
        </div>
        <div class="carousel-item">
          <img
            :src="require(`@/assets/images/slide3.jpg`)"
            class="d-block w-100"
            alt="Amigurumi Mobile"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.carousel-inner {
  width: 100%;
  max-height: 600px !important;
  filter: brightness(0.8);
}
</style>
