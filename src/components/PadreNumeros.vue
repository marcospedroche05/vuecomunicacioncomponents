<template>
  <div>
    <h1>Numeros Padre</h1>
    <h3 style="color: red; font-weigth: bold">La suma es: {{suma}}</h3>
    <button @click="nuevoAleatorio">Nuevo Número</button>
    <div>
        <HijoNumeroVue  v-for="num in numeros" :key="num" :numerohijo="num" v-on:seleccionaNum="seleccionaNum"/>
    </div>
  </div>
</template>

<script>
import HijoNumeroVue from './HijoNumero.vue';

export default {
    name: "PadreNumeros",
    data(){
        return {
            suma: 0,
            numeros: []
        }
    },
    mounted(){
        this.generarAleatorios();
    },
    methods: {
        nuevoAleatorio(){
            var random = parseInt(Math.random() * 100) + 1;
            this.numeros.push(random);
        },
        generarAleatorios(){
            for (let i = 1; i <= 3; i++) {
                var random = parseInt(Math.random() * 100) + 1;
                this.numeros.push(random); 
            }
        },
        seleccionaNum(num){
            this.suma += num;
        }   
    }, components: {
        HijoNumeroVue
    }
}
</script>

<style>

</style>