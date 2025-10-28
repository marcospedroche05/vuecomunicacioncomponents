<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ComicsComponentVue/>
</template>

<script>
import ComicsComponentVue from './components/ComicsComponent.vue';

export default {
  name: "App",
  components: {
    ComicsComponentVue
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
