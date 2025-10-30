<template>
  <div>
    <h1 v-if="numero">Numero doble de {{numero}} = {{numero * 2}}</h1>
    <h1 v-else>No ha pasado ningún numero</h1>
  </div>
</template>

<script>
export default {
    name: "NumeroDoble",
    data(){
        return {
            numero: 0
        }
    },
    mounted(){
        this.numero = parseInt(this.$route.params.numero);
    },
    watch: {
        '$route.params.numero' (nextVal, oldVal){
            this.numero = this.$route.params.numero;
            console.log(nextVal, oldVal);
        }
    }
}
</script>

<style>

</style>