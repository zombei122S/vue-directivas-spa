<script setup>
const temas = [
  { to: '/condicionales', titulo: 'v-if, v-else-if y v-else', texto: 'Muestran u ocultan contenido según una condición.' },
  { to: '/v-show', titulo: 'v-show', texto: 'Oculta elementos con CSS sin quitarlos del DOM.' },
  { to: '/v-for', titulo: 'v-for', texto: 'Repite un elemento por cada dato de una lista.' },
  { to: '/v-bind-key', titulo: ':key', texto: 'Identifica cada elemento de una lista de forma única.' },
]
</script>

<template>
  <section class="container">
    <div class="hero">
      <h1>Aprende las directivas de Vue 3 probándolas</h1>
      <p class="lead">
        Este sitio es una Single Page Application. Cada página explica una directiva y
        tiene un ejemplo que puedes manipular para ver cómo reacciona la interfaz.
      </p>
      <router-link to="/condicionales" class="btn">Empezar con v-if</router-link>
    </div>

    <h2 class="section-title">Temas del sitio</h2>
    <div class="grid-2">
      <router-link v-for="tema in temas" :key="tema.to" :to="tema.to" class="card card-link">
        <h3>{{ tema.titulo }}</h3>
        <p>{{ tema.texto }}</p>
      </router-link>
    </div>

    <article class="card nota">
      <h3>¿Qué es una SPA?</h3>
      <p>
        Una Single Page Application carga una sola página y cambia su contenido con
        JavaScript. Vue Router cambia de sección sin recargar el navegador, por eso la
        navegación es rápida.
      </p>
    </article>
  </section>
</template>
