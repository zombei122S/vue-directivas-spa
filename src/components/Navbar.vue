<script setup>
import { ref } from 'vue'

// Controla si el menú está abierto en pantallas pequeñas
const abierto = ref(false)
</script>

<template>
  <header class="site-header">
    <div class="container header-top">
      <router-link to="/" class="brand" @click="abierto = false">
        <span class="brand-logo" aria-hidden="true">V</span>
        <span class="brand-text">
          <strong>SPA en Vue 3</strong>
          <small>Directivas y estructuras de control</small>
        </span>
      </router-link>
      <button
        class="menu-btn"
        type="button"
        :aria-expanded="abierto"
        aria-label="Abrir o cerrar el menú"
        @click="abierto = !abierto"
      >
        Menú
      </button>
    </div>

    <nav class="container nav" :class="{ abierto }" aria-label="Navegación principal">
      <router-link to="/" exact-active-class="activo" @click="abierto = false">Inicio</router-link>
      <router-link to="/condicionales" exact-active-class="activo" @click="abierto = false">v-if / v-else</router-link>
      <router-link to="/v-show" exact-active-class="activo" @click="abierto = false">v-show</router-link>
      <router-link to="/v-for" exact-active-class="activo" @click="abierto = false">v-for</router-link>
      <router-link to="/v-bind-key" exact-active-class="activo" @click="abierto = false">:key</router-link>
    </nav>
  </header>
</template>
