<template>
  <div>
    <h1>Padre deportes</h1>
    <h2 v-if="favorito" >Tu deporte favorito es <span style="color: orange">{{favorito}}</span></h2>
    <ul>
      <li v-for="deporte in deportes" :key="deporte">
        <HijoDeportesVue :nombredeporte="deporte" v-on:seleccionaFav="seleccionaFav"/>
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
      favorito: ""
    };
  },
  methods: {
    seleccionaFav(deporte){
      this.favorito = deporte;
    }
  }

};
</script>

<style></style>
