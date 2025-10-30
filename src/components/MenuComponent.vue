<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link></li>
      <li><router-link to="/comics">Comics</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
      <li v-for="num in numeros" :key="num"><router-link :to="'/doble/' + num">Doble de {{num}}</router-link></li>
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
  },
  data() {
    return {
        numeros: [1, 2, 3, 4, 15]
    }
  }
};
</script>

<style>
/* Animated skully menu */
ul#menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 12px;
  padding: 12px 8px;
  background: linear-gradient(90deg, rgba(0,0,0,0.6), rgba(30,0,0,0.4));
  border-radius: 12px;
  list-style: none;
}

ul#menu li {
  position: relative;
  padding: 6px 14px;
  transition: transform 250ms ease, filter 250ms ease;
  cursor: pointer;
  border-radius: 8px;
}

/* small skull badge near each item (appears on hover) */
ul#menu li::before {
  content: "💀";
  position: absolute;
  left: -18px;
  top: 50%;
  transform: translateY(-50%) scale(0.6) rotate(-10deg);
  opacity: 0;
  transition: all 220ms ease;
  filter: drop-shadow(0 0 6px rgba(255,0,0,0.9));
}

ul#menu li:hover::before {
  opacity: 1;
  transform: translateY(-50%) scale(1) rotate(0deg);
}

/* animated entrance for items */
ul#menu li {
  animation: menuItemFloat 3s ease-in-out infinite;
}

/* offset each nth-child slightly for stagger */
ul#menu li:nth-child(1) { animation-delay: 0s; }
ul#menu li:nth-child(2) { animation-delay: 0.15s; }
ul#menu li:nth-child(3) { animation-delay: 0.3s; }
ul#menu li:nth-child(4) { animation-delay: 0.45s; }
ul#menu li:nth-child(5) { animation-delay: 0.6s; }

@keyframes menuItemFloat {
  0% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0); }
}

/* router-link / anchor styles */
ul#menu a {
  color: #ffd0a8;
  text-decoration: none;
  font-weight: 700;
  padding: 6px 10px;
  display: inline-block;
  transition: color 200ms ease, transform 200ms ease, text-shadow 200ms ease;
  text-shadow: 0 0 6px rgba(255,80,80,0.6);
}

ul#menu a:hover {
  color: #ffffff;
  transform: translateY(-3px) scale(1.02);
  text-shadow: 0 0 14px rgba(255,0,0,0.9);
}

/* highlight for active route (Vue adds .router-link-active) */
.router-link-active {
  color: #fff;
  background: linear-gradient(90deg,#8b0000,#ff0000);
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: 0 0 18px rgba(255, 0, 0, 0.6), inset 0 0 8px rgba(0,0,0,0.5);
}

/* style the button to match the skull theme */
ul#menu button {
  background: transparent;
  border: 2px solid #ff4444;
  color: #ffd0a8;
  padding: 6px 12px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;
}

ul#menu button:hover {
  transform: translateY(-3px) rotate(-2deg);
  box-shadow: 0 6px 20px rgba(255,0,0,0.5);
}

/* occasional spinning skull on the left of the menu container */
div::before {
  content: "💀";
  position: absolute;
  left: -8px;
  top: -8px;
  font-size: 26px;
  opacity: 0.9;
  transform-origin: center;
  animation: spinSkull 6s linear infinite;
  filter: drop-shadow(0 0 8px rgba(255,0,0,0.9));
}

@keyframes spinSkull {
  0% { transform: rotate(0deg) translate(0,0); }
  50% { transform: rotate(180deg) translate(-2px,-2px); }
  100% { transform: rotate(360deg) translate(0,0); }
}

/* responsive tweak: vertical menu on small screens */
@media (max-width: 520px) {
  ul#menu {
    flex-direction: column;
    gap: 8px;
    align-items: stretch;
  }
  div::before { left: 6px; top: 6px; font-size: 20px; }
}
</style>