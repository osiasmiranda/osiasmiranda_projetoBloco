<template>
  <div class="Inscricao">
    <div class="container">
      <div class="my-5 text-center">
        <span class="h6 d-block">Pan Master Games Rio 2020</span>
        <h1 class="display-4 text-primary">INSCREVA-SE</h1>
      </div>
      <div class="row">
        <form class="col-lg-6" action="">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputNome">Nome</label>
              <input
                type="text"
                class="form-control"
                id="inputNome"
                placeholder="Nome completo"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCPF">CPF</label>
              <input
                type="text"
                class="form-control"
                id="inputCPF"
                placeholder="xxx.xxx.xxx-xx"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input
                type="email"
                class="form-control"
                id="inputEmail"
                placeholder="Seu email"
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputSenha">Senha</label>
              <input
                type="password"
                class="form-control"
                id="inputSenha"
                placeholder="Senha de acesso"
              />
            </div>
            <div class="form-group col-12">
              <label for="inputEndereco">Endereço</label>
              <input
                type="text"
                class="form-control"
                id="inputEndereco"
                placeholder="Número, nome da rua e bairro."
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputCidades">Cidade</label>
              <input type="text" class="form-control" id="inputCidades" />
            </div>
            <div class="form-group col-md-3 col-6">
              <label for="inputEstado">Estado</label>
              <select id="inputEstado" class="form-control">
                <option>Selecione o Estado</option>
                <option>Acre</option>
                <option>Amazonas</option>
                <option>Ceará</option>
                <option>Pará</option>
                <option>Paraná</option>
                <option>Rio de Janeiro</option>
                <option>São Paulo</option>
              </select>
            </div>
            <div class="form-group col-md-3 col-6">
              <label for="inputCep">Cep</label>
              <input
                type="text"
                class="form-control"
                id="inputCep"
                placeholder="xxxxx-xxx"
              />
            </div>
          </div>
          <div class="bg-light rounded box-shadow p-3 form-group">
            <h2 class="h6 text-primary">FORMA DE PAGAMENTO</h2>
            <nav class="nav btn-group mb-3" id="formaPagamento" role="tablist">
              <button
                type="button"
                class="btn btn-secondary active btn-sm"
                id="nav-cartao-tab"
                data-toggle="tab"
                href="#nav-cartao"
                role="tab"
                aria-controls="nav-cartao"
                aria-selected="true"
              >
                Cartão de Crédito
              </button>
              <button
                type="button"
                class="btn btn-secondary btn-sm"
                id="nav-boleto-tab"
                data-toggle="tab"
                href="#nav-boleto"
                role="tab"
                aria-controls="nav-boleto"
                aria-selected="false"
              >
                Boleto Bancário
              </button>
            </nav>
            <div class="tab-content" id="formaPagamentoConteudo">
              <div
                class="tab-pane fade show active"
                id="nav-cartao"
                role="tabpanel"
                aria-labelledby="nav-cartao-tab"
              >
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputNomeCartao">Nome no Cartão</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputNomeCartao"
                      placeholder="Nome impresso no cartão"
                    />
                  </div>
                  <div class="form-group col-md-3 col-6">
                    <label for="inputCidade">Mês</label>
                    <select id="inputCidade" class="form-control">
                      <option>Expira mês</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                  </div>
                  <div class="form-group col-md-3 col-6">
                    <label for="inputAno">Ano</label>
                    <select id="inputAno" class="form-control">
                      <option>Expira ano</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputNumeroCartao">Número do Cartão</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputNumeroCartao"
                      placeholder="5555 5555 5555 5555"
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputCodigo">Código de Segurança</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputCodigo"
                      placeholder="XXX"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-boleto"
                role="tabpanel"
                aria-labelledby="nav-boleto-tab"
              >
                <p class="lead">
                  Clique em contratar plano que enviaremos um boleto para o seu
                  e-mail.
                </p>
              </div>
            </div>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" />
              Concordo com os <a href="#">Termos e Condições</a>.
            </label>
          </div>

          <button type="submit" class="btn btn-primary btn-lg">
            Pagar inscrição
          </button>
        </form>

        <div class="col-lg-5 mx-auto order-first order-lg-1 mb-5">
          <h2 class="h6 text-primary">MODALIDADE ESCOLHIDA</h2>
          <div class="bg-light rounded p-4 box-shadow">
            <form>
              <div class="form-group">
                <label for="inputEsporte"> <h2>ESPORTE</h2> </label>
                <select class="form-control bg-light" id="inputEsporte">
                  <option selected>Selecione um esporte</option>
                  <option>Atletismo</option>
                  <option>Basquete</option>
                  <option>Canoagem</option>
                  <option>Ciclismo</option>
                  <option>Dança Esportiva</option>
                  <option>Flying Disc</option>
                  <option>Futebol</option>
                  <option>Golfe</option>
                  <option>Jiu-Jitso</option>
                  <option>Judô</option>
                  <option>Luta Olímpica</option>
                  <option>Natação</option>
                  <option>Orientação</option>
                  <option>Polo Aquático</option>
                  <option>Remo</option>
                  <option>Skate</option>
                  <option>Surf</option>
                  <option>Tênis</option>
                  <option>Tênis de mesa</option>
                  <option>Tiro com arco e flecha</option>
                  <option>Tiro Esportivo</option>
                  <option>Triathlon</option>
                  <option>Vela</option>
                  <option>Voleibol</option>
                </select>
              </div>
            </form>
            <div class="row mt-4">
              <div class="col">
                <span class="h4">R$ 470,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Inscricao"
};
</script>

<style></style>
