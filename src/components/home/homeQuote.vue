<template>
  <div id="home-quote" class="p-md-5" :style="cssProps">
    <blockquote class="blockquote text-center text-white p-md-5 p-3">
      <p class="display-4">
        <em>"Uma vez olímpica, Sempre Olímpica."</em>
      </p>
      <footer class="blockquote-footer text-white"></footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "homeQuote",
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@//assets/img/quote.jpg")})`,
        backgroundSize: "cover"
      }
    };
  }
};
</script>

<style>
@media (max-width: 767px) {
  #home-quote .display-4 {
    font-size: 2.5rem;
  }
}
</style>
