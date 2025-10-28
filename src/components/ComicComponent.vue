<template>
  <div>
    <h1>{{comic.titulo}}</h1>
    <img :src="comic.imagen"/>
    <h4 :class="{
        rojo: comic.year <= 2000,
        verde: comic.year > 2000
    }">Year: {{comic.year}}</h4>
  </div>
</template>

<script>
export default {
    name: "ComicComponent",
    props: ["comic"]
}
</script>

<style>
@import "../assets/css/comics.css";
</style>