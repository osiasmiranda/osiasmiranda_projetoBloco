<template>
  <div class="container">
    <div class="my-5 text-center">
      <h1 class="display-4 text-primary">Como Chegar?</h1>
    </div>
    <div class="row">
      <div class="col-lg mb-5">
        <form class="bg-light rounded p-4 box-shadow" action="">
          <h4 class="h6">ENDEREÇO</h4>
          <ul class="list-unstyled text-secondary">
            <li>Av. Edgar Píres de Castro, 9415</li>
            <li>Restinga, Rio de Janeiro - RJ</li>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.1596256606103!2d-51.148232284781926!3d-30.17543384434228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199afb0571cc55%3A0xdd2e86eb38b9ce90!2sAv.%20Edgar%20P%C3%ADres%20de%20Castro%2C%209415%20-%20Restinga%2C%20Porto%20Alegre%20-%20RS%2C%2091785-199!5e0!3m2!1spt-BR!2sbr!4v1569446348362!5m2!1spt-BR!2sbr"
            width="730"
            height="300"
            frameborder="0"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "enderecoHospedagem"
};
</script>

<style></style>
