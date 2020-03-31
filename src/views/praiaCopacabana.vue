<template>
  <div class="praiaCopacabana">
    <section class="container" v-for="dado in dados" :key="dado.id">
      <div class="text-center my-5">
        <span class="h6 d-block">EXPLORE</span>
        <h1 class="display-4 text-primary">{{ dado.nome }}</h1>
      </div>

      <div class="row">
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto7.jpg"
            alt="foto7"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto6.jpg"
            alt="Foto 6"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto3.jpg"
            alt="Foto 3"
          />
        </div>
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto1.jpg"
            alt="Foto 1"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto4.jpg"
            alt="Foto 4"
          />
        </div>
        <div class="col-md">
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto2.jpg"
            alt="Foto 2"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto6.jpg"
            alt="Foto 6"
          />
          <img
            class="img-fluid mb-4"
            src="@//assets/img/local/praiaCopacabana/foto3.jpg"
            alt="Foto 3"
          />
        </div>
      </div>
    </section>

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
              <li>Praia de Copacabana,</li>
              <li>Copacabana, Rio de Janeiro - RJ</li>
              <li>CEP: 22775-000</li>
            </ul>
          </form>
        </div>

        <div class="col-lg embed-responsive embed-responsive-16by9">
          <h2 class="h6">VER NO MAPA</h2>
          <p>
            <iframe
              class="embed-responsive-item"
              style="border: 0;"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7347.219242235571!2d-43.17333592502184!3d-22.96459983992967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd554d0a19ba5%3A0x1a421df36e381a61!2sPraia%20do%20Leme!5e0!3m2!1spt-BR!2sbr!4v1581003382079!5m2!1spt-BR!2sbr"
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
  name: "praiaCopacabana",
  data() {
    return { dados: [] };
  },
  methods: {
    getLocais() {
      axios.get("../data/api/dado.json").then(response => {
        console.log(response);
        this.dados = response.data;
      });
    }
  },
  created() {
    this.getLocais();
  }
};
</script>

<style scoped>
.praiaCopacabana {
  padding-top: 80px;
}
</style>
