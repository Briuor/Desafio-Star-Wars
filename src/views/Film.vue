<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="ml-4 mb-4 text-white">Filmes</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          class="d-flex justify-content-center"
          xl="4"
          lg="6"
          sm="12"
          v-for="film in films"
          :key="film.episode_id"
        >
          <FilmCard :film="film" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import FilmCard from "../components/FilmCard";
import axios from "axios";
export default {
  name: "film",
  components: {
    FilmCard
  },
  data() {
    return {
      films: []
    };
  },
  // firestore: {
  //   film: db.collection("films")
  // },
  created() {
    axios.get("https://swapi.co/api/films").then(res => {
      this.films = res.data.results;
    });
  },
  methods: {
    getFilmImage(episode_id) {
      const imageFolderPath = "../assets/imgs/films/";
      switch (episode_id) {
        case 1:
          return imageFolderPath + "anewhope.jpg";
        case 2:
          return imageFolderPath + "anewhope.jpg";
        case 3:
          return imageFolderPath + "anewhope.jpg";
        case 4:
          return imageFolderPath + "anewhope.jpg";
        case 5:
          return imageFolderPath + "anewhope.jpg";
        case 6:
          return imageFolderPath + "anewhope.jpg";
        case 7:
          return imageFolderPath + "anewhope.jpg";
      }
    }
  }
};
</script>
