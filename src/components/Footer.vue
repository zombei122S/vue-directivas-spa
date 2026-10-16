<script setup>
// Cambia estos datos por los tuyos
const alumno = 'Fernandez Culebro Sebastian Ali, Gabriel Alejandro Cruz Guillen, Ricardo Francisco Pinto Velasco'
const grupo = 'S5A'
const anio = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <p><strong>Proyecto Programacion Web:</strong> SPA en Vue 3, Directivas y estructuras de control.</p>
      <p>Programación Web · Unidad 3 · {{ alumno }} · {{ grupo }} · {{ anio }}</p>
    </div>
  </footer>
</template>
