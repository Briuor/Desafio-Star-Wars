<template>
  <b-container>
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <img
          src="../assets/imgs/logo/logo.webp"
          width="130px"
          class="d-inline-block align-top"
          alt="Logo"
        />
      </b-navbar-brand>

      <b-navbar-toggle
        target="nav-collapse"
        class="bg-warning"
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Filmes</b-nav-item>
          <b-nav-item to="/people">Personagens</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff !important; /*marcado com !important para não ser sobreescrito pelo bootstrap*/
  font-size: 1.4em;
}
a:hover {
  color: yellow !important; /*marcado com !important para não ser sobreescrito pelo bootstrap*/
}
</style>
