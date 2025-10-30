<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link></li>
      <li><router-link to="/comics">Comics</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
      <li><router-link to="/doble">Doble sin</router-link></li>
      <li><router-link to="/doble/3">Doble de 3</router-link></li>
    </ul>
  </div>
  <hr/>
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style>
ul#menu {
  display: flex;
  justify-content: space-around;
}
</style>