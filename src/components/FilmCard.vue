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
import anewhope from "../assets/imgs/films/anewhope.jpg";
import attackoftheclones from "../assets/imgs/films/attackoftheclones.jpeg";
import phantommenace from "../assets/imgs/films/phantommenace.jpeg";
import revengeofthesith from "../assets/imgs/films/revengeofthesith.jpeg";
import returnofthejedi from "../assets/imgs/films/returnofthejedi.jpeg";
import theempirestricksback from "../assets/imgs/films/theempirestricksback.jpeg";
import theforceawakens from "../assets/imgs/films/theforceawakens.jpeg";

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
          this.imagePath = theempirestricksback;
          break;
        case 6:
          this.imagePath = returnofthejedi;
          break;
        case 7:
          this.imagePath = theforceawakens;
          break;
      }
    },
    storeImage(event) {
      window.console.log(event.target.src);
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
  margin-top: -43.5%;
  color: white;
}
</style>
