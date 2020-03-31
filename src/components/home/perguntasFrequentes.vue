<template>
  <div class="container">
    <div class="my-5 text-center">
      <span class="h6 d-block">AINDA ESTÁ COM DÚVIDAS?</span>
      <h2 class="display-4 text-primary">Perguntas Frequentes</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-6" id="perguntasFrequentes" data-children=".pergunta">
        <div class="pergunta py-2">
          <a
            class="lead"
            data-toggle="collapse"
            data-parent="#perguntasFrequentes"
            href="#pergunta1"
            aria-expanded="true"
            aria-controls="pergunta1"
            >→ Quando ocorrerão os Jogos Pan-Americanos Masters Rio 2020?</a
          >
          <div id="pergunta1" class="collapse show" role="tabpanel">
            <p>
              Os Jogos Pan-Americanos Masters Rio 2020 serão disputados entre os
              dias 4 a 13 de setembro de 2020, na Cidade do Rio de Janeiro.
            </p>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div class="pergunta py-2">
          <a
            class="lead"
            data-toggle="collapse"
            data-parent="#perguntasFrequentes"
            href="#pergunta2"
            aria-expanded="true"
            aria-controls="pergunta2"
            >→ Onde serão realizadas as provas?</a
          >
          <div id="pergunta2" class="collapse" role="tabpanel">
            <p>
              As provas serão disputadas em 25 instalações, em sua maioria
              utilizadas nos Jogos Olímpicos Rio 2016, entre elas o Parque
              Olímpico, Parque Radical de Deodoro, Centro Olímpico de Tiro,
              Campo Olímpico de Golfe, Marina da Glória, Lagoa Rodrigo de
              Freitas, Riocentro, Praia de Copacabana, Parque Aquático Maria
              Lenk e o Parque Aquático Júlio Delamare.
            </p>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div class="pergunta py-2">
          <a
            class="lead"
            data-toggle="collapse"
            data-parent="#perguntasFrequentes"
            href="#pergunta3"
            aria-expanded="true"
            aria-controls="pergunta3"
            >→ Quem pode se inscrever?</a
          >
          <div id="pergunta3" class="collapse" role="tabpanel">
            <p>
              Os Jogos Pan-Americanos Masters Rio 2020 são abertos a
              participantes de todo o mundo que cumprirem os requisitos de idade
              mínima para os esportes em que irão competir e tenham capacidade
              física e técnica de disputar as modalidades presentes no programa.
              Para verificar se você atende os requisitos de cada esporte,
              acesse os regulamentos das competições.
            </p>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div class="pergunta py-2">
          <a
            class="lead"
            data-toggle="collapse"
            data-parent="#perguntasFrequentes"
            href="#pergunta4"
            aria-expanded="true"
            aria-controls="pergunta4"
            >→ Qual o valor da inscrição?</a
          >
          <div id="pergunta4" class="collapse" role="tabpanel">
            <p>
              O valor estabelecido para as inscrições é o de US$ 205, para
              estrangeiros e R$470 reais para brasileiros, podendo ser dividido
              em 4x de R$117,50, no cartão de crédito. Cada inscrição dá o
              direito ao participante de disputar dois esportes e cinco provas
              em cada um deles. Por exemplo: uma mesma pessoa pode optar por se
              inscrever para jogar Basquete nas modalidades 5×5 e 3×3 e disputar
              até cinco provas de Natação. A prova de corrida de rua será
              tratada como um evento à parte dentro do programa dos Jogos
              Pan-Americanos Masters Rio 2020 e sua inscrição terá um preço
              popular.
            </p>
          </div>
        </div>
        <div class="dropdown-divider"></div>
        <div class="pergunta py-2">
          <a
            class="lead"
            data-toggle="collapse"
            data-parent="#perguntasFrequentes"
            href="#pergunta5"
            aria-expanded="true"
            aria-controls="pergunta5"
            >→ Os locais de competições são acessíveis por transporte
            público?</a
          >
          <div id="pergunta5" class="collapse" role="tabpanel">
            <p>
              Sim, esta é uma marca importante dos Jogos Pan-Americanos Masters
              Rio 2020: todas as instalações são acessíveis por transporte
              público.
            </p>
          </div>
        </div>
        <div class="dropdown-divider"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "perguntasFrequentes",
  components: {}
};
</script>

<style></style>
