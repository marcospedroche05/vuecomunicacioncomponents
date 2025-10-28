<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <SelectMultipleVue/>
</template>

<script>
import SelectMultipleVue from './components/SelectMultiple.vue';
export default {
  name: "App",
  components: {
    SelectMultipleVue
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
