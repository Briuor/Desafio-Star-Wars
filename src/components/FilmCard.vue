<template>
  <router-link :to="/films/ + filmId">
    <b-card
      @click="storeImage($event)"
      v-if="film"
      class="mb-5"
      border-variant="light"
      style="border: none; max-width: 340px; min-width: 350px"
      :img-src="imagePath"
      img-alt="Image"
      no-body
    >
      <b-card-body class="text-center overlay-image">
        <b-card-title>{{ film.title }}</b-card-title>

        <b-card-text>
          <b>Número do episódio:</b> {{ film.episode_id }}
          <br />
          <b>Diretor:</b> {{ film.director }} <br />
          <b>Data de Lançamento:</b>
          {{ film.release_date }}
        </b-card-text>
      </b-card-body>
    </b-card>
  </router-link>
</template>

<script>
// Importando imagem de cada filme
import anewhope from "../assets/imgs/films/anewhope.jpg";
import attackoftheclones from "../assets/imgs/films/attackoftheclones.jpg";
import phantommenace from "../assets/imgs/films/phantommenace.jpg";
import revengeofthesith from "../assets/imgs/films/revengeofthesith.jpg";
import returnofthejedi from "../assets/imgs/films/returnofthejedi.jpeg";
import theempirestrikesback from "../assets/imgs/films/theempirestrikesback.jpg";
import theforceawaken from "../assets/imgs/films/theforceawaken.jpg";

export default {
  name: "filmCard",
  components: {},
  props: ["film"],
  data() {
    return {
      imagePath: anewhope,
      filmId: 0
    };
  },
  created() {
    const filmUrlSplited = this.film.url.split("/");
    this.filmId = filmUrlSplited[5];
    this.getFilmImage(this.film.episode_id);
  },
  methods: {
    // atribui imagem de acordo com episode_id do filme
    getFilmImage(episode_id) {
      switch (episode_id) {
        case 1:
          this.imagePath = phantommenace;
          break;
        case 2:
          this.imagePath = attackoftheclones;
          break;
        case 3:
          this.imagePath = revengeofthesith;
          break;
        case 4:
          this.imagePath = anewhope;
          break;
        case 5:
          this.imagePath = theempirestrikesback;
          break;
        case 6:
          this.imagePath = returnofthejedi;
          break;
        case 7:
          this.imagePath = theforceawaken;
          break;
      }
    },
    storeImage(event) {
      // guarda path da imagem do card clicado no cache do navegador
      // para ser renderizada no componente "FilmItem"
      localStorage.setItem("imagePath", event.target.src);
    }
  }
};
</script>

<style scoped>
a,
a:hover {
  color: black;
  text-decoration: none;
}
.overlay-image {
  background: #000;
  opacity: 0.85;
  margin-top: -43.3%;
  color: white;
}
</style>
