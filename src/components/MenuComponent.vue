<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link></li>
      <li><router-link to="/comics">Comics</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
      <li><router-link to="/doble">Doble sin alcohol</router-link></li>
      <li><router-link to="/doble/3">Doble de 3</router-link></li>
      <li><button @click="redirectHome">Volver a home</button></li>
    </ul>
  </div>
  <hr/>
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
  methods: {
    redirectHome(){
        this.$router.push("/");
    }
  }
};
</script>

<style>
ul#menu {
  display: flex;
  justify-content: space-around;
}
</style>