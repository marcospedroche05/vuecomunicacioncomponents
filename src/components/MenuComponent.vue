<template>
  <div>
    <ul id="menu">
      <li><router-link to="/">Deportes</router-link></li>
      <li><router-link to="/comics">Comics</router-link></li>
      <li><router-link to="/numeros">Numeros</router-link></li>
      <li v-for="num in numeros" :key="num">
        <router-link :to="'/multiplicar/' + num"
          >Tabla del {{ num }}</router-link
        >
      </li>
      <li><button @click="redirectHome">Volver a home</button></li>
    </ul>
  </div>
  <hr />
  <router-view></router-view>
</template>

<script>
export default {
  name: "MenuComponent",
  methods: {
    redirectHome() {
      this.$router.push("/");
    },
    generaRandom() {
      for (let i = 1; i <= 4; i++) {
        this.numeros.push(parseInt(Math.random() * 100 + 1));
      }
    },
  },
  data() {
    return {
      numeros: [],
    };
  },
  mounted(){
    this.generaRandom();
  }
};
</script>

<style>
/* 🎰💎 CASINO & SLOTS VEGAS STYLE 💎🎰 */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

ul#menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  padding: 20px 15px;
  background: 
    linear-gradient(135deg, #1a0033 0%, #0d001a 50%, #1a0033 100%),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 10px,
      rgba(255, 215, 0, 0.05) 10px,
      rgba(255, 215, 0, 0.05) 20px
    );
  border: 4px solid #ffd700;
  border-radius: 16px;
  box-shadow: 
    0 0 30px rgba(255, 215, 0, 0.6),
    inset 0 0 20px rgba(138, 43, 226, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.8);
  list-style: none;
  position: relative;
  animation: casinoBorderGlow 2s ease-in-out infinite;
}

@keyframes casinoBorderGlow {
  0%, 100% { 
    border-color: #ffd700;
    box-shadow: 
      0 0 30px rgba(255, 215, 0, 0.6),
      inset 0 0 20px rgba(138, 43, 226, 0.3);
  }
  50% { 
    border-color: #ff00ff;
    box-shadow: 
      0 0 50px rgba(255, 0, 255, 0.8),
      inset 0 0 30px rgba(138, 43, 226, 0.5);
  }
}

ul#menu li {
  position: relative;
  padding: 8px 16px;
  background: linear-gradient(145deg, #2a0845, #1a0033);
  border: 2px solid #8b00ff;
  border-radius: 12px;
  transition: all 250ms ease;
  cursor: pointer;
  box-shadow: 
    0 4px 15px rgba(138, 43, 226, 0.4),
    inset 0 2px 8px rgba(255, 215, 0, 0.1);
  animation: slotMachineBounce 4s ease-in-out infinite;
}

/* Iconos de casino que aparecen al hacer hover */
ul#menu li::before {
  content: "🎰";
  position: absolute;
  left: -35px;
  top: 50%;
  transform: translateY(-50%) scale(0.5);
  opacity: 0;
  font-size: 28px;
  transition: all 280ms ease;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 1));
}

ul#menu li:nth-child(2)::before { content: "💎"; }
ul#menu li:nth-child(3)::before { content: "🍒"; }
ul#menu li:nth-child(4)::before { content: "⭐"; }
ul#menu li:nth-child(5)::before { content: "🎲"; }
ul#menu li:nth-child(6)::before { content: "💰"; }

ul#menu li:hover::before {
  opacity: 1;
  transform: translateY(-50%) scale(1.2) rotate(15deg);
  animation: slotIconSpin 0.6s ease-out;
}

@keyframes slotIconSpin {
  0% { transform: translateY(-50%) scale(0.5) rotate(0deg); }
  50% { transform: translateY(-50%) scale(1.4) rotate(180deg); }
  100% { transform: translateY(-50%) scale(1.2) rotate(360deg); }
}

ul#menu li:hover {
  transform: scale(1.08) translateY(-3px);
  border-color: #ffd700;
  box-shadow: 
    0 6px 25px rgba(255, 215, 0, 0.7),
    inset 0 2px 12px rgba(255, 0, 255, 0.3);
  background: linear-gradient(145deg, #3d0a5f, #2a0845);
}

/* Animación de rebote tipo slot machine */
@keyframes slotMachineBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Retraso escalonado para cada item */
ul#menu li:nth-child(1) { animation-delay: 0s; }
ul#menu li:nth-child(2) { animation-delay: 0.2s; }
ul#menu li:nth-child(3) { animation-delay: 0.4s; }
ul#menu li:nth-child(4) { animation-delay: 0.6s; }
ul#menu li:nth-child(5) { animation-delay: 0.8s; }
ul#menu li:nth-child(6) { animation-delay: 1s; }

/* Estilos de los enlaces - estilo neón Vegas */
ul#menu a {
  color: #ffd700;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.5px;
  padding: 8px 12px;
  display: inline-block;
  transition: all 220ms ease;
  text-shadow: 
    0 0 8px rgba(255, 215, 0, 0.8),
    0 0 16px rgba(255, 215, 0, 0.5);
  text-transform: uppercase;
}

ul#menu a:hover {
  color: #ffffff;
  transform: scale(1.05);
  text-shadow: 
    0 0 12px rgba(255, 0, 255, 1),
    0 0 24px rgba(138, 43, 226, 0.8),
    0 0 36px rgba(255, 215, 0, 0.6);
}

/* Ruta activa - estilo jackpot ganador */
.router-link-active {
  color: #fff;
  background: linear-gradient(135deg, #ffd700, #ff00ff, #ffd700);
  background-size: 200% 200%;
  padding: 8px 16px;
  border-radius: 10px;
  box-shadow: 
    0 0 25px rgba(255, 215, 0, 0.9),
    0 0 40px rgba(255, 0, 255, 0.7),
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  animation: jackpotWin 1.5s ease-in-out infinite;
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 1),
    0 0 20px rgba(255, 215, 0, 1);
}

@keyframes jackpotWin {
  0%, 100% { 
    background-position: 0% 50%;
    box-shadow: 
      0 0 25px rgba(255, 215, 0, 0.9),
      0 0 40px rgba(255, 0, 255, 0.7);
  }
  50% { 
    background-position: 100% 50%;
    box-shadow: 
      0 0 40px rgba(255, 215, 0, 1),
      0 0 60px rgba(255, 0, 255, 1);
  }
}

/* Botón estilo ficha de casino */
ul#menu button {
  background: radial-gradient(circle, #8b00ff, #4b0082);
  border: 3px solid #ffd700;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 50px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 200ms ease;
  box-shadow: 
    0 0 20px rgba(255, 215, 0, 0.6),
    inset 0 0 10px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

button::before {
  content: "💰";
  position: absolute;
  left: 8px;
  font-size: 16px;
  animation: coinFlip 2s ease-in-out infinite;
}

@keyframes coinFlip {
  0%, 100% { transform: rotateY(0deg); }
  50% { transform: rotateY(180deg); }
}

ul#menu button:hover {
  transform: scale(1.12) rotate(-3deg);
  box-shadow: 
    0 0 35px rgba(255, 215, 0, 1),
    0 0 50px rgba(255, 0, 255, 0.8),
    inset 0 0 15px rgba(255, 255, 255, 0.4);
  border-color: #ff00ff;
}

ul#menu button:active {
  transform: scale(0.95);
  animation: chipPress 0.3s ease-out;
}

@keyframes chipPress {
  0% { box-shadow: 0 0 35px rgba(255, 215, 0, 1); }
  50% { box-shadow: 0 0 60px rgba(255, 215, 0, 1), 0 0 80px rgba(255, 0, 255, 1); }
  100% { box-shadow: 0 0 35px rgba(255, 215, 0, 1); }
}

/* Decoración: slot machine girando en la esquina */
div::before {
  content: "🎰";
  position: absolute;
  left: -15px;
  top: -15px;
  font-size: 40px;
  opacity: 0.9;
  animation: slotMachineRotate 8s linear infinite;
  filter: drop-shadow(0 0 15px rgba(255, 215, 0, 1));
}

@keyframes slotMachineRotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Decoración: diamante en la otra esquina */
div::after {
  content: "💎";
  position: absolute;
  right: -15px;
  bottom: -15px;
  font-size: 35px;
  opacity: 0.85;
  animation: diamondPulse 3s ease-in-out infinite;
  filter: drop-shadow(0 0 12px rgba(138, 43, 226, 1));
}

@keyframes diamondPulse {
  0%, 100% { 
    transform: scale(1);
    filter: drop-shadow(0 0 12px rgba(138, 43, 226, 1));
  }
  50% { 
    transform: scale(1.2);
    filter: drop-shadow(0 0 25px rgba(255, 0, 255, 1));
  }
}

/* Responsive: menú vertical en pantallas pequeñas */
@media (max-width: 768px) {
  ul#menu {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
  
  ul#menu li::before {
    left: 50%;
    top: -25px;
    transform: translateX(-50%) scale(0.7);
  }
  
  ul#menu li:hover::before {
    top: -30px;
    transform: translateX(-50%) scale(1);
  }
  
  div::before {
    left: 10px;
    top: 10px;
    font-size: 30px;
  }
  
  div::after {
    right: 10px;
    bottom: 10px;
    font-size: 28px;
  }
}

/* Efecto de luces parpadeantes estilo Vegas */
@keyframes vegasLights {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

ul#menu li:nth-child(odd) {
  animation: slotMachineBounce 4s ease-in-out infinite, vegasLights 3s ease-in-out infinite;
}
</style>