<template>
  <b-container class="d-flex justify-content-center">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="require('@/assets/imgs/films/anewhope.jpg')"
            class="rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body title="Horizontal Card">
            <b-card-text>
              {{ film }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </b-container>
</template>

<script>
import axios from "axios";
import { db } from "../db";

export default {
  name: "filmItem",
  data() {
    return {
      film: null
    };
  },
  firestore: {
    film: db
      .collection("films")
      .doc("W1lQ8TIehgqaWfk69f8k")
      .get()
      .then(res => res.data)
  },
  created() {
    const filmId = this.$route.params.id;

    window.console.log(this.film);
    axios.get(`https://swapi.co/api/films/${filmId}`).then(res => {
      //   this.film = res.data;
      window.console.log(res.data);
    });
  }
};
</script>

<style scoped></style>
