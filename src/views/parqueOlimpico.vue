<template>
  <div class="parqueOlimpico">
    <Div class="container" v-for="local in locais" :key="local.id">
      <div class="text-center my-5">
        <span class="h6 d-block">EXPLORE</span>
        <h1 class="display-4 text-primary">{{ local.nome }}</h1>
      </div>
      <div class="row">
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto7.jpg"
            alt="Foto 7"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto6.jpg"
            alt="Foto 6"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto5.jpg"
            alt="Foto 5"
          />
        </div>
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto-1.jpg"
            alt="Foto 0"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto4.jpg"
            alt="Foto 4"
          />
        </div>
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto2.jpg"
            alt="Foto 2"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto6.jpg"
            alt="Foto 6"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/parqueolimpico/foto3.jpg"
            alt="Foto 3"
          />
        </div>
      </div>
    </Div>
    <section class="container">
      <div class="text-center my-5">
        <span class="h6 d-block">CALENDÁRIO</span>
        <h1 class="display-4 text-primary">EVENTOS</h1>
      </div>
      <table class="table table-hover table-responsive-md">
        <thead>
          <tr>
            <th scope="col">Data</th>
            <th scope="col">Evento</th>
            <th scope="col">Local</th>
            <th scope="col">Ticket</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">04/09</th>
            <td>Ciclismo</td>
            <td>Parque Olímpico - Velódromo</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">07/09</th>
            <td>Judô</td>
            <td>Parque Olímpico - Arena Carioca 1</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">07/09</th>
            <td>Tiro com Arco e Flecha</td>
            <td>Parque Olímpico - Arena 3</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">08/09</th>
            <td>Tênis de mesa</td>
            <td>Parque Olímpico - Arena 3</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">13/09</th>
            <td>Volei de Quadra</td>
            <td>Parque Olímpico - Arena Carioca 2</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
          <tr>
            <th scope="row">13/09</th>
            <td>Basquete</td>
            <td>Parque Olímpico - Arena Carioca 1</td>
            <td>
              <a href="#" class="btn btn-outline-secondary btn-sm"
                >Comprar Ticket</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="container">
      <div class="my-5 text-center">
        <h1 class="display-4 text-primary">Como Chegar?</h1>
      </div>
      <div class="row">
        <div class="col-lg mb-5">
          <form class="bg-light rounded p-4 box-shadow" action="">
            <h4 class="h6">ENDEREÇO</h4>
            <ul class="list-unstyled text-secondary">
              <li>Av. Embaixador Abelardo Bueno,</li>
              <li>Barra da Tijuca, Rio de Janeiro - RJ</li>
              <li>CEP: 22775-039</li>
            </ul>
          </form>
        </div>

        <div class="col-lg embed-responsive embed-responsive-16by9">
          <h2 class="h6">VER NO MAPA</h2>
          <p>
            <iframe
              class="embed-responsive-item"
              style="border: 0;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.3204617024253!2d-43.39458918562304!3d-22.97524044609199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdbe5d938dfaf%3A0x5a69163000caa88a!2sVel%C3%B3dromo!5e0!3m2!1spt-BR!2sbr!4v1567553632441!5m2!1spt-BR!2sbr"
              width="730"
              height="300"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "parqueOlimpico",

  data() {
    return { locais: [] };
  },

  methods: {
    getLocais() {
      axios.get("../data/api/local.json").then(response => {
        console.log(response);
        this.locais = response.data;
      });
    }
  },
  created() {
    this.getLocais();
  }
};
</script>

<style>
.parqueOlimpico {
  padding-top: 80px;
}
</style>
