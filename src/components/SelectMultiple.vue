<template>
  <div>
    <h1>Selección múltiple</h1>
    <form>
      <select multiple style="height: 110px" v-model="select">
        <option>Elemento 1</option>
        <option>Elemento 2</option>
        <option>Elemento 3</option>
        <option>Elemento 4</option>
        <option>Elemento 5</option>
        <option>Elemento 6</option>
      </select><br/><br/>
      <button v-on:click.prevent="mostrarSeleccionados()">
        Mostrar seleccionados
      </button>
    </form>
    <h3>{{mensaje}}</h3>
  </div>
</template>

<script>
export default {
  name: "SelectMultiple",
  data() {
    return {
        mensaje: "",
        select: [],
    };
  },
  methods: {
    mostrarSeleccionados() {
      this.mensaje = this.select.join(", ")
    },
  },
};
</script>

<style>
</style>