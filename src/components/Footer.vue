<script setup>
// Cambia estos datos por los tuyos
const alumno = 'Tu nombre completo'
const grupo = 'Tu grupo o matrícula'
const anio = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <p><strong>Proyecto escolar:</strong> SPA en Vue 3, Directivas y estructuras de control.</p>
      <p>Programación Web · Unidad 3 · {{ alumno }} · {{ grupo }} · {{ anio }}</p>
    </div>
  </footer>
</template>
