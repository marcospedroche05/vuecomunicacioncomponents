<template>
  <div>
    <h1>Ejemplo checkbox</h1>
    <form v-on:submit.prevent="generarNumeros()">
        <button>Generar Checkbox</button><br/>
        <div v-for="num in numeros" :key="num" style="display: inline">
            <label>{{num}}</label>
            <input type="checkbox" v-on:click="sumar" :value="num"/>
        </div>
    </form>
    <h2 style="color:blue">La suma seleccionada es {{suma}}</h2>
  </div>
</template>

<script>
export default {
    name: "EjemploCheckbox",
    data(){
        return{
            numeros: [],
            suma: 0
        }
    }, methods: {
        generarNumeros(){
            this.numeros = []
            for (let i = 1; i <= 10; i++) {
                this.numeros.push(parseInt(Math.random() *100 +1));
            }
        },
        sumar($event){
            if($event.target.checked)
                this.suma += parseInt($event.target.value); 
            else (
                this.suma -= parseInt($event.target.value)
            )  
        }   
    }
    
}
</script>

<style>

</style>