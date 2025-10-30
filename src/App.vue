<template>
  <!-- <SelectMultipleVue/> -->
  <!-- <EjemploCheckboxVue/> -->
  <MenuComponentVue/>
</template>

<script>
// import EjemploCheckboxVue from './components/EjemploCheckbox.vue';
import MenuComponentVue from './components/MenuComponent.vue';
// import SelectMultipleVue from './components/SelectMultiple.vue';
export default {
  name: "App",
  components: {
    // SelectMultipleVue
    // EjemploCheckboxVue,
    MenuComponentVue
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
  /* margin-top: 60px; */
}
</style>
