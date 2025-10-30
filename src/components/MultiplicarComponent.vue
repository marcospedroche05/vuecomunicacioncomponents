<template>
  <div id="multiplicar-container">
    <h1>🎰 Tabla multiplicar del {{ numero }} 💰</h1>
    <div id="contenedorTabla">
      <table>
        <thead>
          <tr>
            <th>🎲 Operación</th>
            <th>⭐ Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>{{ numero }} × {{ i }}</td>
            <td class="resultado">{{ numero * i }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiplicarComponent",
  data() {
    return {
      numero: 0,
    };
  },
  mounted() {
    this.numero = this.$route.params.numero;
  },
  watch: {
    "$route.params.numero"(nextVal, oldVal) {
      this.numero = this.$route.params.numero;
      console.log(nextVal, oldVal);
    },
  },
};
</script>

<style>
/* 🎰💎 CASINO MULTIPLICATION TABLE STYLE 💎🎰 */
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

#multiplicar-container {
  min-height: 100vh;
  padding: 40px 20px;
  background: 
    radial-gradient(circle at 20% 30%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.2) 0%, transparent 50%),
    linear-gradient(135deg, #0d001a 0%, #1a0033 50%, #0d001a 100%);
  background-attachment: fixed;
  position: relative;
}

/* Decoración de fondo - slots giratorios */
#multiplicar-container::before {
  content: "🎰 💎 🍒 ⭐ 🎲 💰";
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 120px;
  opacity: 0.05;
  z-index: 0;
  animation: backgroundSlotSpin 20s linear infinite;
  white-space: nowrap;
}

@keyframes backgroundSlotSpin {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 3.5em;
  color: #ffd700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 40px;
  text-shadow: 
    0 0 20px rgba(255, 215, 0, 1),
    0 0 40px rgba(255, 0, 255, 0.8),
    0 0 60px rgba(138, 43, 226, 0.6);
  animation: neonFlicker 3s ease-in-out infinite;
  position: relative;
  z-index: 1;
}

@keyframes neonFlicker {
  0%, 100% {
    text-shadow: 
      0 0 20px rgba(255, 215, 0, 1),
      0 0 40px rgba(255, 0, 255, 0.8);
  }
  50% {
    text-shadow: 
      0 0 30px rgba(255, 215, 0, 1),
      0 0 60px rgba(255, 0, 255, 1),
      0 0 80px rgba(138, 43, 226, 0.8);
  }
}

div#contenedorTabla {
  display: flex;
  justify-content: center;
  padding: 20px;
  position: relative;
  z-index: 1;
}

table {
  background: linear-gradient(145deg, rgba(26, 0, 51, 0.9), rgba(13, 0, 26, 0.95));
  border: 4px solid #ffd700;
  border-radius: 20px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  box-shadow: 
    0 0 40px rgba(255, 215, 0, 0.6),
    0 0 60px rgba(255, 0, 255, 0.4),
    inset 0 0 30px rgba(138, 43, 226, 0.2);
  animation: tablePulse 4s ease-in-out infinite;
}

@keyframes tablePulse {
  0%, 100% {
    box-shadow: 
      0 0 40px rgba(255, 215, 0, 0.6),
      0 0 60px rgba(255, 0, 255, 0.4);
  }
  50% {
    box-shadow: 
      0 0 60px rgba(255, 215, 0, 0.9),
      0 0 80px rgba(255, 0, 255, 0.7);
  }
}

thead {
  background: linear-gradient(135deg, #8b00ff, #4b0082);
}

th {
  padding: 18px 40px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.8em;
  color: #ffd700;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: none;
  text-shadow: 
    0 0 10px rgba(255, 215, 0, 1),
    0 0 20px rgba(255, 255, 255, 0.6);
  position: relative;
}

th::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, 
    transparent, 
    #ffd700, 
    #ff00ff, 
    #ffd700, 
    transparent);
  animation: lineGlow 2s linear infinite;
}

@keyframes lineGlow {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

tbody tr {
  transition: all 300ms ease;
}

tbody tr:nth-child(odd) {
  background: rgba(42, 8, 69, 0.4);
}

tbody tr:nth-child(even) {
  background: rgba(26, 0, 51, 0.4);
}

tbody tr:hover {
  background: linear-gradient(90deg, 
    rgba(139, 0, 255, 0.6), 
    rgba(255, 0, 255, 0.5),
    rgba(139, 0, 255, 0.6));
  transform: scale(1.03) translateX(5px);
  box-shadow: 
    inset 0 0 20px rgba(255, 215, 0, 0.4),
    0 4px 20px rgba(255, 0, 255, 0.6);
}

td {
  padding: 16px 35px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4em;
  color: #ffd0a8;
  border: 1px solid rgba(255, 215, 0, 0.2);
  text-align: center;
  transition: all 400ms ease;
}

td:hover {
  background: linear-gradient(135deg, #ffd700, #ff00ff);
  color: #ffffff;
  transform: scale(1.1);
  text-shadow: 
    0 0 15px rgba(255, 255, 255, 1),
    0 0 30px rgba(255, 215, 0, 1);
  box-shadow: 
    0 0 25px rgba(255, 215, 0, 1),
    inset 0 0 15px rgba(255, 255, 255, 0.3);
  cursor: pointer;
  z-index: 10;
  position: relative;
}

/* Efecto especial para la columna de resultados */
td.resultado {
  font-weight: 900;
  color: #ffd700;
  font-size: 1.6em;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

td.resultado:hover {
  animation: resultadoJackpot 0.5s ease-out;
}

@keyframes resultadoJackpot {
  0% { 
    transform: scale(1);
  }
  25% { 
    transform: scale(1.3) rotate(-5deg);
  }
  50% { 
    transform: scale(1.3) rotate(5deg);
  }
  75% { 
    transform: scale(1.3) rotate(-5deg);
  }
  100% { 
    transform: scale(1.1);
  }
}

/* Efecto de monedas cayendo en hover de filas */
tbody tr:hover::before {
  content: "💰";
  position: absolute;
  left: -40px;
  font-size: 30px;
  animation: coinFall 0.8s ease-out;
}

tbody tr:hover::after {
  content: "💰";
  position: absolute;
  right: -40px;
  font-size: 30px;
  animation: coinFall 0.8s ease-out;
  animation-delay: 0.2s;
}

@keyframes coinFall {
  0% {
    transform: translateY(-50px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(20px) rotate(360deg);
    opacity: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2em;
  }
  
  th {
    padding: 12px 20px;
    font-size: 1.3em;
  }
  
  td {
    padding: 10px 15px;
    font-size: 1.1em;
  }
  
  td.resultado {
    font-size: 1.3em;
  }
  
  table {
    border: 3px solid #ffd700;
  }
}
</style>