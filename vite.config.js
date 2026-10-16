import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// IMPORTANTE: "base" debe ser el nombre de tu repositorio entre diagonales.
// Si cambias el nombre del repo, cambia también este valor.
export default defineConfig({
  plugins: [vue()],
  base: '/vue-directivas-spa/',
})
