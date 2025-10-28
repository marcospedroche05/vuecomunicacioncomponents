<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <SelectMultipleVue/> -->
  <EjemploCheckboxVue/>

</template>

<script>
import EjemploCheckboxVue from './components/EjemploCheckbox.vue';
// import SelectMultipleVue from './components/SelectMultiple.vue';
export default {
  name: "App",
  components: {
    // SelectMultipleVue
    EjemploCheckboxVue
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
