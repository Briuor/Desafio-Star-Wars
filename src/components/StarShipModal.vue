<template>
  <b-modal ref="my-modal" hide-footer title="StarShip">
    <div class="d-block text-left" v-if="starShipSelected">
      <h3 class="text-center">{{ starShipSelected.name }}</h3>
      <p><b>Modelo: </b>{{ starShipSelected.model }}</p>
      <p><b>Classe: </b>{{ starShipSelected.starship_class }}</p>
      <p><b>Custo </b>{{ starShipSelected.cost_in_credits }}</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "starShipModal",
  props: ["starShipSelected"],
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    }
  }
};
</script>
