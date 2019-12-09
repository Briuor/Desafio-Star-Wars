<template>
  <b-container class="d-flex justify-content-center">
    <b-card no-body class="overflow-hidden" v-if="film">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="img" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body class="text-center" :title="film.title">
            <b-card-text class="text-left">
              <b>Episódio: </b>{{ film.episode_id }}<br />
              <b>Descrição: </b>{{ film.opening_crawl }}<br />
              <b>Data: </b>{{ film.release_date }}<br />
              <b>Diretor: </b>{{ film.director }}<br />
              <b>Produtor: </b>{{ film.producer }}<br />

              <div>
                <b>Personagens: </b>
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
                <b>Naves: </b>
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
                <b>Veículos: </b>
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
// import { db } from "../db";

export default {
  name: "filmItem",
  components: {
    CharacterModal,
    StarShipModal
  },
  data() {
    return {
      film: null,
      characters: [],
      starShips: [],
      vehicles: [],
      loading: true,
      characterSelected: null,
      starShipSelected: null,
      img: localStorage.getItem("imagePath")
    };
  },
  //   firestore: {
  //     film: dbcharacters
  //       .collection("films")
  //       .doc("W1lQ8TIehgqaWfk69f8k")
  //       .get()
  //       .then(res => res.data)
  //   },
  created() {
    const filmId = this.$route.params.id;

    axios.get(`https://swapi.co/api/films/${filmId}`).then(res => {
      this.film = res.data;
      window.console.log(this.film);
      this.getCharacters();
      this.getStarShips();
      this.getVehicles();
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
