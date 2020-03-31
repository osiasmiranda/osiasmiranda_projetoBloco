import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Esportes from "../views/Esportes.vue";
import Hospedagem from "../views/Hospedagem.vue";
import Contato from "../views/Contato.vue";
import Inscricao from "../views/Inscricao.vue";
import parqueOlimpico from "../views/parqueOlimpico.vue";
import praiaCopacabana from "../views/praiaCopacabana.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Esportes",
    name: "Esportes",
    component: Esportes
  },
  {
    path: "/Hospedagem",
    name: "Hospedagens",
    component: Hospedagem
  },
  {
    path: "/Contato",
    name: "Contato",
    component: Contato
  },
  {
    path: "/Inscricao",
    name: "Inscricao",
    component: Inscricao
  },
  {
    path: "/parqueOlimpico",
    name: "parqueOlimpico",
    component: parqueOlimpico
  },
  {
    path: "/praiaCopacabana",
    name: "praiaCopacabana",
    component: praiaCopacabana
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

export default router;
