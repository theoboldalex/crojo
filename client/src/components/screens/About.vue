<template>
  <div class="container">
    <div class="mb-5">
      <h1 class="display-4 py-4 text-center">About Us</h1>
      <div class="about-text">
        <p class="text-justify">
          Here at CroJo we pride ourselves on providing a curated selection of
          premium quality knitting and crochet yarns and top class customer
          service.
        </p>
        <p class="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, eius
          perspiciatis labore earum dicta consequuntur suscipit nulla quae optio
          voluptate! Numquam repudiandae placeat nihil est dolore dolorem harum,
          perferendis consequuntur in nam voluptatibus quo, eveniet ex ducimus
          distinctio omnis. Beatae fuga, doloremque et laboriosam odit nobis
          sunt eum enim molestias quos quia aspernatur temporibus harum
          possimus, ex hic consectetur quibusdam officiis incidunt unde
          doloribus at dolores iure animi? Illum alias vero itaque neque
          accusantium, fuga molestias minima, animi cum in consectetur officia?
          Itaque esse, ut, quas dolorem consectetur quam dolorum aliquam, quae
          iusto illo cupiditate perspiciatis nisi sint. Natus, nulla.
        </p>
      </div>
    </div>
    <hr />
    <div class="text-center py-4">
      <h1>The Team</h1>
      <div class="row py-4">
        <div class="col-md-4 py-3 text-center">
          <h4>Nigel - Director</h4>
          <img
            :src="require(`@/assets/images/nigel.jpg`)"
            alt="Nigel's headshot"
            class="team-picture"
          />
        </div>
        <div class="col-md-4 py-3 text-center">
          <h4>Isabel - HR</h4>
          <img
            :src="require(`@/assets/images/isabel.jpg`)"
            alt="Isabel's headshot"
            class="team-picture"
          />
        </div>
        <div class="col-md-4 py-3 text-center">
          <h4>Faye - Marketing</h4>
          <img
            :src="require(`@/assets/images/faye.jpg`)"
            alt="Faye's headshot"
            class="team-picture"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.team-picture {
  max-width: 300px;
  height: auto;
  border-radius: 50%;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 1000px) {
  .team-picture {
    max-width: 200px;
  }
}
</style>
