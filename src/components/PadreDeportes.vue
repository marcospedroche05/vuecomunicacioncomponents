<template>
  <div>
    <h1>Padre deportes</h1>
    <ul>
      <li v-for="deporte in deportes" :key="deporte">
        <HijoDeportesVue :nombredeporte="deporte" />
      </li>
    </ul>
  </div>
</template>

<script>
import HijoDeportesVue from "./HijoDeportes.vue";

export default {
  name: "PadreDeportes",
  components: {
    HijoDeportesVue,
  },
  data() {
    return {
      deportes: ["Futbol", "Baloncesto", "Rugby", "Tenis"],
    };
  },
};
</script>

<style></style>
