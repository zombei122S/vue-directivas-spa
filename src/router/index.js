import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CondicionalesView from '../views/CondicionalesView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindKeyView from '../views/VBindKeyView.vue'

const routes = [
  { path: '/', name: 'inicio', component: HomeView },
  { path: '/condicionales', name: 'condicionales', component: CondicionalesView },
  { path: '/v-show', name: 'v-show', component: VShowView },
  { path: '/v-for', name: 'v-for', component: VForView },
  { path: '/v-bind-key', name: 'v-bind-key', component: VBindKeyView },
  // Cualquier ruta desconocida regresa al inicio
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

// Modo "hash" (/#/ruta): funciona en GitHub Pages sin errores 404 al recargar.
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
