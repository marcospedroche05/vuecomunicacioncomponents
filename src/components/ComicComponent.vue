<template>
  <div>
    <h1>{{comic.titulo}}</h1>
    <button v-on:click="seleccionarFavorito">Seleccionar favorito</button><br/>
    <img :src="comic.imagen"/>
    <h4 :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000
    }">Year: {{comic.year}}</h4>
    <button v-on:click="deleteComic()">Eliminar KomiK</button>
  </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic", "index"],
    methods: {
        seleccionarFavorito(){
            this.$emit("obtenerfav", this.comic);
        },
        deleteComic(){
            this.$emit("deletecomic", this.index);
        }
    }
}
</script>

<style>
@import "../assets/css/comics.css";
</style>