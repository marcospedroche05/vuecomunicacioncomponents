<template>
  <div>
    <h2 style="color: blue">Número hijo: {{numerohijo}}</h2>
    <button @click="seleccionaNumero">Sumar {{numerohijo}}</button>
  </div>
</template>

<script>
export default {
    name: "HijoNumero",
    props: ["numerohijo"],
    methods: {
        seleccionaNumero(){
            this.$emit("seleccionaNum", this.numerohijo)
        }
    }
}
</script>

<style>

</style>