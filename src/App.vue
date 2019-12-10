<template>
  <div id="app" style="">
    <Navbar msg="Welcome to Your Vue.js App" />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
body {
  background-color: #343a40 !important;
}
</style>
