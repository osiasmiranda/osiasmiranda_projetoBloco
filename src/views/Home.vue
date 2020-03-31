<template>
  <div class="home">
    <carouselCidades />
    <dicasHome />
    <homeQuote />
    <perguntasFrequentes />
    <contatoButton />
  </div>
</template>

<script>
// @ is an alias to /src
import carouselCidades from "@/components/home/carouselCidades.vue";
import dicasHome from "@/components/home/dicasHome.vue";
import homeQuote from "@/components/home/homeQuote.vue";
import perguntasFrequentes from "@/components/home/perguntasFrequentes.vue";
import contatoButton from "@/components/home/contatoButton.vue";
export default {
  name: "Home",
  components: {
    carouselCidades,
    dicasHome,
    homeQuote,
    perguntasFrequentes,
    contatoButton
  }
};
</script>
<style></style>
