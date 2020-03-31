<template>
  <div class="Hospedagens">
    <planosHospedagem />
    <enderecoHospedagem />
  </div>
</template>

<script>
import planosHospedagem from "@/components/hospedagem/planosHospedagem.vue";
import enderecoHospedagem from "@/components/hospedagem/enderecoHospedagem.vue";

export default {
  name: "Hospedagens",
  components: {
    planosHospedagem,
    enderecoHospedagem
  }
};
</script>

<style scoped>
.hospedagens {
  padding-top: 100px;
}
</style>
