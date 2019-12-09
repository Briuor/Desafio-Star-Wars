<template>
  <b-modal ref="my-modal" hide-footer title="Character">
    <div class="d-block text-left" v-if="characterSelected">
      <h3 class="text-center">{{ characterSelected.name }}</h3>
      <p><b>Ano de Nascimento: </b>{{ characterSelected.birth_year }}</p>
      <p><b>Gender: </b>{{ characterSelected.gender }}</p>
      <p><b>Cor dos olhos: </b>{{ characterSelected.eye_color }}</p>
      <p><b>Cor do cabelo: </b>{{ characterSelected.hair_color }}</p>
      <p><b>Height: </b>{{ characterSelected.height }}</p>
      <p><b>Weight: </b>{{ characterSelected.mass }}</p>
      <p><b>Cor da Pele: </b>{{ characterSelected.skin_color }}</p>
      <!-- <h3><b>Planeta:</b>{{ characterSelected.birth_year }}</h3>
        <h3><b>Cor da Pele:</b>{{ characterSelected.birth_year }}</h3> -->
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "characterModal",
  props: ["characterSelected"],
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
