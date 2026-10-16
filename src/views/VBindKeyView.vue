<script setup>
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

let siguienteId = 4
const usarIndice = ref(false)
const tareas = ref([
  { id: 1, texto: 'Estudiar v-if' },
  { id: 2, texto: 'Practicar v-for' },
  { id: 3, texto: 'Subir a GitHub' },
])

function agregarAlInicio() {
  tareas.value.unshift({ id: siguienteId, texto: 'Tarea nueva ' + siguienteId })
  siguienteId++
}

function eliminar(id) {
  tareas.value = tareas.value.filter((t) => t.id !== id)
}

const codigo = `<li v-for="tarea in tareas" :key="tarea.id">
  {{ tarea.texto }}
</li>

<!-- Equivalente: v-bind:key="tarea.id" -->`
</script>

<template>
  <section class="container">
    <h1 class="page-title">v-bind:key (:key)</h1>
    <p class="lead">Da una identidad única a cada elemento creado con v-for.</p>

    <div class="grid-2">
      <article class="card">
        <h2>¿Por qué es importante?</h2>
        <p>
          Con <code>:key</code> Vue sabe cuál elemento es cuál cuando la lista cambia. Así
          mueve, agrega o elimina solo lo necesario y no confunde el estado de los elementos.
        </p>
        <ul class="lista">
          <li>Usa un <strong>identificador único</strong> (como <code>tarea.id</code>).</li>
          <li>Debe ser <strong>estable</strong>: no cambia aunque la lista cambie.</li>
          <li>Evita usar el índice del arreglo como clave si la lista puede cambiar.</li>
        </ul>
      </article>

      <article class="card">
        <h2>Ejemplo interactivo</h2>
        <p class="detalle">
          Escribe una nota en alguna tarea y luego presiona «Agregar al inicio».
        </p>
        <div class="botones">
          <button class="btn" type="button" @click="agregarAlInicio">Agregar al inicio</button>
        </div>
        <label class="check">
          <input type="checkbox" v-model="usarIndice" />
          Usar el índice como clave (mal ejemplo)
        </label>

        <ul class="tareas">
          <li v-for="(tarea, index) in tareas" :key="usarIndice ? index : tarea.id">
            <span>{{ tarea.texto }} <small>(id {{ tarea.id }})</small></span>
            <input type="text" placeholder="Escribe una nota" />
            <button class="btn btn-outline" type="button" @click="eliminar(tarea.id)">Quitar</button>
          </li>
        </ul>

        <p v-if="usarIndice" class="mensaje error">
          Con el índice como clave, la nota se queda en la posición y no con su tarea.
        </p>
        <p v-else class="mensaje ok">
          Con <code>tarea.id</code> como clave, cada nota se mueve junto con su tarea.
        </p>
      </article>
    </div>

    <CodeBlock titulo="Uso correcto de :key" :codigo="codigo" />
  </section>
</template>
