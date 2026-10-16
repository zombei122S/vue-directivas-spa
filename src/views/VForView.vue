<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const tecnologias = ref([
  { id: 1, nombre: 'HTML', tipo: 'Estructura', descripcion: 'Define el contenido de la página.' },
  { id: 2, nombre: 'CSS', tipo: 'Estilo', descripcion: 'Da color, forma y diseño al contenido.' },
  { id: 3, nombre: 'JavaScript', tipo: 'Lógica', descripcion: 'Agrega comportamiento e interactividad.' },
  { id: 4, nombre: 'Vue 3', tipo: 'Framework', descripcion: 'Construye interfaces reactivas por componentes.' },
  { id: 5, nombre: 'Vue Router', tipo: 'Navegación', descripcion: 'Maneja las rutas de una SPA.' },
  { id: 6, nombre: 'Vite', tipo: 'Herramienta', descripcion: 'Ejecuta y compila el proyecto rápidamente.' },
])

const codigo = `<div class="card" v-for="tec in tecnologias" :key="tec.id">
  <h3>{{ tec.nombre }}</h3>
  <p>{{ tec.descripcion }}</p>
</div>

<!-- También puedes usar el índice -->
<li v-for="(tec, index) in tecnologias" :key="tec.id">
  {{ index + 1 }}. {{ tec.nombre }}
</li>`
</script>

<template>
  <section class="container">
    <h1 class="page-title">v-for</h1>
    <p class="lead">Repite un elemento por cada dato de una lista o arreglo.</p>

    <article class="card">
      <h2>¿Para qué sirve?</h2>
      <p>
        La sintaxis es <code>v-for="elemento in lista"</code>. Vue crea un elemento por cada
        dato del arreglo, y si el arreglo cambia, la pantalla se actualiza sola.
      </p>
    </article>

    <h2 class="section-title">Tecnologías web (generadas con v-for)</h2>
    <div class="grid-3">
      <article v-for="tec in tecnologias" :key="tec.id" class="card tec">
        <span class="etiqueta">{{ tec.tipo }}</span>
        <h3>{{ tec.nombre }}</h3>
        <p>{{ tec.descripcion }}</p>
      </article>
    </div>

    <article class="card">
      <h2>Usando el índice</h2>
      <ol class="lista">
        <li v-for="(tec, index) in tecnologias" :key="tec.id">
          Posición {{ index }}: {{ tec.nombre }}
        </li>
      </ol>
    </article>

    <CodeBlock titulo="Código del ejemplo" :codigo="codigo" />
  </section>
</template>
