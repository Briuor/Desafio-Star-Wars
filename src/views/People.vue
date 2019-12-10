<template>
  <b-container>
    <b-row>
      <b-col sm="12" md="6" lg="8" xl="9">
        <h1 class="ml-3 mb-4 text-white">Personagens</h1>
      </b-col>
      <!-- Paginacao -->
      <b-col sm="12" md="6" lg="4" xl="3" class="pt-3 text-white">
        <b-button variant="warning" @click="changePage('left')"
          >Anterior</b-button
        >
        <span class="d-inline-block pl-1 pr-1"> Página: {{ currentPage }}</span
        ><b-button variant="warning" @click="changePage('right')"
          >Próxima</b-button
        >
      </b-col>
    </b-row>

    <!-- Loading spinner -->
    <LoadingSpinner v-if="loading" />

    <b-row v-if="people">
      <b-col
        lg="3"
        md="4"
        sm="6"
        v-for="(person, index) in people"
        :key="index"
      >
        <PeopleCard :person="person" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Vue from "vue";
import PeopleCard from "../components/PeopleCard";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
export default {
  name: "people",
  components: {
    PeopleCard,
    LoadingSpinner
  },
  data() {
    return {
      people: [],
      currentPage: 1,
      loading: false
    };
  },
  created() {
    this.loading = true;
    axios.get("https://swapi.co/api/people/?page=1").then(res => {
      this.people = res.data.results;
      this.getPlanetForEachPerson();
      this.loading = false;
    });
  },
  methods: {
    changePage(direction) {
      if (direction === "left" && this.currentPage > 1) {
        this.currentPage--;
      }
      // São 87 personagens, sendo que cada página tem 10 personagens o número máximo de páginas é 9
      else if (direction === "right" && this.currentPage < 9) {
        this.currentPage++;
      } else {
        return;
      }
      axios
        .get(`https://swapi.co/api/people/?page=${this.currentPage}`)
        .then(res => {
          this.people = res.data.results;
          this.getPlanetForEachPerson();
        });
    },
    getPlanetForEachPerson() {
      this.people.map((person, index) => {
        axios.get(person.homeworld).then(res => {
          // Vue.set é necessário para atribuir dinamicamente a
          // propriedade planet em cada elemento de people
          Vue.set(this.people[index], "planet", res.data.name);
        });
      });
    }
  }
};
</script>
