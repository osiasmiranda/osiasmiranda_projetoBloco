<template>
  <div class="container-fluid">
    <div class="row bg-dark text-white">
      <div class="col-lg-7 p-0">
        <div id="carouselCidades" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li
              data-target="#carouselCidades"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselCidades" data-slide-to="1"></li>
            <li data-target="#carouselCidades" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="@//assets/img/carousel/droneRIo.jpg"
                alt="Rio de Janeiro"
              />
              <div class="carousel-caption">
                <h3 class="display-4">Rio de Janeiro</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@//assets/img/carousel/Parque_Olímpico_Rio.jpg"
                alt="Parque_Olímpico_Rio"
              />
              <div class="carousel-caption">
                <h3 class="display-4">Parque Olímpico</h3>
              </div>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@//assets/img/carousel/Centro_Olímpico_de_Deodoro.jpg"
                alt="Centro_Olímpico_de_Deodoro"
              />
              <div class="carousel-caption">
                <h3 class="display-4">Centro Olímpico de Deodoro</h3>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselCidades"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Anterior</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselCidades"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Próximo</span>
          </a>
        </div>
      </div>

      <div class="col-lg-5 p-4 align-self-center">
        <h1 class="display-5">
          Seja um campeão competindo nas arenas olímpicas
        </h1>
        <p class="lead">24 esportes! 49 modalidades! 25 instalações!</p>
        <form action="">
          <div class="input-group input-group-lg">
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
            />
            <span class="input-group-append">
              <button class="btn btn-primary" type="button">
                Inscreva-se
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carouselCidades"
};
</script>

<style></style>
