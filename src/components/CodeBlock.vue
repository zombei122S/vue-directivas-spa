<script setup>
// Muestra un fragmento de código con título.
defineProps({
  titulo: { type: String, default: 'Código' },
  codigo: { type: String, required: true },
})
</script>

<template>
  <figure class="code-block">
    <figcaption>{{ titulo }}</figcaption>
    <pre><code>{{ codigo }}</code></pre>
  </figure>
</template>
