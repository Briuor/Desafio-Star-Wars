<template>
  <b-container>
    <b-row>
      <b-col md="6" lg="9">
        <h1 class="ml-4 mb-4 text-white">Personagens</h1>
      </b-col>
      <b-col md="6" lg="3" class="pt-3 text-white">
        <b-button @click="changePage('left')">Anterior</b-button> Page:
        {{ currentPage
        }}<b-button @click="changePage('right')">Próxima</b-button>
      </b-col>
    </b-row>

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
import axios from "axios";
export default {
  name: "people",
  components: {
    PeopleCard
  },
  data() {
    return {
      people: [],
      currentPage: 1
    };
  },
  created() {
    axios.get("https://swapi.co/api/people/?page=1").then(res => {
      this.people = res.data.results;
      this.getPlanetForEachPerson();
    });
    window.console.log("Asdasd");
  },
  methods: {
    changePage(direction) {
      if (direction === "left" && this.currentPage > 1) {
        this.currentPage--;
      } else if (direction === "right" && this.currentPage < 9) {
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
