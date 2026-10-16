<script setup>
import { ref, computed } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const visible = ref(true)
const estiloActual = computed(() => (visible.value ? 'display: block' : 'display: none'))

const codigo = `<button @click="visible = !visible">Mostrar / ocultar</button>

<div v-show="visible">
  Este contenido se muestra u oculta con CSS.
</div>`
</script>

<template>
  <section class="container">
    <h1 class="page-title">v-show</h1>
    <p class="lead">Muestra u oculta un elemento cambiando su estilo CSS.</p>

    <div class="grid-2">
      <article class="card">
        <h2>¿Cómo funciona?</h2>
        <p>
          <code>v-show</code> deja el elemento <strong>siempre en el DOM</strong>. Cuando la
          condición es falsa, solo agrega el estilo <code>display: none</code>.
        </p>
        <p>
          Es útil cuando algo se muestra y oculta muchas veces, porque no hay que crear y
          destruir el elemento cada vez. A diferencia de <code>v-if</code>, no admite
          <code>v-else</code>.
        </p>
      </article>

      <article class="card">
        <h2>Ejemplo interactivo</h2>
        <button class="btn" type="button" @click="visible = !visible">
          {{ visible ? 'Ocultar elemento' : 'Mostrar elemento' }}
        </button>

        <div v-show="visible" class="mensaje ok">Ahora me ves. Sigo en el DOM aunque me ocultes.</div>

        <p class="detalle">
          Estilo CSS del elemento: <code>{{ estiloActual }}</code>
        </p>
        <p class="detalle">Abre las herramientas del navegador (F12) y comprueba que el div sigue ahí.</p>
      </article>
    </div>

    <CodeBlock titulo="Código del ejemplo" :codigo="codigo" />
  </section>
</template>
