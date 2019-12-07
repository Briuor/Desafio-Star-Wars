import Vue from "vue";
import VueRouter from "vue-router";
import Film from "../views/Film.vue";
import FilmItem from "../views/FilmItem.vue";
import People from "../views/People.vue";

Vue.use(VueRouter);

const routes = [
  // Rota da lista de filmes
  {
    path: "/",
    name: "film",
    component: Film
  },
  // Rota de detalhes dos filmes
  {
    path: "/film/:id",
    name: "filmItem",
    component: FilmItem
  },
  // Rota da lista de personagens
  {
    path: "/people",
    name: "people",
    component: People
  }
];

const router = new VueRouter({
  routes
});

export default router;
