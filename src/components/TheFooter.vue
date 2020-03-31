<template>
  <footer>
    <div class="bg-dark text-white mt-5">
      <div class="container py-4">
        <div class="row">
          <div class="col-md-3 col-6">
            <h4 class="h6">PÁGINAS</h4>
            <ul class="list-unstyled">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/Esportes">Esporte</router-link></li>
              <li>
                <router-link to="/Hospedagem">Hospedagem</router-link>
              </li>
              <li><router-link to="/Inscricao">Inscreva-se</router-link></li>
            </ul>
          </div>
          <div class="col-md-3 col-6">
            <h4 class="h6">LOCAIS</h4>
            <ul class="list-unstyled">
              <li>
                <router-link to="/parqueOlimpico">Parque Olímpico</router-link>
              </li>
              <li>
                <router-link to="/praiaCopacabana"
                  >Praia de Copacabana</router-link
                >
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h4 class="h6">DADOS DE CONTATO</h4>
            <ul class="list-unstyled text-secondary">
              <li>barcelona@barcelona.com.br</li>
              <li>92 9999-9999</li>
              <li>De Seg. à Sex. das 8h às 18h</li>
            </ul>
          </div>
          <div class="col-md-2">
            <h4 class="h6">REDES SOCIAIS</h4>
            <ul class="list-unstyled">
              <li>
                <a
                  class="btn btn-outline-secondary btn-sm btn-block mb-2"
                  href="#"
                  style="max-width: 140px"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  class="btn btn-outline-secondary btn-sm btn-block mb-2"
                  href="#"
                  style="max-width: 140px"
                  >Twitter</a
                >
              </li>
              <li>
                <a
                  class="btn btn-outline-secondary btn-sm btn-block mb-2"
                  href="#"
                  style="max-width: 140px"
                  >Youtube</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bg-primary text-center py-3">
        <img src="../assets/img/grupoBarcelona.svg" alt="Grupo Barcelona" />
        <p class="mb-0">© 2020. Direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
footer {
  top: 75px;
}
</style>
