import { createRouter, createWebHistory } from "vue-router";
import PadreDeportes from "./components/PadreDeportes.vue";
import ComicsComponent from "./components/ComicsComponent.vue";
import PadreNumeros from "./components/PadreNumeros.vue";
import NumeroDoble from "./components/NumeroDoble.vue"

const myRoutes = [
    {path: "/", component: PadreDeportes},
    {path: "/comics", component: ComicsComponent},
    {path: "/numeros", component: PadreNumeros},
    {path: "/doble/:numero?", component: NumeroDoble}
]

const router = createRouter({
    routes: myRoutes,
    history: createWebHistory()
})

export default router;