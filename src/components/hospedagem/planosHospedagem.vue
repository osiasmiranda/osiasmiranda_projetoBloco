<template>
  <div class="container">
    <div class=" my-5 text-center">
      <span class="h6 d-block">Pan Master Games Rio 2020</span>
      <h1 class="display-4 text-primary">Hospedagem</h1>
    </div>
    <div class="row">
      <div class="col-md mb-5">
        <div class="bg-light rounded p-4 box-shadow">
          <h2>Gold</h2>
          <ul class="lista-plano list-unstyled">
            <li>
              <span
                data-toggle="tooltip"
                data-placement="top"
                title="Isso mesmo, Transfer ida e volta incluso para o local de competição ."
                >→ Transfer ida e volta incluso</span
              >
            </li>
            <li>→ Parcelado em até 5 vezes</li>
            <li>→ Café da manhã incluso</li>
            <li>→ Wi-fi gratuito</li>
          </ul>
          <form>
            <div class="form-group">
              <select class="form-control bg-light" id="inputPreco">
                <option>Selecione um plano</option>
                <option>Superior Twin - R$ 260,69</option>
                <option>Superior King - R$ 283,19</option>
                <option>Superior Luxo - R$ 310,10</option>
              </select>
            </div>
          </form>
          <div class="row align-items-center mt-4">
            <div class="col">
              <router-link to="/Inscricao" class="btn btn-primary btn-lg"
                >Comprar Plano</router-link
              >
            </div>
            <div class="col">
              <span class="h4"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md mb-5">
        <div class="bg-light rounded p-4 box-shadow">
          <h2>Platinum <span class="badge badge-success">Novo</span></h2>
          <ul class="lista-plano list-unstyled">
            <li>→ Tudo do Plano Gold</li>
            <li>→ Tv a cabo</li>
            <li>→ Roupão de banho</li>
            <li>→ Parcelado em até 10 vezes</li>
          </ul>
          <form>
            <div class="form-group">
              <select class="form-control bg-light" id="inputPreco">
                <option>Selecione um plano</option>
                <option>Superior Twin - R$ 360,69</option>
                <option>Superior King - R$ 383,19</option>
                <option>Superior Luxo - R$ 410,10</option>
              </select>
            </div>
          </form>
          <div class="row align-items-center mt-4">
            <div class="col">
              <router-link
                to="/Inscricao"
                class="btn btn-primary btn-lg btn-block"
                >Comprar Plano</router-link
              >
            </div>
            <div class="col">
              <span class="h4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "planosHospedagem"
};
</script>

<style>
.lista-plano li + li {
  border-top: 1px solid rgba(0, 0, 0, 0.2);
}

.lista-plano li {
  padding: 1rem;
}
</style>
