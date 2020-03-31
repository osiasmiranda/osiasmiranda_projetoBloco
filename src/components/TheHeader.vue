<template>
  <Header>
    <div
      class="modal fade"
      id="modalLogin"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modalLoginTitulo"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLoginTitulo">
              Entre na Sua Conta
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="loginEmail">Email</label>
                <input type="email" class="form-control" id="loginEmail" />
              </div>
              <div class="form-group">
                <label for="loginSenha">Senha</label>
                <input type="password" class="form-control" id="loginSenha" />
              </div>
              <button type="submit" class="btn btn-primary">
                Entrar na Conta
              </button>
              <small class="form-text text-muted"
                >Esqueceu a senha? <a href="#">Clique aqui</a>.</small
              >
            </form>
          </div>
        </div>
      </div>
    </div>

    <nav
      class="navbar navbar-expand-md navbar-light bg-light fixed-top py-3 box-shadow"
    >
      <router-link to="/" class="navbar-brand">
        <img src="../assets/img/grupoBarcelona.svg" alt="Grupo Barcelona" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Abrir Navegação"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Esportes" class="nav-link">Esportes</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              >Locais</a
            >
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <router-link to="/parqueOlimpico" class="dropdown-item"
                >🏊‍♂️ Parque Olímpico</router-link
              >
              <router-link to="/praiaCopacabana" class="dropdown-item"
                >🏖 Praia de Copacabana</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <router-link to="/Hospedagem" class="nav-link">
              Hospedagem
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Contato" class="nav-link">Contato</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              data-toggle="modal"
              data-target="#modalLogin"
            >
              Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/Inscricao" class="btn btn-outline-primary ml-md-2"
              >Inscreva-se</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </Header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style>
.box-shadow {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05), 0 4px 8px 0 rgba(0, 0, 0, 0.05);
}
</style>
