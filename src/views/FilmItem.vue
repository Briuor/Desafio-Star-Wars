<template>
  <b-container class="d-flex justify-content-center">
    <!-- Loading spinner -->
    <LoadingSpinner v-if="loading" />
    <b-row v-else>
      <b-col cols="12">
        <b-card style="border: none" no-body class="overflow-hidden mb-3">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body class="text-center" :title="film.title">
                <b-card-text class="text-left">
                  <b>Episode: </b>{{ film.episode_id }}<br />
                  <b>Description: </b>{{ film.opening_crawl }}<br />
                  <b>Release Date: </b>{{ film.release_date }}<br />
                  <b>Director: </b>{{ film.director }}<br />
                  <b>Producer: </b>{{ film.producer }}<br />

                  <div>
                    <b>Characters: </b>
                    <a
                      href="#"
                      v-for="(character, index) in characters"
                      :key="index"
                      @click="openCharacterModal(index, $event)"
                    >
                      {{ character.name }},
                    </a>
                  </div>
                  <br />
                  <div>
                    <b>Star Ships: </b>
                    <a
                      href="#"
                      v-for="(starShip, index) in starShips"
                      :key="index"
                      @click="openStarShipModal(index, $event)"
                    >
                      {{ starShip.name }},
                    </a>
                  </div>
                  <br />
                  <div>
                    <b>Vehicles: </b>
                    <span v-for="(vehicle, index) in vehicles" :key="index">
                      {{ vehicle.name }},
                    </span>
                    <br />
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <CharacterModal
      ref="characterModal"
      :characterSelected="characterSelected"
    />
    <StarShipModal ref="starShipModal" :starShipSelected="starShipSelected" />
  </b-container>
</template>

<script>
import axios from "axios";
import CharacterModal from "../components/CharacterModal";
import StarShipModal from "../components/StarShipModal";
import LoadingSpinner from "../components/LoadingSpinner";

export default {
  name: "filmItem",
  components: {
    CharacterModal,
    StarShipModal,
    LoadingSpinner
  },
  data() {
    return {
      film: null,
      characters: [],
      starShips: [],
      vehicles: [],
      loading: false,
      characterSelected: null,
      starShipSelected: null,
      img: localStorage.getItem("imagePath")
    };
  },
  created() {
    const filmId = this.$route.params.id;
    this.loading = true;
    axios.get(`https://swapi.dev/api/films/${filmId}`).then(res => {
      this.film = res.data;
      window.console.log(this.film);
      this.getCharacters();
      this.getStarShips();
      this.getVehicles();
      this.loading = false;
    });
  },
  methods: {
    getCharacters() {
      this.film.characters.map(characterUrl => {
        axios.get(characterUrl).then(res => {
          const character = res.data;
          this.characters.push(character);
        });
      });
    },
    getStarShips() {
      this.film.starships.map(starShipUrl => {
        axios.get(starShipUrl).then(res => {
          const starShip = res.data;
          this.starShips.push(starShip);
        });
      });
    },
    getVehicles() {
      this.film.vehicles.map(vehiclesUrl => {
        axios.get(vehiclesUrl).then(res => {
          const vehicle = res.data;
          this.vehicles.push(vehicle);
          window.console.log(vehicle.name);
        });
      });
    },
    openCharacterModal(characterIndex, event) {
      event.preventDefault();
      this.characterSelected = this.characters[characterIndex];
      this.$refs.characterModal.showModal();
    },
    openStarShipModal(starShipIndex, event) {
      event.preventDefault();
      this.starShipSelected = this.starShips[starShipIndex];
      this.$refs.starShipModal.showModal();
    }
  }
};
</script>

<style scoped></style>
