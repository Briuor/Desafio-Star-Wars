<template>
  <b-card
    border-variant="white"
    :header="person.name"
    header-bg-variant="dark"
    header-text-variant="white"
    align="center"
    class="mb-4"
  >
    <b-card-text class="text-left"
      ><b-list-group>
        <b-list-group-item
          ><b>Age: </b> {{ person.birth_year }}</b-list-group-item
        >
        <b-list-group-item
          ><b>Gender: </b> {{ person.gender }}</b-list-group-item
        >
        <b-list-group-item
          ><b>Planet: </b> {{ person.planet }}</b-list-group-item
        >
        <b-list-group-item
          ><b>Height: </b> {{ person.height }}</b-list-group-item
        >
        <b-list-group-item><b>Weight: </b>{{ person.mass }}</b-list-group-item>
      </b-list-group>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "peopleCard",
  props: ["person"]
};
</script>

<style scoped></style>
