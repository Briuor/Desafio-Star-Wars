<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="ml-4 mb-4 text-white">Filmes</h1>
        </b-col>
      </b-row>
      <!-- Loading spinner -->
      <LoadingSpinner v-if="loading" />

      <!-- Cards dos filmes -->
      <b-row v-else>
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
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
export default {
  name: "film",
  components: {
    FilmCard,
    LoadingSpinner
  },
  data() {
    return {
      films: [],
      loading: false
    };
  },
  created() {
    this.loading = true;
    axios.get("https://swapi.co/api/films").then(res => {
      this.films = res.data.results;
      this.loading = false;
    });
  }
};
</script>
