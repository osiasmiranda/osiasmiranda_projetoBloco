<template>
  <div class="Contato">
    <div class="container">
      <div class="my-5 text-center">
        <span class="h6 d-block">POSSUI ALGUMA DÚVIDA?</span>
        <h1 class="display-4 text-primary">Fale Conosco</h1>
      </div>
      <div class="row">
        <div class="col-lg mb-5">
          <form class="bg-light rounded p-4 box-shadow" action="">
            <div class="form-group">
              <label for="clienteNome">Nome</label>
              <input type="text" class="form-control" id="clienteNome" />
            </div>
            <div class="form-group">
              <label for="clienteEmail">Email</label>
              <input type="email" class="form-control" id="clienteEmail" />
            </div>
            <div class="form-group">
              <label for="clienteMensagem">Mensagem</label>
              <textarea
                id="clienteMensagem"
                class="form-control"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">
              Enviar Mensagem
            </button>
          </form>
        </div>
        <div class="col-lg embed-responsive embed-responsive-16by9">
          <h2 class="h6">NOSSO ENDEREÇO</h2>
          <p>
            <iframe
              class="embed-responsive-item"
              style="border: 0;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.2907168171655!2d-43.21993493562306!3d-22.976334746131386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd5a5d8812823%3A0xa3fe87e9a2b0037b!2sAv.%20Borges%20de%20Medeiros%2C%201424%20-%20Lagoa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022430-042!5e0!3m2!1spt-BR!2sbr!4v1567552931861!5m2!1spt-BR!2sbr"
              width="730"
              height="300"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </p>
        </div>
        <div class="container">
          <h2 class="h6">DADOS DE CONTATO</h2>
          <ul class="list-unstyled text-secondary">
            <li>barcelona@barcelona.com.br</li>
            <li>92 99999-9999</li>
            <li>De Seg. à Sex. das 8h às 18h</li>
          </ul>

          <h2 class="h6">REDES SOCIAIS</h2>
          <ul class="list-unstyled" style="max-width: 260px">
            <li>
              <a
                class="btn btn-outline-secondary btn-sm btn-block mb-2"
                href="#"
                >Facebook</a
              >
            </li>
            <li>
              <a
                class="btn btn-outline-secondary btn-sm btn-block mb-2"
                href="#"
                >Twitter</a
              >
            </li>
            <li>
              <a
                class="btn btn-outline-secondary btn-sm btn-block mb-2"
                href="#"
                >Youtube</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <perguntasFrequentes />
  </div>
</template>

<script>
import perguntasFrequentes from "@/components/home/perguntasFrequentes.vue";
export default {
  name: "Contato",
  components: {
    perguntasFrequentes
  }
};
</script>

<style>
.Contato {
  padding-top: 75px;
}
</style>
