<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const calificacion = ref(80)

const codigo = `<p v-if="calificacion >= 90">Excelente</p>
<p v-else-if="calificacion >= 70">Aprobado</p>
<p v-else>Reprobado</p>`
</script>

<template>
  <section class="container">
    <h1 class="page-title">v-if, v-else-if y v-else</h1>
    <p class="lead">Renderizan un bloque solo cuando se cumple una condición.</p>

    <div class="grid-2">
      <article class="card">
        <h2>¿Para qué sirven?</h2>
        <ul class="lista">
          <li><code>v-if</code> muestra el elemento si la condición es verdadera.</li>
          <li><code>v-else-if</code> prueba otra condición si la anterior fue falsa.</li>
          <li><code>v-else</code> se usa cuando ninguna condición anterior se cumplió.</li>
        </ul>
        <p>
          Los elementos que no cumplen la condición <strong>no se crean</strong> en el DOM.
          Los tres deben ir uno justo después del otro.
        </p>
      </article>

      <article class="card">
        <h2>Ejemplo interactivo</h2>
        <label for="cal">Calificación: <strong>{{ calificacion }}</strong></label>
        <input id="cal" type="range" min="0" max="100" v-model.number="calificacion" />
        <div class="botones">
          <button class="btn btn-outline" type="button" @click="calificacion = 95">95</button>
          <button class="btn btn-outline" type="button" @click="calificacion = 75">75</button>
          <button class="btn btn-outline" type="button" @click="calificacion = 40">40</button>
        </div>

        <p v-if="calificacion >= 90" class="mensaje ok">Excelente: ¡muy buen trabajo!</p>
        <p v-else-if="calificacion >= 70" class="mensaje aviso">Aprobado: puedes mejorar.</p>
        <p v-else class="mensaje error">Reprobado: hay que repasar el tema.</p>
      </article>
    </div>

    <CodeBlock titulo="Código del ejemplo" :codigo="codigo" />
  </section>
</template>
