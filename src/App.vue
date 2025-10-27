<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <PadreDeportesVue />
  <HijoDeportesVue />
</template>

<script>
import HijoDeportesVue from "./components/HijoDeportes.vue";
import PadreDeportesVue from "./components/PadreDeportes.vue";

export default {
  name: "App",
  components: {
    PadreDeportesVue,
    HijoDeportesVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
