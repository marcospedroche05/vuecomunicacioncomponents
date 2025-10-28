<template>
  <div>
    <h1 style="color: orange">{{ nombredeporte }}</h1>
    <button @click="seleccionarFavorito()">Seleccionar favorito</button>
  </div>
</template>

<script>
export default {
  name: "HijoDeportes",
  props: ["nombredeporte"],
  methods: {
    seleccionarFavorito(){
      this.$emit("seleccionaFav", this.nombredeporte);
    }
  }
};
</script>

<style></style>
